<script setup>
import { io } from 'socket.io-client'
import { ref } from 'vue'

const socket = io('http://localhost:3000')

const userMsg = ref('')
const roomKey = ref('')
const currentRoom = ref('')

socket.on('receive-message', (msg) => {
  console.log('receive message')
  displayMessage(msg)
})

const joinRoom = () => {
  console.log('join-room')
  socket.emit('join-room', roomKey.value.trim())
  currentRoom.value = roomKey.value
  displayMessage(`joined room: ${currentRoom.value}`)
}

const leaveRoom = () => {
  console.log('leave room')
  socket.emit('leave-room')
}

const sendMessage = () => {
  console.log('send message')
  socket.emit('send-message', userMsg.value, roomKey.value)
  displayMessage(userMsg.value)
}

const displayMessage = (msg) => {
  const chatBox = document.querySelector('.chat-box')
  const p = document.createElement('p')
  p.textContent = msg
  chatBox.appendChild(p)
}
</script>

<template>
  <div>
    <div class="chat-box"></div>
    <div>
      <input type="text" class="insert-box" v-model="roomKey" />
      <button @click="joinRoom">Join room</button>
      <button @click="leaveRoom">Leave room</button>
    </div>
    <div>
      <input type="text" class="insert-box" v-model="userMsg" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<style scoped></style>
