import Vue from 'vue'
import { Form, HasError, AlertError, AlertSuccess } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)

export default ({ app }, inject) => {
    app.$vform = (...params) => new Form(...params)
    inject('vform', (...params) => new Form(...params))
}
