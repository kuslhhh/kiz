import { Link } from "react-router-dom"
import { ShoppingCart } from 'lucide-react';

export const Navbar = () => {

    return (
        <div className="flex justify-around bg-[#1a1a1a]/50 backdrop-blur-md p-4 rounded-lg">
            <div className="p-2  hover:bg-black rounded-md ">
                <Link to="/" className="p-2  hover:bg-black rounded-md "> Label Wolf </Link>
            </div>

            <div className="flex space-x-7">
                <Link to="/" className="p-2  hover:bg-black rounded-md "> Shop </Link>
                <Link to="/purchased-items" className="p-2  hover:bg-black rounded-md "> Purchases </Link>
                <Link to="/checkout" className="p-2  hover:bg-black rounded-md "> <ShoppingCart/>  </Link>
            </div>
        </div>
    )
}