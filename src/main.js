import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
// import GSignInButton from 'vue-google-signin-button'
import GAuth from 'vue3-google-oauth2'
const gauthOption = {
    clientId: '789680414919-kcs0imvg746locj5924o2kuvgfps7fva.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'consent',
    fetch_basic_profile: true
}
createApp(App).use(store).use(router).use(GAuth, gauthOption).mount('#app')

