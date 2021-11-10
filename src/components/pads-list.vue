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
      this.padsForPlay = this.pads.map((pad) =>
        pad.id === clickedPad.id ? clickedPad : pad
      );
      this.padsForPlay = this.padsForPlay.filter((pad) => pad.isPlay);
      this.$store.commit({ type: "setAudio", pads: this.padsForPlay });
    },
  },

  components: { pad },
};
</script>