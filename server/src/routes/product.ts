import { Router, Request, Response } from "express";
import ProductModel from "../models/product";
import { verifyToken } from "./user";
import { UserModel } from "../models/user";
import { ProductErrors, UserErrors } from "../error";

const router = Router();

router.get("/", verifyToken, async (_, res: Response) => {
    try {
        const products = await ProductModel.find({});
        res.json({ products });
    } catch (error) {
        res.status(400).json({ error });
    }
})

router.post("/checkout",  async (req: Request, res: Response) => {
    const { customerId, cartItems } = req.body;

    try {
        const user = await UserModel.findById(customerId);
        const productIds = Object.keys(cartItems)
        const products = await ProductModel.find({ _id: { $in: productIds } });

        if (!user) {
            return res.status(400).json({ type: UserErrors.NO_USER_FOUND });
        }
        if (!products) {
            return res.status(400).json({ type: ProductErrors.NO_PRODUCT_FOUND });
        }

        let totalPrice = 0;

        for (const item in cartItems) {
            const product = products.find((product) => String(product._id) === item)

            if (!product) {
                return res.status(400).json({ type: ProductErrors.NO_PRODUCT_FOUND });
            }

            if (product.stockQuantity < cartItems[item]) {
                return res.status(400).json({ type: ProductErrors.NOT_ENOUGH_STOCK });
            }

            totalPrice += product.price * cartItems[item];

        }

        if (user.availabeMoney < totalPrice) {
            return res.status(400).json({ type: ProductErrors.NOT_ENOUGH_MONEY });
        }

        user.availabeMoney -= totalPrice;
        user.purchasedItems.push(...productIds)
        await user.save();
        await ProductModel.updateMany({ _id: { $in: productIds } }, { $inc: { stockQuantity: -1 } });

        res.json({purchasedItems: user.purchasedItems}); 

    } catch (error) {
        res.status(400).json(error);
    }
})

export { router as productRouter };