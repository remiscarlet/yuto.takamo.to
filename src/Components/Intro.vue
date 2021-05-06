<template>
  <div>
    <h4>An Inquisitive</h4>
    <h2>Software Engineer, Creative, Huge Nerd</h2>

    <img alt="Image here" width=500 height=500></img>
    <div>
      <div>Coding Isn't All I Do</div>
      <div>
        <p>Lorem Ipsum Dolor Something</p>
        <p>Hi hello</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Intro extends Vue { };
</script>

<style scoped>
p {
  font-size: 1em;
  text-align: center;
}
</style>
