<template>
  <v-btn color="primary" @click="signInWithGoogle">Sign in with Google</v-btn>
</template>

<script>
import { auth, provider, signInWithPopup } from '@/plugins/firebase'

export default {
  methods: {
    async signInWithGoogle() {
      try {
        const result = await signInWithPopup(auth, provider)
        console.log('✅ Welcome:', result.user.displayName)
        // Do something (save user, redirect, etc.)
      } catch (error) {
        console.error('❌ Google Sign-in failed:', error.message)
      }
    }
  }
}
</script>