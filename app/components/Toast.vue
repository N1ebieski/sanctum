<script>
export default {
    created() {
        this.$nuxt.$on('toast', (config) => {
            this.makeToast(config)
        })
    },
    methods: {
        makeToast(config) {
            this.$bvToast.toast(config.body, {
                title: config.title,
                toaster: 'b-toaster-bottom-right',
                variant: config.variant,
                appendToast: true
            })
        }
    }
}
</script>
