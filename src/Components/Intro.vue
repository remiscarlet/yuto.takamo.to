<template>
  <b-container class="mb-5" style="margin-top: 100px;">
    <b-row>
      <b-col>
        <h3 class="text-center" >
          <AdjectiveSlider />
        </h3>
          <h1 class="text-center my-3">Software Engineer,<br />Creative,<br />Huge Nerd</h1>
        <p class="text-center lead my-3">
        Sup, I’m Yuto. I’m an engineer with industry experience in web and cloud technologies, systems administration and automation, and CICD pipeline configuration. I'm a guy with a healthy interest in new and exciting technologies, a love for teaching others, and a drive for making an impact wherever I go. I believe that the rate of change in the technology industry only accelerates as time goes on and that my love for learning only serves to position me for success.
        </p>
      </b-col>
    </b-row>
    <b-row class="my-5" align-v="center">
      <b-col cols=5>
        <b-img src="../../assets/images/profile.jpg" rounded="circle" fluid alt="Remi cute"></b-img>
      </b-col>
      <b-col cols=7>
        <h4 class="text-left">Coding Isn't All I Do</h4>
        <p class="text-left smaller-text">
        I also spend copious amounts of time cooking up a storm, continuing my lifelong journey as a musician, and building connections and communities with the people I love.
        </p>
        <p class="text-left smaller-text lead">
        I also spend too much time on games.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import AdjectiveSlider from './AdjectiveSlider.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AdjectiveSlider,
  },
})
export default class Intro extends Vue { };
</script>

<style scoped>
p {
  font-size: 1em;
  text-align: center;
}

.smaller-text {
  font-size: 0.9em;
}
</style>
