import { IEntity } from "src/utils/interfaces/IEntity";

export class User implements IEntity{
    id: string;
    userName: string;
    email: string;
    password: string;
    createdAt: Date;
}
