import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JWT_ACCESS_STRATEGY } from "../constants/auth.constants";

export const AccessJwtGuard = () => UseGuards(AuthGuard(JWT_ACCESS_STRATEGY))