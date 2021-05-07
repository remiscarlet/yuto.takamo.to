<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h2>
          So What Else Have I Done?
        </h2>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols=3>
        Online Projects
      </b-col>
      <b-col cols=9>
        <h4><a href="https://amat.su/kaze">Amat.su/kaze</a></h4>
        <p>
        A URL shortener with accompanying Chrome and Firefox extensions themed after a character from a Japanese game. Built using Docker, Django, Python, Nginx, Certbot, and hosted with GCP (GCE, GCR, Cloud SQL & DNS) and provisioned with terraform. I've also configured CICD automation using Github Actions and provisioned GCP infrastructure.
        </p>

        <h4><a href="#"></a>Foo</h4>
        <p>
        Something else here
        </p>

      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class AboutMe extends Vue { };
</script>

<style lang="scss" scoped>

p {
  left-padding: 1em;
  bottom-margin: 3em;
  text-indent: 1.2em;
}

</style>
