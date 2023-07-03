import { IsEmpty, IsNotEmpty, IsEmail  } from "class-validator"

export class User {
    @IsNotEmpty()
    username: string
    @IsEmail()
    @IsNotEmpty()
    email: string
}