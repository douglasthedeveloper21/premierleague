<template>
  <div>
    <hello-world />
    <game />
    <start-game />
  </div>
</template>

<script>
import Game from '../components/Game.vue'
import HelloWorld from '../components/HelloWorld'
import StartGame from '../components/StartGame.vue'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      Game,
      StartGame
    },
  }
</script>
