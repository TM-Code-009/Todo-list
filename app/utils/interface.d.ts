import { Document } from "mongoose";

export interface iUser{
    name: string;
    email: string;
    password: string;
    avatar:string;
    avatarID:string;
    todos:{}[]
}

export interface iUserData extends iUser, Document{}


export interface iTodos{
    title: string;
    description: string;
    status: boolean;
    user:{}
}

export interface iTodosData extends iTodos, Document{}