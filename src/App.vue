<template>
  <div id="app">
    <NavBar/>
    <PageContent/>
  </div>
</template>
<script>
 import NavBar from './Components/Navbar.vue';
 import PageContent from './Components/PageContent.vue';
  export default {
    name: 'navbar',
    components: {
      NavBar,
      PageContent,
    }
  }
</script>
