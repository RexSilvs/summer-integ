<template>
  <div class="d-flex align-center justify-center" style="height: 100vh;">
    <v-card width="550" class="pa-8 text-center">
      <h1 class="mb-5">Sign In Page</h1>
      <v-form>
        <v-text-field label="Email" outlined prepend-inner-icon="mdi-account" />
        <v-text-field label="Password" outlined type="password" prepend-inner-icon="mdi-lock" />
        <v-btn color="primary" block>Login</v-btn>

        <p class="my-5">OR</p>

        <v-btn color="red" block @click="signInWithGoogle">
          <v-icon left>mdi-google</v-icon> Sign in with Google
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'guest',
  methods: {
    async signInWithGoogle() {
      try {
        await this.$auth.loginWith('google')
        const token = this.$auth.strategy.token.get()
        if (token) {
          localStorage.setItem('access_token', token)
          this.$router.push('/auth/EventCalendar')
        } else {
          console.error('Google token not found.')
        }
      } catch (err) {
        console.error('Google login failed:', err)
      }
    },
  },
}
</script>
