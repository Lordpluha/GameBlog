import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';

@UsePipes(new ValidationPipe({whitelist: true}))
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
