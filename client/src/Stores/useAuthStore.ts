import { useMutation } from "@tanstack/vue-query";
import { defineStore } from "pinia";

import { AuthService } from "@Services/Auth/AuthService";

export const useAuthStore = defineStore("auth", () => {

  const login = useMutation({
    mutationFn: AuthService.login,
  });

  const register = useMutation({
    mutationFn: AuthService.register,
  });

  return { login, register };
});