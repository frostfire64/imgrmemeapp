<template>
  <div>
    <h1>Imgur Meme App</h1>
    <div class="row">
        <single-meme v-for="(value, key) in storeMemes" :value="value" :key="key"></single-meme>
    </div>
  </div>
</template>

<script>
import SingleMeme from './SingleMeme'

export default {
  name: 'meme-main-view',
  components: {
    SingleMeme
  },
  data: function () {
    return {
      memes: {}
    }
  },
  computed: {
    storeMemes: function () {
      return this.$store.state.memes
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.$store.dispatch('fetchMemes')
    })
  }
}
</script>
