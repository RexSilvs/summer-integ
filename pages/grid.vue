<template>
    <div>
        <h1>Grid Page</h1>

    <v-row dense>
        <v-col cols="3" md="3" xs="3">
                <v-card color="red">
                    <v-card-text>
                        Column 1
                    </v-card-text>
                </v-card>
        </v-col>

        <v-col cols="3">
                <v-card color="primary">
                    <v-card-text>
                        Column 2
                    </v-card-text>
                </v-card>
        </v-col>

        <v-col cols="3">
            <v-card color="grey">
                <v-card-text class="text-center white--text font-weight-bold">
                    Column 3
                </v-card-text>
            </v-card>
        </v-col>
        
        <v-col cols="3">
                <v-row>
                    <v-col>
                        <v-card color="yellow">
                            <v-card-text>
                                Column 4
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
                
                <v-row dense>
                    <v-col>
                        <v-card color="yellow">
                            <v-card-text>
                                Column 4
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
        </v-col>
    </v-row>

    </div>
</template>