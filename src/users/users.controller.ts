import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity'
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){} 

    @Get()
    getUsers(): Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        console.log(typeof id)
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser); 

    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id)
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
        return this.usersService.updateUser(id, user)

    }
}