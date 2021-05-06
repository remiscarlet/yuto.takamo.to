<template>
  <div>
    <div v-if="page === 'home'">
      <Intro />
      <History />
      <!--MyTech (*/5 star things)/-->
    </div>
    <div v-else-if="page === 'aboutme'">
      <AboutMe />
      <SideProjects />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Intro from './Intro.vue';
import History from './History.vue';
import AboutMe from './AboutMe.vue';

@Component({
  components: {
    Intro,
    History,
    AboutMe,
  }
})
export default class PageContent extends Vue {
  @Prop({default: 'home'}) page: string;
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
