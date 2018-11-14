import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memes: {},
    clientId: 'f7acd04e7da3ce3'
  },
  mutations: {
    replaceMemes (state, memes) {
      state.memes = memes
    }
  },
  actions: {
    fetchMemes (context) {
      axios.get('https://api.imgur.com/3/gallery/r/dankmemes/', {
        headers: {'Authorization': 'Client-ID ' + context.state.clientId}
      }).then((res) => {
        context.commit('replaceMemes', res.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
})
