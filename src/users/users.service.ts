import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user-validation.dto';

@Injectable()
export class UsersService {

    private usersList: any = [];

    create(createUserDto: CreateUserDto) {
        const newItem = {
            id: this.usersList.length + 1,
            ...createUserDto
        }
        this.usersList.push(newItem);
        return newItem;
    }


    findAll(role?: string) {
        if (role) {
            return this.usersList.filter(user => user.role === role);
        }
        return this.usersList;
    }

    findOne(id: number) {
        return this.usersList.find(item => item == id);
    }

}
