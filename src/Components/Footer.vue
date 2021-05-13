<template>
  <footer class="text-center mb-3">
    | <b-link target="_blank" href="https://github.com/remiscarlet/yuto.takamo.to">Source</b-link> |<br />
    <script async defer type="application/javascript" src="https://www.recurse-scout.com/loader.js?t=a90f188cdf75b6dc35a84f07420e3a9a"></script>
  </footer>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
};
</script>

<style scoped>
footer {
  font-size: 0.7em;
}
</style>
