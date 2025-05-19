<script lang="ts" setup>
import Button from "primevue/button";
import Password from "primevue/password";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import FormField from "@Common/Atoms/FormField.vue";

import { Form } from "@primevue/forms";
import { LoginResolver } from "./LoginSchema";
</script>

<template>
  <div class="w-full max-w-md p-4 flex flex-col gap-3">
    <Form v-slot="$form" :resolver="LoginResolver" class="flex flex-col gap-4">

      <FormField name="email" label="Email" :form="$form.email">
        <IconField>
          <InputText id="email" name="email" type="email" placeholder="example@example.com" fluid />
          <InputIcon class="pi pi-envelope" />
        </IconField>
      </FormField>

      <FormField name="password" label="Password" :form="$form.password">
        <Password id="password" name="password" :feedback="false" placeholder="p4ssw0rd" fluid toggle-mask />
      </FormField>

      <div class="flex justify-end">
        <span class="text-xs text-emerald-400 font-semibold">Forgot password?</span>
      </div>

      <Button type="submit" fluid>
        <p class="font-semibold">Login</p>
      </Button>
    </Form>

    <div class="flex items-center justify-center">
      <span class=" px-2 text-xs text-zinc-500">or continue with</span>
    </div>

    <div class="flex gap-3">
      <Button type="button" severity="secondary" fluid>
        <i class="pi pi-google"></i>
        <p class="font-semibold">Google</p>
      </Button>

      <Button type="button" severity="secondary" fluid>
        <i class="pi pi-github"></i>
        <p class="font-semibold">GitHub</p>
      </Button>
    </div>

  </div>
</template>