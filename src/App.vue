<template>
  <div id="app">
    <NavBar />
    <PageContent />
    <Footer />
  </div>
</template>
<script>
  import NavBar from './Components/Navbar.vue';
  import PageContent from './Components/PageContent.vue';
  import Footer from './Components/Footer.vue';
  export default {
    name: 'navbar',
    components: {
      NavBar,
      PageContent,
      Footer,
    }
  }
</script>
