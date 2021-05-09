<template>
  <div id="app">
    <NavBar @changePage="changePage"/>
    <PageContent v-bind:page="page" />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import NavBar from './Components/Navbar.vue';
import PageContent from './Components/PageContent.vue';
import Footer from './Components/Footer.vue';

@Component({
  components: {
    NavBar,
    PageContent,
    Footer
  }
})
export default class App extends Vue {
  @Prop() page: string = 'home';

  changePage(newPage: string) {
    this.page = newPage;
  }
};

</script>
