<script lang="ts" setup>
import Button from "primevue/button";

import { InputText } from "primevue";
import Password from "primevue/password";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";

import { Form } from "@primevue/forms";
import FormField from "@Common/Atoms/FormField.vue";
import { RegisterResolver } from "./RegisterSchema";
</script>

<template>
  <div class="w-full max-w-md p-4 flex flex-col gap-3">
    <Form v-slot="$form" :resolver="RegisterResolver" class="flex flex-col gap-4">

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

      <Button type="submit" fluid>
        <p class="font-semibold">Register</p>
      </Button>

    </Form>
  </div>
</template>