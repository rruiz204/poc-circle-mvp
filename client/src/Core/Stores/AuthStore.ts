import { reactive } from "vue";
import { defineStore } from "pinia";
import type { Token } from "@Models/Token";
import type { Fetching } from "@Models/Fetching";

import { KhaosBuilder } from "@Services/Khaos/KhaosBuilder";
import { KhaosService } from "@Services/Khaos/KhaosService";

import type { LoginCommand } from "@Modules/Auth/Login/LoginSchema";
import type { RegisterCommand } from "@Modules/Auth/Register/RegisterSchema";

export const useAuthStore = defineStore("auth-store", () => {

  const loginState = reactive<Fetching>({
    loading: false, error: null,
  });

  const registerState = reactive<Fetching>({
    loading: false, error: null,
  });

  const emailLogin = async (command: LoginCommand): Promise<void> => {
    loginState.loading = true;
    loginState.error = null;

    const builder = new KhaosBuilder("/auth/login", "POST").withBody(command);
    const response = await KhaosService.invoke<Token>(builder);

    if (response.error) loginState.error = response.error.message;
    else console.log(response.data);
    loginState.loading = false;
  };

  const emailRegister = async (command: RegisterCommand): Promise<void> => {
    registerState.loading = true;
    registerState.error = null;

    const builder = new KhaosBuilder("/auth/register", "POST").withBody(command);
    const response = await KhaosService.invoke<Token>(builder);

    if (response.error) registerState.error = response.error.message;
    else console.log(response.data);
    registerState.loading = false;
  };

  return {
    loginState,
    emailLogin,
    registerState,
    emailRegister,
  };
});