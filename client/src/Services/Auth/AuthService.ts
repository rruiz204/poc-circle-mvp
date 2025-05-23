import { HttpBuilder } from "../Http/HttpBuilder";
import { HttpService } from "../Http/HttpService";

import type { Token } from "@Models/Token";
import type { LoginCommand } from "@Modules/Auth/Login/LoginSchema";
import type { RegisterCommand } from "@Modules/Auth/Register/RegisterSchema";

export class AuthService {
  public static async login(command: LoginCommand) {
    const builder = new HttpBuilder("/auth/login", "POST").withBody(command);
    return await new HttpService(builder).invoke<Token.Data>();
  };

  public static async register(command: RegisterCommand) {
    const builder = new HttpBuilder("/auth/register", "POST").withBody(command);
    return await new HttpService(builder).invoke<Token.Data>();
  };
};