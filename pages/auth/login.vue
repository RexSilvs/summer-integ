<template>
  <v-container justify="center" align="center" class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card style="min-height: 450px;">
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginWithCredentials">
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn color="primary" type="submit" block>
                Login with Username
              </v-btn>
            </v-form>
            <v-divider class="my-4"></v-divider>
            <v-btn color="red darken-1" @click="loginWithGoogle" block>
              Sign in with Google
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginWithCredentials() {
      // Replace with your own authentication logic
      if (this.username === 'admin' && this.password === 'admin') {
        alert('Login successful!');
        this.$router.push('/');
      } else {
        alert('Invalid username or password');
      }
    },
    loginWithGoogle() {
      /* global google */
      if (!window.google) {
        alert('Google API not loaded');
        return;
      }
      google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: this.handleCredentialResponse
      });
      google.accounts.id.prompt();
    },
    handleCredentialResponse(response) {
      // response.credential contains the JWT ID token
      // You can send this to your backend or use it in your app
      alert('Google login successful!');
      this.$router.push('/');
    }
  },
  mounted() {
    // Load Google Identity Services script
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }
}
</script>