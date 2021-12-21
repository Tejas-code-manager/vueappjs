import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    userfulldata: "",
    status: '',
    logoutmsg: '',
    error: null,
    allmyorders: [],
    allmynots: [],
};

const getters = {
    // isLoggedIn: function (state) {
    //     if (state.token != '') {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    userfulldata: state => state.userfulldata,
    logoutmsg: state => state.logoutmsg,
    error: state => state.error,
    tokner: state => state.token,
    getmyorders: state => state.allmyorders,
    getallmynots: state => state.allmynots,
};

const actions = {
    // Login Action
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('https://davaplus.in/apis/logindata.php', user)
            if (res.data.success) {
                const token = res.data.token;
                // const user = res.data.resdata;

                // console.log(user)
                // const msg = res.data.data;
                // Store the token into the localstorage
                localStorage.setItem('token', token);

                // localStorage.setItem('t1', user.email);
                // Set the axios defaults
                // axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token);

            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    // Register User

    // Get the user Profile
    async getProfile({
        commit
    }) {
        // commit('profile_request');
        const tok = localStorage.getItem('token');
        let res = await axios.get('https://davaplus.in/apis/logeduser.php?getit=' + tok);
        commit('authsuccessuser', res.data.resdata1)

        return res;
    },
    async myorders({
        commit
    }) {
        // commit('profile_request');
        const tok = localStorage.getItem('token');
        console.log(tok)
        let res = await axios.get('https://davaplus.in/apis/myorders.php?getit=' + tok);
        commit('findmyorders', res.data.resdata1)

        return res;
    },
    async mynotfs({
        commit
    }) {
        // commit('profile_request');
        const tok = localStorage.getItem('token');
        console.log(tok)
        let res = await axios.get('https://davaplus.in/apis/mynotifications.php?getit=' + tok);
        commit('mynots', res.data.resdata1)
        // console.log(res.data.resdata1)
        return res;
    },
    // // Logout the user
    async logout({
        commit
    }) {
        localStorage.removeItem('token');
        const msg = "Loged out successfully";
        commit('logout', msg);
        // delete axios.defaults.headers.common['Authorization'];
        router.push('/signin');

    }
};

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token) {
        state.token = token
        state.status = 'success'
        state.error = null
    },
    authsuccessuser(state, user) {
        state.user = user
    },
    findmyorders(state, resultant) {
        state.allmyorders = resultant;
    },
    mynots(state, getresult) {
        state.allmynots = getresult;
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },

    logout(state, msg) {
        state.error = null
        state.status = null
        state.token = null
        state.user = null
        state.logoutmsg = msg
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};