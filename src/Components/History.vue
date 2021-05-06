<template>
  <b-container class="mt-5">
    <b-row>
      <b-col>
        <h3 class="text-left">
          But I do have a long history with technology
        </h3>
        <p class="text-left">
        Having been taught programming at a young age, I’ve been creating tools and experiences for most of my life. While I started with humble beginnings creating neon colored Comic Sans websites unironically or creating 3000-line “helloworld.py” IRC chat bots, I’ve since studied and graduated from Carnegie Mellon University and worked on or for a wide range of projects and companies. Here are some of my most notable experiences.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2>Etsy Inc</h2>
      </b-col>
      <b-col>
        <p>
        My work consisted of creating, managing, and improving the financial compliance systems and business process automations. As a Sr. SWE, I inherited and was the primary maintainer of Etsy’s financial auditing systems that processed tens of terabytes of records and transactions per day. My final days at the company consisted of cross-training and upskilling new members of the team to take over the process before my departure to ensure a smooth transition of system and process ownership.
        </p>
        <p>
        Technologies used during my time included but were not limited to: GCP, Python, PHP, Github Actions, Jenkins, Chef, Docker, Jira, Lucidchart, and others.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2><a href="https://yukkuricraft.net">Yukkuricraft</a></h2>
      </b-col>
      <b-col>
        <p>
        A sizable online gaming community created with a group of friends in high school. The community is primarily centered around recreating the fictional world from the Touhou Project series of Japanese indie games in a fully public and explorable Minecraft world. However over time, the community has grown and expanded to cover a large swath of games, mediums, and sub-communities!
        </p>
        <p>
        Technologically, we self-host our game servers, utilize Github Pages and Actions for CICD automation, build various custom plugins and tools, and have a large number of Discord-specific integrations with our game servers. Our dev team consists of a handful of longtime community members that volunteer their time and expertise.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h2><a href="https://kancollewiki.net">Kancollewiki.net</a></h2>
      </b-col>
      <b-col>
        <p>
        A wiki for a niche Japanese online webgame, I was the primary data collector and developer for the purpose of automating various aspects of data mining and writing wikimedia modules. Scraping was done via a python pipeline of extracting, decoding, and analyzing resources using headless browser environments to handle authentication and anti-botting measures. A significant portion of this work consisted of decoding and documenting obfuscated data and api responses for public sharing. Wikimedia modules consisted of easy to use templates and functions for automatically creating html blocks illustrating game mechanics and other complex information. Finally, I also contributed much work in the form of translating game information and news from Japanese to English.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class History extends Vue { };
</script>

<style scoped>
p {
  font-size: 1em;
  text-align: center;
}
</style>
