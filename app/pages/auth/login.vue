<template>
    <div class="row w-100 h-100">
        <div class="col-lg-8 m-auto">
            <b-card>
                <template v-slot:header>
                    <h5 class="mb-0">
                        {{ title }}
                    </h5>
                </template>
                <form @submit.prevent="login()">
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">
                            Email
                        </label>
                        <div class="col-md-7">
                            <b-form-input
                                v-model.trim="form.email"
                                :class="{ 'is-invalid': form.errors.has('email') }"
                                :disabled="form.busy"
                                name="email"
                            />
                            <has-error :form="form" field="email" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-md-3 col-form-label text-md-right">
                            Hasło
                        </label>
                        <div class="col-md-7">
                            <b-form-input
                                v-model.trim="form.password"
                                :class="{ 'is-invalid': form.errors.has('password') }"
                                :disabled="form.busy"
                                name="password"
                            />
                            <has-error :form="form" field="password" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-3" />
                        <div class="col-md-7 d-flex">
                            <b-form-checkbox
                                v-model="form.remember"
                                :disabled="form.busy"
                                :class="{ 'is-invalid': form.errors.has('password') }"
                                name="remember"
                            >
                                Zapamiętaj mnie
                            </b-form-checkbox>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-7 offset-md-3 d-flex">
                            <form-button
                                :busy="form.busy"
                                title="Zaloguj"
                                variant="primary"
                                type="submit"
                            />
                        </div>
                    </div>
                </form>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    auth: 'guest',
    data() {
        return {
            form: this.$vform({
                email: '',
                password: '',
                remember: false,
                busy: false
            }),
            title: 'Zaloguj się'
        }
    },
    methods: {
        async login() {
            this.form.errors.clear()
            this.form.busy = true

            try {
                await this.$auth.loginWith('cookie', {
                    data: this.form
                })

                this.$nuxt.$emit('toast', {
                    variant: 'success',
                    title: 'Autentykacja',
                    body: 'Pomyślnie zalogowano'
                })
                // this.$nuxt.$emit('loggedIn', true)
                this.$router.push({ name: 'index' })
            } catch (e) {
                this.form.busy = false

                if (e.response.data.errors) {
                    this.form.errors.set(this.form.extractErrors(e.response))
                }
            }
        }
    },
    head() {
        return {
            title: this.title
        }
    }
}
</script>
