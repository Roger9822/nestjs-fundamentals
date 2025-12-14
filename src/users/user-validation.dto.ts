import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message: "Name must not be empty"})
    name: string;

    @IsEmail({},{message: "Validate Email"})
    @IsNotEmpty({message: "Email must not be empty"})
    email : string;

    @IsString()
    @IsNotEmpty({message: "Role must not be empty"})
    role: string;
}