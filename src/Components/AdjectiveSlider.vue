<template>
  <div>
  <transition name="slide" mode="out-in">
    <div v-bind:key="adjectiveIndex">
      {{ adjective }}
    </div>
  </transition>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AdjectiveSlider extends Vue {
  adjectiveList: string[] = [
    "A Curious",
    "An Ambitious",
    "A Tenacious",
    "A Self-driven",
    "A Sleepy",
  ];

  adjectiveIndex: number = 0;

  get adjective() {
    return this.adjectiveList[this.adjectiveIndex];
  }

  nextAdj() {
    this.incrementIndex();
  }

  incrementIndex() {
    let maxIdx = this.adjectiveList.length;
    this.adjectiveIndex = (this.adjectiveIndex + 1) % maxIdx;
  }

  created() {
    setInterval(this.nextAdj, 5000);
  }
};
</script>
<style lang="scss" scoped>
.slide-enter-active {
  transition: all .3s ease;
}

.slide-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-enter, .slide-leave-to {
  transform: translateX(15px);
  opacity: 0;
}

$slide_distance: 25px;
.slide-enter {
  left: $slide_distance;
}

.slide-leave-to {
  left: $slide_distance;
}
</style>
