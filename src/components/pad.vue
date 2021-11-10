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
    };
  },

  methods: {
    getPad() {
      const pad = this.pad;
      pad.isPlay = !pad.isPlay;
      this.isActive = !this.isActive;
      this.$emit("setAudio", pad);
    },
  },
};
</script>