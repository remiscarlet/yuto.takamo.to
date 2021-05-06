<template>
  <footer class="text-center mb-3">
    | <b-link target="_blank" href="https://github.com/remiscarlet/yuto.takamo.to">Source</b-link> |
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
