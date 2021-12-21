<template>
  <div class="bg-light-900">
    <div
      class="
        px-2
        py-2
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <div class="relative flex items-center justify-between">
        <router-link
          to="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
          <svg
            class="w-8 text-teal-accent-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span class="ml-2 text-xl font-bold tracking-wide uppercase"
            >Avanti inc.</span
          >
        </router-link>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <router-link
              to="/"
              aria-label="Our product"
              title="Our product"
              class="
                font-medium
                tracking-wide
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Product</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              aria-label="Our product"
              title="Our product"
              class="
                font-medium
                tracking-wide
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Features</router-link
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="
                font-medium
                tracking-wide
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >Pricing</a
            >
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="
                font-medium
                tracking-wide
                transition-colors
                duration-200
                hover:text-teal-accent-400
              "
              >About us</a
            >
          </li>
          <li>
            <div v-if="isLoggedIn" class="dropdown dropdown-end">
              <div tabindex="0" class="btn btn-ghost rounded-btn">
                {{ user.name }}
              </div>
              <ul
                tabindex="0"
                class="
                  p-2
                  shadow
                  menu
                  dropdown-content
                  bg-base-100
                  rounded-box
                  w-52
                "
              >
                <li>
                  <router-link to="/myaccount">Account</router-link>
                </li>
                <li @click="logout()">
                  <a>Logout</a>
                </li>
              </ul>
            </div>

            <div v-else-if="!isLoggedIn" class="dropdown dropdown-end">
              <div tabindex="0" class="btn btn-ghost rounded-btn">
                Signup / Login
              </div>
              <ul
                tabindex="0"
                class="
                  p-2
                  shadow
                  menu
                  dropdown-content
                  bg-base-100
                  rounded-box
                  w-52
                "
              >
                <li>
                  <router-link to="/signup">Signup</router-link>
                </li>
                <li>
                  <router-link to="/signin">Login</router-link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <select
              data-choose-theme
              class="select select-bordered select-primary w-full max-w-xs"
            >
              <option disabled="disabled" selected="selected">
                Select theme
              </option>
              <option value="light">Default</option>
              <option value="dark">Dark</option>

              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
            </select>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="
              p-2
              -mr-1
              transition
              duration-200
              rounded
              focus:outline-none focus:shadow-outline
            "
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <svg
                      class="w-8 text-deep-purple-accent-400"
                      viewBox="0 0 24 24"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke="currentColor"
                      fill="none"
                    >
                      <rect x="3" y="1" width="7" height="12"></rect>
                      <rect x="3" y="17" width="7" height="6"></rect>
                      <rect x="14" y="1" width="7" height="6"></rect>
                      <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span
                      class="
                        ml-2
                        text-xl
                        font-bold
                        tracking-wide
                        text-gray-800
                        uppercase
                      "
                      >Company</span
                    >
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="
                      p-2
                      -mt-2
                      -mr-2
                      transition
                      duration-200
                      rounded
                      hover:bg-gray-200
                      focus:bg-gray-200 focus:outline-none focus:shadow-outline
                    "
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Product</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Features</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Pricing</a
                    >
                  </li>
                  <li>
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >About us</a
                    >
                  </li>
                  <li>
                    <div class="dropdown dropdown-end">
                      <div tabindex="0" class="btn btn-ghost rounded-btn">
                        Dropdown
                      </div>
                      <ul
                        tabindex="0"
                        class="
                          p-2
                          shadow
                          menu
                          dropdown-content
                          bg-base-100
                          rounded-box
                          w-52
                        "
                      >
                        <li>
                          <a>Item 1</a>
                        </li>
                        <li>
                          <a>Item 2</a>
                        </li>
                        <li>
                          <a>Item 3</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-view />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      userdata: "",

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
  },
};
</script>

<style>
@import "./assets/css/theamble.css";
</style>
