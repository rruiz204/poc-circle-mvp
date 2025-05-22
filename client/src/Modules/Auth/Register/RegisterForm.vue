<script lang="ts" setup>
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import Password from "primevue/password";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import FormField from "@Common/Atoms/FormField.vue";

import { ref } from "vue";
import { InputText } from "primevue";
import { useAuthStore } from "@Stores/AuthStore";
import { Form, type FormSubmitEvent } from "@primevue/forms";
import { RegisterResolver, type RegisterCommand } from "./RegisterSchema";

const checked = ref<boolean>(false);

const authStore = useAuthStore();

const onSubmit = async (event: FormSubmitEvent): Promise<void> => {
  await authStore.registerAction(event.values as RegisterCommand);
};
</script>

<template>
  <div class="w-full max-w-md p-4 flex flex-col gap-3">
    <Form v-slot="$form" :resolver="RegisterResolver" @submit="onSubmit" class="flex flex-col gap-4">

      <FormField name="username" label="Username" :form="$form.username">
        <IconField>
          <InputText id="username" name="username" type="text" placeholder="R3x" fluid />
          <InputIcon class="pi pi-user" />
        </IconField>
      </FormField>

      <FormField name="email" label="Email" :form="$form.email">
        <IconField>
          <InputText id="email" name="email" type="email" placeholder="name@example.com" fluid />
          <InputIcon class="pi pi-envelope" />
        </IconField>
      </FormField>

      <FormField name="password" label="Password" :form="$form.password">
        <Password id="password" name="password" :feedback="false" placeholder="hello1234" fluid toggle-mask />
      </FormField>

      <div class="flex items-center gap-2 py-2">
        <Checkbox v-model="checked" binary size="small" input-id="terms" name="terms" />
        <label for="terms" class="text-zinc-400 text-xs font-semibold">I agree to the terms of service and privacy policy</label>
      </div>

      <Button type="submit" fluid>
        <p class="font-semibold">Register</p>
      </Button>

    </Form>
  </div>
</template>