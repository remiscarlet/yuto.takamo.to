<template>
  <b-container>
    <b-row>
      <b-col>
        <h4 class="text-center">An Inquisitive</h4>
        <h2 class="text-center">Software Engineer, Creative, Huge Nerd</h2>
        <p class="text-center lead">
        Sup, I’m Yuto. I’m an engineer with industry experience in web and cloud technologies, systems administration and automation, as well as a healthy interest in new and exciting technologies and ideas. I believe that the rate of change in the technology industry only accelerates as time goes on and that my love and drive for learning only serves to position me for success
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img src="../../content/images/remitest.jpg" fluid alt="Remi cute"></b-img>
      </b-col>
      <b-col>
        <h4 class="text-center">Coding Isn't All She Does</h4>
        <p class="text-center lead">
        I also spend copious amounts of time cooking up a storm, continuing my lifelong journey as a musician, and building connections and communities with the people I love.
        </p>
        <p class="text-center lead">
        I also spend too much time on games.
        </p>
      </b-col>
    </b-row>
  </b-container>
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
