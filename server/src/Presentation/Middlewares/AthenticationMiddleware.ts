import { JwtService } from "@Services/Tokens/JwtService";
import { HttpException } from "@Exceptions/HttpException";
import type { Request, Response, NextFunction } from "express";

export const AuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) throw new HttpException.Unauthorized("Invalid token");

  try {
    const payload = await JwtService.verify(token);
    req.user = { id: payload.id };
    next();
  } catch (err) {
    console.log(err);
    throw new HttpException.Unauthorized("Bad token");
  };
};