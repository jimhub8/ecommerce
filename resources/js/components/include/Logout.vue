<template>
<div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y v-if="user">
        <template v-slot:activator="{ on }">
            <VBtn text icon color="primary" v-on="on">
                <VIcon>account_circle</VIcon>
            </VBtn>
        </template>
        <v-card>
            <v-list>
                <v-list-item>
                    <avatar :fullname="user.name" style="font-size: 20px;margin: auto;padding: 0px;"></avatar>
                    <v-list-item-content>
                        <v-list-item-title>Hello {{ user.name }}</v-list-item-title>
                        <v-list-item-subtitle>Welcome to Dellmat</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>people</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            <router-link to="/account">Account</router-link>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
                <form action="/logout" method="post">
                    <input type="hidden" name="_token" :value="csrf">
                    <!-- <v-btn text color="primary" type="submit">Logout</v-btn>-->
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" slot="activator" class="mx-0" @click="getOrders" type="submit">
                                <i class="fas fa-sign-out-alt"></i>
                            </v-btn>
                        </template>
                        <span>Logout from this device</span>
                    </v-tooltip>
                </form>
                <v-spacer></v-spacer>

                <form action="/logoutOther" method="get">
                    <input type="hidden" name="_token" :value="csrf">
                    <!-- <v-btn text color="orange" type="submit">Logout other devices out</v-btn> -->
                    <v-tooltip right>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" slot="activator" class="mx-0" @click="getOrders" type="submit">
                                <i class="fas fa-sign-out-alt"></i>
                            </v-btn>
                        </template>
                        <span>Logout other devices</span>
                    </v-tooltip>
                </form>
                <!--
                <v-btn color="primary">Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Sign up</v-btn> -->
            </v-card-actions>
        </v-card>
    </v-menu>

    <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y v-else>
        <template v-slot:activator="{ on }">
            <VBtn text icon color="primary" v-on="on">
                <VIcon>account_circle</VIcon>
            </VBtn>
        </template>
        <v-card>
            <v-list>
                <v-list-item>
                    <avatar fullname="D" style="font-size: 20px;margin: auto;padding: 0px;"></avatar>

                    <v-list-item-content>
                        <v-list-item-title>Hello</v-list-item-title>
                        <v-list-item-subtitle>Welcome to Dellmat</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="primary" href="/login">Login</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary">Sign up</v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</div>
</template>

<script>
import Avatar from 'vue-avatar-component'
export default {
    props: ['user'],
    components: {
        Avatar
    },
    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
        csrf: document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
        menu: false,
        admin_url: process.env.MIX_ADMIN_APP_URL,
        image_exists: true
    }),
    methods: {
        time_out(event) {
            this.image_exists = false
            // this.timer = setTimeout(() => {
            //     this.onImageLoadFailure(event)
            // }, 3000);
        },
        onImageLoadFailure(event) {
            event.target.src = '/storage/profile/image.png'
        }
    },
}
</script>
