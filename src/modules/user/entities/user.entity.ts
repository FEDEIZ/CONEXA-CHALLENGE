import { IEntity } from "src/utils/interfaces/IEntity";

export class User implements IEntity{
    _id: string;
    userName: string;
    email: string;
    password: string;
    role: Roles;
    createdAt: Date;
}

export enum Roles {admin = 'ADMIN', user = 'USER' }
