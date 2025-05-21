import { defineStore } from "pinia";
import { useKhaos } from "@Hooks/useKhaos";
import type { Token } from "@Models/Token";

import { KhaosBuilder } from "@Services/Khaos/KhaosBuilder";
import { KhaosService } from "@Services/Khaos/KhaosService";

import type { LoginCommand } from "@Modules/Auth/Login/LoginSchema";
import type { RegisterCommand } from "@Modules/Auth/Register/RegisterSchema";

export const useAuthStore = defineStore("auth-store", () => {
  const { state: loginState, wrapper: loginWrapper } = useKhaos();

  const loginAction = async (command: LoginCommand) => {
    const builder = new KhaosBuilder("/auth/login", "POST").withBody(command);
    const service = async () => await KhaosService.invoke<Token>(builder);
    const token = await loginWrapper<Token>(service);
    console.log(token);
  };

  const { state: registerState, wrapper: registerWrapper } = useKhaos();

  const registerAction = async (command: RegisterCommand) => {
    const builder = new KhaosBuilder("/auth/register", "POST").withBody(command);
    const service = async () => await KhaosService.invoke<Token>(builder);
    const token = await registerWrapper<Token>(service);
    console.log(token);
  };

  return {
    loginState,
    loginAction,
    registerState,
    registerAction,
  };
});