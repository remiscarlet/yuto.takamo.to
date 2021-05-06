<template>
  <div>
    <Intro />
    <History />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Intro from './Intro.vue';
import History from './History.vue';

@Component({
  components: {
    Intro,
    History
  }
})
export default class PageContent extends Vue { };
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
