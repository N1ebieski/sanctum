<template>
    <a @click.prevent="logout()">
        Wyloguj się
    </a>
</template>

<script>
export default {
    methods: {
        async logout() {
            try {
                await this.$auth.logout('laravelSanctum')
            } catch (e) {
                return
            }

            this.$nuxt.$emit('loggedIn', false)
        }
    }
}
</script>
