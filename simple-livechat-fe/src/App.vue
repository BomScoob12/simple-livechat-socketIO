<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/chat">Chat Room</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

