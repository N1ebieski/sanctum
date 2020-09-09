<template>
    <div class="row h-100">
        <div class="col m-auto">
            <b-alert v-if="message" variant="success" show>
                {{ message }}
            </b-alert>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return {
            message: ''
        }
    },
    async created() {
        const response = await this.$axios.post(process.env.apiUrl + '/confirm')

        this.message = response.data.message
    },
    head() {
        return {
            title: 'Potwierdzenie'
        }
    }
}
</script>
