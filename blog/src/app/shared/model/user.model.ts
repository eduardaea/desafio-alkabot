import { AddressModel } from "./address.model";

export interface UserModel{
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressModel
}