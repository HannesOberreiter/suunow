<script setup>
import GlobalNavbar from "../components/GlobalNavbar.vue";
import GlobalFooter from "../components/GlobalFooter.vue";
</script>

<template>
  <div class="bg-yellow-500 min-h-screen">
    <div class="md:mx-auto max-w-screen-lg">
      <main>
        <GlobalNavbar></GlobalNavbar>
        <div class="bg-white">
          <router-view />
        </div>
        <GlobalFooter></GlobalFooter>
      </main>
    </div>
  </div>
</template>
