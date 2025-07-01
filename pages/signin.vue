<template>
  <div class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card class="mb-4" color="surface-variant" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, your account will be temporarily locked for three hours.
          You can click "Forgot login password?" below to reset it.
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-4"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        Log In
      </v-btn>

      <v-btn
        class="mb-4"
        color="red"
        size="large"
        variant="tonal"
        block
        :loading="signingIn"
        @click="signInWithGoogle"
      >
        Sign in with Google
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth, provider, signInWithPopup } from '@/plugins/firebase'

const visible = ref(false)
const signingIn = ref(false)

async function signInWithGoogle() {
  if (signingIn.value) return
  signingIn.value = true

  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log('✅ Signed in as:', user.displayName)
    // You can redirect if needed:
    // window.location.href = '/dashboard'
  } catch (error) {
    console.error('❌ Google sign-in failed:', error.message)
    alert('Google sign-in failed: ' + error.message)
  } finally {
    signingIn.value = false
  }
}
</script>

<script>
export default {
  layout: "auth",
}
</script>
