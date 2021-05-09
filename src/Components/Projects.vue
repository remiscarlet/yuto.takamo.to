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
        In-Flight Projects
      </b-col>
      <b-col cols=9 class="mt-5">
        <h4><a target="_blank" href="https://github.com/remiscarlet/py-curses_space-invaders">py-curses_space_invaders</a></h4>
        <p>
        A fun little commandline Space Invaders written using python and curses - ie, standard libraries only. This was started as part of my application/code sample for joining the Recurse Center which I participated in during the 2021 Summer1 Batch. The submission was intentionally incomplete as the task was to work on the project as part of a "pair programming task" as part of the interview. I've since decided that I just want to finish the game because why not?
        </p>

        <h4><a target="_blank" href="https://github.com/remiscarlet/TDRPG">TDRPG</a></h4>
        <p>
        My first non-trivial Unity project. I intend on working on this project for a long time. Because I am still fairly new to Unity, my plan is to work on smaller Unity projects and implement new features to TDRPG as I learn more and gain new Unity skillsets. Gameplay is intended to be a 3rd person high-fantasy themed tower defense game reminiscent of Dungeon Defenders in playstyle and mechanics.
        </p>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols=3>
        Finished Projects
      </b-col>
      <b-col cols=9 class="mt-5">
        <h4><a target="_blank" href="https://amat.su/kaze">Amat.su/kaze</a></h4>
        <p>
        A URL shortener with accompanying Chrome and Firefox extensions themed after a character from a Japanese game. Built using Docker, Django, Python, Nginx, Certbot, and hosted with GCP (GCE, GCR, Cloud SQL & DNS) and provisioned with terraform. I've also configured CICD automation using Github Actions and provisioned GCP infrastructure.
        </p>

        <h4 class="mt-5"><a target="_blank" href="#">Foo</a></h4>
        <p>
        Something else here
        </p>

      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols=3>
        Finished Scripts and Tools
      </b-col>
      <b-col cols=9 class="mt-5">
        <h4><a target="_blank" href="https://github.com/remiscarlet/elite-dangerous-controller-arduino-logic/blob/master/main.ino">Elite Dangerous Arduino Controller Code</a></h4>
        <p>
        I created a custom controller board with switches, buttons, etc for playing Elite Dangerous, a fantastic space flight, combat, and trade simulator. One of the more well known aspects of the game is the absolute insane number of keybindings and functions in the game. This code simply powers the arduino board behind the custom controller.
        </p>

        <h4 class="mt-5"><a target="_blank" href="https://github.com/remiscarlet/evike-boa-snipe/blob/master/kekeroni.js">Evike "Box of Awesome" Sniper</a></h4>
        <p>
        This is a simple javascript app that you can run in your browser (I use a Chrome extension called <a target="_blank" href="https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk?hl=en">CJS</a>). Evike, an online airsoft retailer, has occasional events where they sell limited-quantity "Box of Awesome"s which are essentially grab bags. Due to the limited quantity and poularity of the item, it can be extremely difficult to buy these so I wrote this sniper to automatically buy BoAs.
        </p>

      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols=3>
        Abandoned Projects
      </b-col>
      <b-col cols=9 class="mt-5">
        <h4><a target="_blank" href="https://github.com/remiscarlet/WaterEmblem">Water Emblem</a></h4>
        <p>
        This was a game project using python and pygame to create a Fire Emblem/Advance Wars-esque top-down grid-based strategy game. The idea was to make this as a fan-derivative game of the Japanese game called Kantai Collection by using characters from that game. While the project is abandoned, a good chunk of the game's framework was finished and had a playable demo which had friendly and enemy units, battle animations, fog of war, and other game mechanics.
        </p>

        <h4 class="mt-5"><a target="_blank" href="https://github.com/remiscarlet/Blook">Blook</a></h4>
        <p>
        This one wasn't done solo as this was a hackathon project that some college friends and I did for Unhackathon 2014. We ended up winning several awards with this project. The project is a VR rhythm game where you use your body to play.
        </p>

      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Projects extends Vue { };
</script>

<style lang="scss" scoped>

p {
  left-padding: 1em;
  bottom-margin: 3em;
  text-indent: 1.2em;
}

</style>
