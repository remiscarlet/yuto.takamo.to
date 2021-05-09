<template>
  <div class="pageContents">
    <div v-if="page === 'home'">
      <Intro />
      <History />
      <!--MyTech (*/5 star things)/-->
    </div>
    <div v-else-if="page === 'projects'">
      <Projects />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Intro from './Intro.vue';
import History from './History.vue';
import Projects from './Projects.vue';

@Component({
  components: {
    Intro,
    History,
    Projects,
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

p {
  font-size: 2em;
  text-align: center;
}
</style>
