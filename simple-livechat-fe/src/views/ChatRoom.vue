<script setup>
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

const sendMessage = (event) => {
  console.log('send message')
  const msg = event.target[0].value
  console.log(msg)
  socket.emit('send-message', msg)
}
</script>

<template>
  <div>
    <div class="chat-box"></div>
    <form @submit.prevent="sendMessage($event)">
      <input type="text" />
      <button>Send</button>
    </form>
  </div>
</template>

<style scoped></style>
