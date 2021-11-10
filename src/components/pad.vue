<template>
  <div
    v-if="pad"
    @click="getPad()"
    :class="[{ active: isActive }, 'btn-audio']"
  >
    <span class="pad-name">{{ pad.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["pad"],

  data() {
    return {
      isActive: false,
      // active: this.pad.id,
    };
  },

  methods: {
    getPad() {
      // const pad={...this.pad};
      const pad=this.pad;
      pad.isPlay = !pad.isPlay;
      this.isActive = !this.isActive;
      // this.active = `${this.pad.id}`;
      this.$emit("setAudio", pad);
      console.log(pad.isPlay, this.pad.name);
      // if (!this.pad.isPlay) this.pad.audio.pause();
    },
  },

};
</script>