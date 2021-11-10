import Vue from 'vue'
import Vuex from 'vuex'
import { padsService } from '../services/pads.service.js'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    sounds: null,
    interval: null,
    isPlay: false,
    soundsToPlay: [],
  },

  getters: {
    sounds(state) {
      return state.sounds
    },
    isPlay(state) {
      return state.isPlay
    },
  },

  mutations: {
    getSounds(state, { sounds }) {
      state.sounds = sounds
    },
    setAudio(state, { pads }) {
      state.soundsToPlay = pads
    },
    playSound(state) {
      if (!state.soundsToPlay.length) return
      state.isPlay = true
      padsService.playSound(state.soundsToPlay)
      state.interval = setInterval(() => {
        if (!state.soundsToPlay.length) return
        padsService.playSound(state.soundsToPlay)
      }, 8000);
    },
    stopSound(state) {
      state.isPlay = false
      padsService.stopSound(state.soundsToPlay)
      clearInterval(state.interval);
    },
  },

  actions: {
    async getSounds({ commit }) {
      try {
        const sounds = await padsService.query()
        commit({ type: 'getSounds', sounds })
        return sounds
      } catch (err) {
        console.log('Cannot load sounds');
        throw err;
      }
    },

  }
})