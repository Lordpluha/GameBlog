import { ExecutionContext, createParamDecorator,  } from "@nestjs/common";
import { Request } from "express";

export const Cookie = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest() as Request
        const cookies = request.cookies
        return data ? cookies?.[data] : cookies
    }
)