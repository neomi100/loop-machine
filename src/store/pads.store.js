import Vue from 'vue'
import Vuex from 'vuex'
import { padsService } from '../services/pads.service.js'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    sounds: null,
    interval: null,
    playRecordInterval: null,
    startRecord: null,
    endRecord: null,
    isPlay: false,
    isRecord: false,
    soundsToPlay: [],
    recordToPlay: []
  },

  getters: {
    sounds(state) {
      return state.sounds
    },
    isPlay(state) {
      return state.isPlay
    },
    isRecord(state) {
      return state.isRecord
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
      if (state.interval !== null) clearInterval(state.interval);
      state.isPlay = true
      padsService.playSound(state.soundsToPlay)

      state.interval = setInterval(() => {
        if (!state.soundsToPlay.length) return
        padsService.playSound(state.soundsToPlay)
      }, 8000);

      let recInterval = setInterval(() => {
        if (state.isRecord) state.recordToPlay.push(state.soundsToPlay)
        if (!state.isRecord) clearInterval(recInterval)
      }, 1000);
    },
    stopSound(state) {
      state.isPlay = false
      padsService.stopSound(state.soundsToPlay)
      clearInterval(state.interval);
      clearInterval(state.playRecordInterval);
      state.endRecord = Date.now()
    },
    recordSound(state, { isRecord }) {
      state.isRecord = isRecord
      if (isRecord) state.startRecord = Date.now()
      if (!isRecord) state.endRecord = Date.now()
      if (state.isPlay) {
        let recInterval = setInterval(() => {
          if (isRecord) state.recordToPlay.push(state.soundsToPlay)
          if (!isRecord) clearInterval(recInterval)
        }, 1000);
      }
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
    async playLastRecord({ state }) {
      try {

        if (state.recordToPlay.length === 0) return
        let time = state.endRecord - state.startRecord
        let count = 0

        padsService.playSound(state.recordToPlay[count])

        setTimeout(() => {
          clearInterval(state.playRecordInterval)
          padsService.stopSound(state.recordToPlay[count])
        }, time)

        state.playRecordInterval = setInterval(() => {
          if (state.recordToPlay.length - 1 === count) {
            clearInterval(state.playRecordInterval)
            state.recordToPlay = []
            return
          }
          count++
          padsService.playSound(state.recordToPlay[count])
        }, 8000)

      } catch (err) {
        console.log('Cannot play record');
        throw err;
      }
    }
  }
})