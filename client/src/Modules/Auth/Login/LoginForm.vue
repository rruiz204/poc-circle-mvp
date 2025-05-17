<script lang="ts" setup>
import Button from "primevue/button";
import Message from "primevue/message";
import Password from "primevue/password";
import Divider from "primevue/divider";

import { InputText } from "primevue";
import { Form } from "@primevue/forms";
import { LoginResolver } from "./LoginSchema";
</script>

<template>
  <div class="w-full max-w-md p-4 flex flex-col gap-3">

    <Form v-slot="$form" :resolver="LoginResolver" class="flex flex-col gap-4">
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
        <p class="font-semibold">Login</p>
      </Button>
    </Form>

    <Divider />

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