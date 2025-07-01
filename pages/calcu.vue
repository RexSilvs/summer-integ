<template>
    <div>
        <h1>Form Page</h1>
        <v-form ref="form">
            <v-text-field></v-text-field>
        </v-form>

        <v-card outlined width="700">
            <v-card-title> <v-icon left>mdi-information</v-icon>
                VCARD TITLE
            </v-card-title>
            <v-divider></v-divider>


            <v-card-text ref="form">
                <v-text-field 
                outlined label="Enter 1st Number" 
                v-model="num1"
                type="number">
                </v-text-field>

                <v-text-field 
                outlined label="Enter 2nd Number" 
                v-model="num2"
                type="number">
            </v-text-field>

                <v-text-field 
                outlined label="Total"
                v-model="total"
                type="number">
            </v-text-field>
            </v-card-text>


            <v-divider></v-divider>
            <v-card-actions class="py-3 pr-5">
                <v-spacer></v-spacer>
                <v-btn color="blue" @click="computeNumber()">Submit</v-btn>
                <v-spacer></v-spacer> 
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num1: 0,
            num2: 0,
            total: 0
        }
    },
    methods: {
        computeNumber() {
            this.total = parseInt(this.num1) + parseInt(this.num2);
        }
    }
}
</script>