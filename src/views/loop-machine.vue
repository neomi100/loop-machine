<template>
  <div class="home main-layout">
    <div class="btns-power">
      <button @click="stopSound()" class="btn-power stop" title="Stop"></button>
      <button
        @click="playSound()"
        :class="['btn-power btn-play', { play: isPlay }]"
        title="Play"
      ></button>
    </div>
    <pads-list :pads="pads"></pads-list>
  </div>
</template>

<script>
import PadsList from "../components/pads-list.vue";

export default {
  name: "loop-machine",

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
      this.$store.commit({ type: "playSound" });
    },
    stopSound() {
      this.$store.commit({ type: "stopSound" });
    },
  },

  created() {
    this.$store.dispatch({ type: "getSounds" });
  },

  components: { PadsList },
};
</script>
