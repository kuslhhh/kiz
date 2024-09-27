import { Schema, model } from "mongoose"

export interface IUser {
    _id?: String,
    username: string,
    password: string,
    availabeMoney: number,
    // purchasedItems: string[],
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    availabeMoney: {
        type: Number,
        default: 5000
    },
    // purchasedItems:
})

export const UserModel = model<IUser>("user", UserSchema)