import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


new Vue({
    
    render: h => h(App)
}).$mount("#app");

Vue.use(axios)


