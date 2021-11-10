import Vue from 'vue'
import Vuex from 'vuex'
import { padsService } from '../services/pads.service.js'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    sounds: null,
    interval: null,
    recordInterval: null,
    playRecordInterval: null,
    soundsToPlay: [],
    recordToPlay: [],
    lastRecordForPlay: [],
    isPlay: false,
    startRecord: null,
    endRecord: null
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
      console.log(pads, 'store');
    },
    playSound(state) {
      console.log(state.isPlay, 'state isPlay');
      if (!state.soundsToPlay.length) return
      state.isPlay = true
      padsService.playSound(state.soundsToPlay)
      state.interval = setInterval(() => {
        if (!state.soundsToPlay.length) return
        // if (!state.isPlay) return   
        console.log(state.soundsToPlay, 'store');
        padsService.playSound(state.soundsToPlay)
        console.log(state, 'state');
      }, 8000);
    },
    stopSound(state) {
      state.isPlay = false
      padsService.stopSound(state.soundsToPlay)
      clearInterval(state.interval);
      // state.soundsToPlay = []
    },
    // setAudioForRecord(state, { record }) {
    //   state.recordToPlay.push(record)
    //   console.log(state.recordToPlay, 'state.recordToPlay');
    // },
    startRecord(state) {
      state.startRecord = Date.now()
      console.log(state.startRecord, 'state.startRecord');
    },
    endRecord(state) {
      state.endRecord = Date.now()
    },
    recordSound(state, { isRecord }) {
      // console.log(isRecord, 'is record???');
      // if (!isRecord) return
      // while (isRecord) {

        // if (!isRecord) return

        // if (state.recordToPlay !== state.soundsToPlay) {
          console.log(state.soundsToPlay, 'morning!!!!');
          state.recordToPlay = state.soundsToPlay
          console.log(state.recordToPlay, 'morning!!!!');
          state.lastRecordForPlay.push(state.recordToPlay)
          console.log(isRecord, 'morning');
          console.log(state.lastRecordForPlay, '  ההקלטההסוףף!!');
        // }

        // let record1 = state.soundsToPlay
        // let record2 = state.soundsToPlay
        // if(record1!=record2)
        // state.recordToPlay.push(record2)
        // // state.setAudioForRecord(record) 
        // console.log(record2, 'הרקורד החדש בוויל');
      // }
      // if (!isRecord) {

        // return
      // }
    },
    playPlay(state){
      
      padsService.playSound(state.lastRecordForPlay)
    }
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




    // async recordSound(context, { isRecord }) {
    //   console.log(isRecord, 'is record???');
    //   try {

    //     while (!isRecord) {

    //       let record = context.state.soundsToPlay

    //       context.commit({ type: 'setAudioForRecord', record })
    //       console.log(record, 'הרקורד החדש בוויל');
    //     }

    //   } catch (err) {
    //     console.log('Cannot record');
    //     throw err;
    //   }
    // },



    async playLastRecord(context) {
      //   context.watch((state) => state.searchString, (oldValue, newValue) => {
      //     console.log('search string is changing')
      //     console.log(oldValue)
      //     console.log(newValue)
      // })
      console.log(context, 'play last');
      try {
        let count = 0
        let record = context.state.recordToPlay

        console.log(record, 'מערך של מערכים');



        if (record.length === 0) return


        padsService.playSound(record[count])
        context.state.playRecordInterval = setInterval(() => {
          if (!record.length) return


          console.log(record.length === count, 'kkkk');

          if (record.length === count) {
            clearInterval(context.state.playRecordInterval)
            context.state.recordToPlay = []

            return
          }
          count++
          padsService.playSound(record[count])
          console.log(count, 'sasasa');
        }, 8000)



        // context.state.playRecordInterval = setInterval(function asss() {



        // count++
        // console.log(record, 'sasasa')
        // padsService.playSound(record[count])

        //   return asss
        // }(), 8000)




        // context.state.playRecordInterval = setInterval((() => {
        //   count++
        //   padsService.playSound(record[count])
        //   console.log(count, 'sasasa')
        // })(), 8000);

        // לעשות לולאת while אינסופית
        // התנאי לעצירת הלולאה זה אם הזמן הנוכחי הגיע לזמן של כל ההקלטה
        // עוברים בלולאה על 9 המערכים של הפאדים
        // אם האיבר הראשון שווה לזמן הנוכחי תנגן
        // אם האביר הבא בתור שווה לזמן הנוכחי תפסיק
        // סט טיים אאוט עם הזמן שיוצא 

      } catch (err) {
        console.log('Cannot play record');
        throw err;
      }
    }
  },
  // store.watch((state) => state.searchString, (oldValue, newValue) => {
  //   console.log('search string is changing')
  //   console.log(oldValue)
  //   console.log(newValue)
  // })

})