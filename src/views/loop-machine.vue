<template>
  <div class="home main-layout">
    <div class="btns-power">
      <button @click="stopSound()" class="btn-power stop" title="Stop"></button>
      <button
        @click="playSound()"
        :class="['btn-power btn-play', { play: isPlay }]"
        title="Play"
      ></button>
      <button
        @click="recordSound()"
        :class="['btn-power btn-record', { record: isRecord }]"
        title="Record"
      ></button>
      <button @click="playLastRecord()" class="btn-power record-play">
        Play Last Rec
      </button>
    </div>
    <pads-list :pads="pads"></pads-list>
  </div>
</template>

<script>
import PadsList from "../components/pads-list.vue";

export default {
  name: "loop-machine",

  data() {
    return {
      isRecord: false,
    };
  },

  computed: {
    pads() {
      return this.$store.getters.sounds;
    },
    isPlay() {
      return this.$store.getters.isPlay;
    },
  },

  methods: {
    playSound() {
      this.$store.commit({ type: "playSound", isRecord: this.isRecord });
    },
    stopSound() {
      this.isRecord = false;
      this.$store.commit({ type: "stopSound" });
    },
    recordSound() {
      this.isRecord = !this.isRecord;
      this.$store.commit({ type: "recordSound", isRecord: this.isRecord });
      if (this.isRecord && !this.isPlay) this.playSound();
    },
    playLastRecord() {
      this.$store.dispatch({ type: "playLastRecord" });
    },
  },

  created() {
    this.$store.dispatch({ type: "getSounds" });
  },

  components: { PadsList },
};
</script>
