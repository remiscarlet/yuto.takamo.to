<template>
  <div id="app">
    <NavBar />
    <PageContent v-bind:page="page" />
    <Footer />
  </div>
</template>
<script>
  import NavBar from './Components/Navbar.vue';
  import PageContent from './Components/PageContent.vue';
  import Footer from './Components/Footer.vue';

  export default {
    name: 'navbar',
    page: 'homenot',
    components: {
      NavBar,
      PageContent,
      Footer,
    }
  }
</script>
