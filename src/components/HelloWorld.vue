<template>
  <div>
    Couter: <strong class="couter">{{ appCouter }}</strong>
    <div>
      <button type="button" @click="increaseAppCouter()">Increase by 1</button>
      <button type="button" @click="decreaseAppCouter()">Decrease by 1</button>
    </div>
  </div>
</template>

<script>
import { ACTION_APP_INCREMENT, ACTION_APP_DECREAMENT } from './../store/app.store'

export default {
  name: 'HelloWorld',
  computed: {
    appCouter: function() {
      return this.$store.getters.getCouter;
    }
  },
  methods: {
    increaseAppCouter: function() {
      this.$store.dispatch(ACTION_APP_INCREMENT)
    },
    decreaseAppCouter: function() {
      this.$store.dispatch(ACTION_APP_DECREAMENT)
    }
  }
}
</script>
<style lang="scss" scoped>
.couter {
  color: #42b983;
}
</style>
