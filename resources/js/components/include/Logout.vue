<template>
<div class="text-center">
    <v-menu v-model="menu" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{ on }">
            <v-btn dark v-on="on" icon>
                <v-icon color="primary lighten-1" large>
                    account_circle
                </v-icon>
            </v-btn>

        </template>

        <v-card>
            <v-list>
                <v-list-item>
                    <avatar :fullname="user.name" style="font-size: 20px;margin: auto;padding: 0px;"></avatar>

                    <v-list-item-content>
                        <v-list-item-title>{{ user.name }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <router-link to="/account" class="v-list-item v-list-item--link theme--light">My account</router-link>
                </v-list-item>

            </v-list>

            <v-card-actions>
                <v-card-actions>
                    <form action="/logout" method="post">
                        <input type="hidden" name="_token" :value="csrf">
                        <!-- <v-btn text color="primary" type="submit">Logout</v-btn>-->
                        <v-tooltip bottom>
                            <v-btn text slot="activator" color="primary" icon class="mx-0" type="submit">
                                <i class="fa fa-sign-out"></i>
                            </v-btn>
                            <span>Logout from this device</span>
                        </v-tooltip>
                    </form>

                    <form action="/logoutOther" method="get">
                        <input type="hidden" name="_token" :value="csrf">
                        <!-- <v-btn text color="orange" type="submit">Logout other devices out</v-btn> -->

                        <v-tooltip bottom>
                            <v-btn text slot="activator" color="orange" icon class="mx-0" type="submit">
                                <i class="fa fa-sign-out"></i>
                            </v-btn>
                            <span>Logout other devices</span>
                        </v-tooltip>
                    </form>
                    <v-spacer></v-spacer>
                    <v-btn text @click="menu = false">close</v-btn>
                </v-card-actions>
            </v-card-actions>
        </v-card>
    </v-menu>
</div>
</template>

<script>
// import Avatar from 'vue-avatar'
import Avatar from 'vue-avatar-component'

export default {
    props: ['user'],
    data() {
        return {
            image_exists: true
        }
    },
    components: {
        Avatar
    },
    data() {
        return {
            csrf: document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content"),
            menu: false,
            admin_url: process.env.MIX_ADMIN_APP_URL,
        }
    },
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
};
</script>

<style scoped>
/* .v-menu--inline {
    margin-top: -60px;
    float: right;
} */
</style>
