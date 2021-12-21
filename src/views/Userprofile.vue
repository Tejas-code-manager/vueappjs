<template>
  <div>
    <!-- component -->
    <div class="flex h-screen">
      <div class="m-auto mt-12">
        <div>
          <div class="rounded-lg text-gray-500 shadow bg-white">
            <div class="flex">
              <div class="flex-1 py-5 pl-5 overflow-hidden">
                <h1 class="inline text-2xl font-semibold leading-none">
                  Profile
                </h1>
              </div>
            </div>

            <div class="px-5 pb-5">
              <label for="name" class="mb-4">Fullname</label>
              <input
                placeholder="Name"
                id="name"
                class="
                  text-black
                  placeholder-gray-600
                  w-full
                  px-4
                  py-2.5
                  mt-2
                  mb-4
                  text-base
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border-transparent
                  rounded-lg
                  bg-gray-200
                  focus:border-blueGray-500 focus:bg-white
                  dark:focus:bg-gray-800
                  focus:outline-none focus:shadow-outline focus:ring-2
                  ring-offset-current ring-offset-2 ring-gray-400
                "
                name="fullname"
                :value="user.name"
              />

              <label for="email" class="mt-10">Email</label>
              <input
                placeholder="Email"
                id="email"
                class="
                  text-black
                  placeholder-gray-600
                  w-full
                  px-4
                  py-2.5
                  mt-2
                  text-base
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border-transparent
                  rounded-lg
                  bg-gray-200
                  focus:border-blueGray-500 focus:bg-white
                  dark:focus:bg-gray-800
                  focus:outline-none focus:shadow-outline focus:ring-2
                  ring-offset-current ring-offset-2 ring-gray-400
                "
                name="email"
                :value="user.email"
              />
            </div>

            <div class="flex flex-row-reverse p-3">
              <div class="flex-initial pl-3">
                <button
                  type="button"
                  class="
                    flex
                    items-center
                    px-5
                    py-2.5
                    font-medium
                    tracking-wide
                    text-white
                    capitalize
                    bg-black
                    rounded-md
                    hover:bg-gray-800
                    focus:outline-none focus:bg-gray-900
                    transition
                    duration-300
                    transform
                    active:scale-95
                    ease-in-out
                  "
                  @click="saveprofile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                      opacity=".3"
                    ></path>
                    <path
                      d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
                    ></path>
                  </svg>
                  <span class="pl-2 mx-1">Save</span>
                </button>
              </div>
              <div class="flex-initial">
                <a
                  href="#confirmation1"
                  class="
                    flex
                    items-center
                    px-5
                    py-2.5
                    font-medium
                    tracking-wide
                    text-black
                    capitalize
                    rounded-md
                    hover:bg-red-200 hover:fill-current hover:text-red-600
                    focus:outline-none
                    transition
                    duration-300
                    transform
                    active:scale-95
                    ease-in-out
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                    <path d="M8 9h8v10H8z" opacity=".3"></path>
                    <path
                      d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"
                    ></path>
                  </svg>
                  <span class="pl-2 mx-1">Delete account</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="confirmation1" class="modal">
    <div class="modal-box">
      <h5 class="text-danger">
        <span class="text-center">
          Are you sure you want to delete your account?</span
        >
      </h5>
      <div class="modal-action">
        <a href="#" class="btn btn-ghost btn-error">Sure delete</a>
        <a href="#" class="btn btn-ghost">Cancel</a>
      </div>
    </div>
  </div>
</template>

<script>
import { toastController } from "@ionic/vue";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      userdata: "",
      //   fname: this.user.name,
      //   email: this.user.email,
      long: null,
      lati: null,
      mylocation: "",
      isMenuOpen: false,
    };
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

  mounted() {
    // console.log(this.user)
    this.getProfile();
  },
  watch: {
    isLoggedIn: function () {
      this.getProfile();
    },
  },
  methods: {
    ...mapActions(["logout", "getProfile"]),
    async saveprofile() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const userdata = {
        fullname: name,
        email: email,
        phone: this.user.phone,
        bdate: this.user.birthdate,
        address: this.user.address,
        gender: this.user.gender,
        uid: this.user.userid,
      };
      console.log(userdata);
      try {
        await axios
          .post("https://davaplus.in/apis/profilesettings.php", userdata)
          .then((res) => {
            if (res.data.resp == "Success") {
              this.getProfile();
            }
            this.openToast(res.data.data);
          });
      } catch (e) {
        console.log(e);
      }
    },
    async openToast(res) {
      const toast = await toastController.create({
        mode: "ios",
        // translucent: "true",
        color: "dark",
        message: `${res}`,
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