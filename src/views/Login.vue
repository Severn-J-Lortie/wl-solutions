<template>
  <PageMargin>
    <div class="columns is-centered mt-5">
      <div class="column is-8">
        <div class="field">
          <label class="label"> Email </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Enter your email"
              v-model="email"
            />
          </div>
        </div>

        <div class="field">
          <label class="label"> Password </label>
          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Enter your password"
              v-model="password"
            />
          </div>
        </div>

        <div class="control">
          <button class="button is-link" @click="login">Login</button>
        </div>
      </div>
    </div>
  </PageMargin>
</template>

<script>
import PageMargin from "../components/PageMargin.vue";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    PageMargin,
  },
  setup() {
    // Local state
    let email = ref("");
    let password = ref("");

    // Setup router
    const router = useRouter();

    // Setup firebase auth
    const auth = getAuth();

    // Sign user in using firebase auth
    const login = () => {
      signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
        // Sign in successful, redirect. TODO: Error handeling
        router.push("/admin");
      });
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

