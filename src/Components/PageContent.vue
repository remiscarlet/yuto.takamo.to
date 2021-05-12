<template>
  <div class="pageContents">
    <div v-if="page === 'home'">
      <Intro />
      <History />
    </div>
    <div v-else-if="page === 'projects'">
      <Projects />
    </div>
    <div v-else-if="page === 'mytech'">
      <MyTech />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Intro from './Intro.vue';
import History from './History.vue';
import Projects from './Projects.vue';
import MyTech from './MyTech.vue';

@Component({
  components: {
    Intro,
    History,
    Projects,
    MyTech,
  }
})
export default class PageContent extends Vue {
  @Prop() page: string;
};
</script>

<style lang="scss" scoped>
.pageContents {
  margin-top: 7em;
}
</style>
