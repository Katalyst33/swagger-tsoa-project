
import { User } from "./user";
import { UsersService, UserCreationParams } from "./usersService";
import {Body, Controller, Get, Path, Post, Query, Route, SuccessResponse} from "tsoa";

@Route("users")
export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(
        @Path() userId: number,
    ): Promise<User> {
        return new UsersService().get(userId);
    }

    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<void> {

        this.setStatus(201); // set return status 201
        new UsersService().create(requestBody);
        return;
    }
}