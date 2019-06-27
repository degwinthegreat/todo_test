import Vue from 'vue'
import router from './router'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import aws_exports from './aws-exports'
Amplify.configure(aws_exports)

Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

new Vue({
  router,
}).$mount('#app')
