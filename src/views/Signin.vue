<template>
  <div class="w-full mt-12 max-w-sm p-6 m-auto rounded-md shadow-md">
    <form @submit.prevent="loginuser" mode="ios" class="mt-6">
      <div>
        <label for="email" class="block text-sm">Email id</label>
        <input
          type=""
          class="
            block
            w-full
            px-4
            py-2
            mt-2
            border
            dark:bg-gray-900
            text-gray-900
            rounded-md
            focus:border-blue-500
            dark:focus:border-blue-500
            focus:outline-none focus:ring
          "
          name="email"
          v-model="email"
        />
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm">Password</label>
          <router-link to="/forget-password" class="text-xs hover:underline"
            >Forget Password?</router-link
          >
        </div>

        <input
          type="password"
          class="
            block
            w-full
            px-4
            py-2
            mt-2
            border
            rounded-md
            dark:bg-gray-900
            text-gray-900
            focus:border-blue-500
            dark:focus:border-blue-500
            focus:outline-none focus:ring
          "
          name="password"
          v-model="password"
          required="required"
        />
      </div>

      <div class="mt-6">
        <button
          class="
            w-full
            px-4
            py-2
            tracking-wide
            text-white
            transition-colors
            duration-200
            transform
            bg-gray-600
            rounded-md
            hover:bg-gray-700
            focus:outline-none focus:bg-gray-600
          "
        >
          Sign in
        </button>
      </div>
    </form>

    <div class="flex items-center justify-between mt-4">
      <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

      <a class="text-xs text-center text-gray-500 uppercase dark:text-gray-300"
        >or signin with social
      </a>

      <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
    </div>

    <div class="flex items-center mt-6 -mx-2">
      <button
        type="button"
        class="
          flex
          items-center
          justify-center
          w-full
          px-6
          py-2
          mx-2
          text-sm
          font-medium
          text-white
          transition-colors
          duration-200
          transform
          bg-blue-500
          rounded-md
          hover:bg-blue-400
          focus:bg-blue-400 focus:outline-none
        "
        @click="googlelogin"
      >
        <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
          <path
            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
          ></path>
        </svg>

        <span class="hidden mx-2 sm:inline">Sign in with Google</span>
      </button>
    </div>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Don't have an account?
      <router-link
        to="/signup"
        class="font-medium text-gray-400 dark:text-gray-200 hover:underline"
        >Create One</router-link
      >
    </p>
  </div>
  <br />
  <br />
  <br />
</template>

<script>
import { toastController } from "@ionic/vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  mounted() {
    // this.presentLoading()
  },

  computed: {
    ...mapGetters([
      "isLoggedIn",
      "user",
      "allmyorders",
      "tokner",
      "userfulldata",
    ]),
  },

  watch: {
    isLoggedIn: function () {
      this.getProfile();
    },
  },

  methods: {
    ...mapActions(["login", "logout", "getProfile"]),
    async googlelogin() {
      const googleUser = await this.$gAuth.signIn();
      console.log("googleUser", googleUser);
      console.log("getId", googleUser.getId());
      console.log("getBaseProfile", googleUser.getBasicProfile());
      console.log("getAuthResponse", googleUser.getAuthResponse());
      console.log(
        "getAuthResponse$G",
        this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      );
      this.isLogin = this.$gAuth.isAuthorized;
    },

    loginuser() {
      const userdata1 = {
        email: this.email,
        password: this.password,
      };

      this.login(userdata1)
        .then((res) => {
          if (res.data.resp == "Valid login") {
            this.openToast(res.data.data);
            this.$router.push("/");
            this.email = "";
            this.password = "";
          } else {
            this.openToast(res.data.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return "This is required";
    },

    async openToast(vald) {
      const toast = await toastController.create({
        message: `${vald}`,
        mode: "ios",
        color: "dark",
        icon: "checkmark-circle",
        position: "bottom",
        duration: 2000,
      });
      return toast.present();
    },
  },
};
</script>

<style>
</style>