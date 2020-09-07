<template>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
        <b-navbar-brand>
            <nuxt-link :to="{ name: 'index' }" class="navbar-brand">
                {{ appName }}
            </nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown
                    v-if="loggedIn"
                    :text="$auth.user.name"
                    variant="light"
                    right
                >
                    <template v-slot:button-content>
                        {{ $auth.user.name }}
                    </template>
                    <b-dropdown-item>
                        <logout />
                    </b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item v-else>
                    <nuxt-link class="btn btn-primary" :to="{ name: 'login' }">
                        Zaloguj się
                    </nuxt-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    data () {
        return {
            appName: process.env.appName,
            loggedIn: this.$auth.$state.loggedIn
        }
    },
    created () {
        this.$nuxt.$on('loggedIn', (newValue) => {
            this.loggedIn = newValue
        })
    }
}
</script>
