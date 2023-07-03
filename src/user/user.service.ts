import { Injectable } from '@nestjs/common';
import { User } from './dtos/createUser';

@Injectable()
export class UserService {
    private data = [
        {username : 'Thai', email: "thai@gmail.com"},
        {username : 'Thai1', email: "thai@gmail.com"},
        {username : 'Thai2', email: "thai@gmail.com"}
    ]
    fetchData(){
        return this.data;
    }
    createUser(userData: User){
        this.data.push(userData)

    }
}
