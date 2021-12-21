<template>
  <div class="w-full mt-12 max-w-sm p-6 m-auto rounded-md shadow-md">
    <form class="mt-6">
      <div>
        <label for="email" class="block text-sm">Email id</label>
        <input
          type="email"
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
          Send password reset link
        </button>
      </div>
    </form>

    <p class="mt-8 text-xs font-light text-center text-gray-400">
      Back to login?
      <router-link
        to="/signin"
        class="font-medium text-gray-400 dark:text-gray-200 hover:underline"
        >Click here</router-link
      >
    </p>
  </div>
  <br />
  <br />
  <br />
</template>

<script>
export default {};
</script>

<style>
</style>