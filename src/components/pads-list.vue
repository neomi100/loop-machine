<template>
  <div v-if="pads" class="card-grid">
    <pad
      v-for="pad in pads"
      :key="pad.id"
      :pad="pad"
      @setAudio="setAudio"
    ></pad>
  </div>
</template>

<script>
import pad from "./pad.vue";

export default {
  props: ["pads"],

  data() {
    return {
      padsForPlay: [],
    };
  },

  methods: {
    setAudio(clickedPad) {
        if (!clickedPad.isPlay) clickedPad.audio.pause();
      this.padsForPlay=this.pads.map(pad=>pad.id===clickedPad.id? clickedPad:pad);
      this.padsForPlay = this.padsForPlay.filter((pad) => pad.isPlay);
      console.log( clickedPad ,'pads for play');
      // this.$emit("setAudio", this.padsForPlay);
        this.$store.commit({ type: "setAudio", pads:this.padsForPlay });
        //  if (!this.padsForPlay.length) this.$store.commit({ type: "stopSound" });
    },
  },
  watch:{
    padsForPlay:{
      handler(currpadsForPlay){
        this.$store.commit({ type: "recordSound" });
console.log(`padsForPlay listt`, currpadsForPlay);
      },
      deep:true
    }
  },
  components: { pad },
};
</script>