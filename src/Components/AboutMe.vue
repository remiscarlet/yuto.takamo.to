<template>
  <b-container class="mt-5">
    <b-row class="my-5">
      <b-col>
        <h2>
          Stuff About Me
        </h2>
      </b-col>
    </b-row>
    <b-row class="my-3">
      <b-col cols=3>
        Stuff Here
      </b-col>
      <b-col cols=9>
        Explanation stuff here
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class AboutMe extends Vue { };
</script>

<style scoped>
</style>
