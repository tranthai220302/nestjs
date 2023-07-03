import { Controller, Get, Post, Res, Req, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { User } from './dtos/createUser';
import { Request, Response } from 'express';
import { UserService } from './user.service';
import { UserGuard } from './user.guard';

@Controller('user')
@UsePipes(new ValidationPipe())
export class UserController {
    constructor(private userService: UserService){}
    @Get("cc")
    @UseGuards(UserGuard)
    findAll(): object[] {
      return this.userService.fetchData()
    }
    
    @Post('create')
    createUser(@Body() userData: User){
        this.userService.createUser(userData)
    }
    @Get(":id")
    getById(@Param('id', ParseIntPipe) id: number){
        if(id == 1) throw new HttpException("cc", HttpStatus.BAD_REQUEST)
    }
}
