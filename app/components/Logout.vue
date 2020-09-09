<template>
    <a @click.prevent="logout()">
        Wyloguj się
    </a>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout('laravelSanctum')

            this.$nuxt.$emit('toast', {
                variant: 'success',
                title: 'Autentykacja',
                body: 'Pomyślnie wylogowano'
            })
            this.$nuxt.$emit('loggedIn', false)
            this.$router.push({ name: 'index' })
        }
    }
}
</script>
