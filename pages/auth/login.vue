<template>
    <div class="d-flex align-center justify-center" style="height: 100vh;">
        <v-card width="550" class="pa-8 text-center">
            <h1 class="ay=">Sign In Page</h1>

            <v-form>

                <v-text-field label="Email" outlined prepend-inner-icon="mdi-account"></v-text-field>
                <v-text-field label="Password" outlined prepend-inner-icon="mdi-lock" type="password"></v-text-field>
                <v-btn color="primary" block>Login</v-btn>
                <p class="my-5">OR</p>
                <v-btn color="red" block @click="signInWithGoogle()"><v-icon left>mdi-google</v-icon> Sign IN With Google </v-btn>
                <p class="my-3"></p>
            </v-form>
            
        </v-card>
    </div>
</template>

<script>
export default {
    layout: "auth",
    middleware: 'guest',
    methods: {
        signInWithGoogle() {
            this.$auth.loginWith('google')
        }
    }

}
</script>