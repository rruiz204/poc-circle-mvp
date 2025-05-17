<script lang="ts" setup>
import Button from "primevue/button";
import Message from "primevue/message";
import Password from "primevue/password";

import { InputText } from "primevue";
import { Form } from "@primevue/forms";
import { RegisterResolver } from "./RegisterSchema";
</script>

<template>
  <div class="w-full max-w-md p-4">

    <Form v-slot="$form" :resolver="RegisterResolver" class="flex flex-col gap-4">
      <div>
        <InputText name="username" type="text" placeholder="Username" fluid class="mb-1" />
        <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
          {{ $form.username.error?.message }}
        </Message>
      </div>

      <div>
        <InputText name="email" type="email" placeholder="Email" fluid class="mb-1" />
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
          {{ $form.email.error?.message }}
        </Message>
      </div>

      <div>
        <Password name="password" :feedback="false" placeholder="Password" fluid toggle-mask class="mb-1" />
        <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
          {{ $form.password.error?.message }}
        </Message>
      </div>

      <Button type="submit" severity="secondary" fluid>
        <p class="font-semibold">Register</p>
      </Button>
    </Form>

  </div>
</template>