<template>
  <div class="w-full max-w-sm px-5 py-4 mt-1 m-auto rounded-md shadow-md">
    <form class="mt-6">
      <div>
        <label for="fullname" class="block text-sm">Fullname</label>
        <input
          type="text"
          class="
            block
            w-full
            px-4
            py-2
            mt-2
            text-gray-900
            border
            rounded-md
            focus:border-blue-500
            dark:focus:border-blue-500
            focus:outline-none focus:ring
          "
          name="fullname"
          v-model="fullname"
          required="required"
        />
      </div>
      <div>
        <label for="email" class="block mt-2 text-sm">Email id</label>
        <input
          type="email"
          class="
            block
            w-full
            px-4
            py-2
            mt-2
            border
            text-gray-900
            rounded-md
            focus:border-blue-500
            dark:focus:border-blue-500
            focus:outline-none focus:ring
          "
          name="email"
          v-model="email"
          required="required"
        />
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm">Password</label>
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
            text-gray-900
            rounded-md
            dark:bg-gray-800
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
          Sign up
        </button>
      </div>
    </form>

    <div class="flex items-center justify-between mt-4">
      <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

      <a class="text-xs text-center text-gray-500 uppercase dark:text-gray-400"
        >or signup with social
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
      >
        <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
          <path
            d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
          ></path>
        </svg>

        <span class="hidden mx-2 sm:inline">Sign up with Google</span>
      </button>
    </div>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Already have a account?
      <router-link
        to="/signin"
        class="font-medium text-gray-400 dark:text-gray-200 hover:underline"
        >Sign in</router-link
      >
    </p>
  </div>
  <br />
  <br />
</template>

<script>
export default {};
</script>

<style>
</style>