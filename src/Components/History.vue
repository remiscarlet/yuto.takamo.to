<template>
  <b-container class="my-5">
    <b-row class="my-5">
    </b-row>
    <b-row>
      <b-col>
        <h3>
          But I do have a long history with technology
        </h3>
        <p>
        Having been taught programming at a young age, I’ve been creating tools and experiences for most of my life. While I started with humble beginnings unironically creating neon colored Comic Sans websites or creating 3000-line “helloworld.py” IRC chat bots, I’ve since studied and graduated from Carnegie Mellon University and worked on or for a wide range of companies, projects, and communities. Here are just some of my most notable experiences.
        </p>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <h2>Etsy Inc</h2>
        <ul>
          <intern><li>Software Engineer Intern<br /><tenure>(Jan 2016 - Feb 2017)</tenure></li></intern>
          <li>Software Engineer <roleid>(IC1)</roleid><br /><tenure>(May 2017 - April 2018)</tenure></li>
          <li>Software Engineer <roleid>(IC2)</roleid><br /><tenure>(April 2018 - October 2019)</tenure></li>
          <li class="my-2">Sr. Software Engineer <roleid>(IC3.1)</roleid><br /><tenure>(October 2019 - April 2021)</tenure></li>
        </ul>
      </b-col>
      <b-col class="top-padding">
        <p>
        My work consisted of creating, managing, and improving the financial compliance systems and business process automations that engineers were subject to as a result of the Sarbanes-Oxley Act of 2002. Work done on this front included building a code and commit flagging algorithm and its infrastructure, creating an internal survey system sent to engineers with certain compliance concerns built in mind along with integrations to the code and commit analysis results, and a slew of custom internal tools for compliance work automation. One area of impact consisted of working on the team's transition to cloud infrastructure as Etsy moved away from self-hosted data centers. This work required quickly learning a completely new class of technology due to my lack of cloud experience and then forming effective solutions for the migration.
        </p>

        <p>
        In mid-2019 I unexpectedly inherited and became the sole maintainer of Etsy’s financial auditing business process automations and system infrastructure that processed tens of terabytes of transaction data per day until late 2020. This work earned me recognition with my promotion to a Sr. SWE. My last few months at the company consisted of training new engineers on the team to take over before my departure to ensure a smooth transition of system and process ownership. This work was particularly enjoyable as I could ensure the new engineers would have a better experience with ownership transition in contrast to my own.
        </p>
        <p>
        Technologies used during my time included but were not limited to: Terraform, GCP (GCE, BQ, GCB, GCS, GCR), CentOS, PHP, Python2&#38;3, Git CLI/GitHub API, Jenkins, Chef, Docker, Syslog, ELK, MySQL, Vertica, Jira, Lucidchart, and others.
        </p>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <h2><a href="https://yukkuricraft.net" target="_blank">Yukkuricraft</a></h2>
        <ul>
          <li>Founder, Owner<br /><tenure>(November 2013 - Current)</tenure></li>
        </ul>
      </b-col>
      <b-col class="top-padding">
        <p>
        A sizable online gaming community created with a group of friends back in high school. The community is primarily centered around recreating the fictional world from the Touhou Project series of Japanese indie games in a fully public and explorable Minecraft server. However over time, the community has grown and expanded to cover a large swath of games, mediums, and sub-communities!
        </p>
        <p>
        Technologically, we self-host our game servers while using GCP/AWS for network and online infrastructure, utilize Github Pages and Actions for CICD automation of our website, build various custom game plugins and online tools, and have a large number of custom Discord integrations with our game servers. Our dev team consists of a handful of longtime community members that volunteer their time and expertise. On the technology side of things, I primarily contribute as a systems/cloud administrator and manager of the physical hardware. I may or may not have started building a homelab for this for fun.
        </p>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <h2><a href="https://www.japancenternj.com/" target="_blank">Japan Center of NJ</a></h2>
        <ul>
          <li>Systems Administrator, Developer<br /><tenure>(2016 - Current)</tenure></li>
        </ul>
      </b-col>
      <b-col class="top-padding">
        <p>
        A Japanese community center in Ridgefield, NJ offering various informational services to new expats and hosting bilingual fitness and Japanese culture classes for the general community. I volunteer my time as the sole "IT guy" by building and maintaining the online infrastructure as well as develop custom tools and webapps. Work includes the email infrastructure using SquirrelMail, Postfix, Dovecot, Amavis, etc, a custom webapp for patrons to sign up and pre-pay for classes which includes an internal payroll system integrating signup data and contract deductions using python/django, and an infrastructurally isolated Wordpress instance for their primary public facing webpage.
        </p>
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col>
        <h2><a href="https://kancollewiki.net" target="_blank">Kancollewiki.net</a></h2>
        <ul>
          <li>Administrator, Data Miner, Translator<br /><tenure>(2014 - 2017)</tenure></li>
        </ul>
      </b-col>
      <b-col class="top-padding">
        <p>
        A wiki for a niche Japanese online webgame, I was the primary data collector and developer for the purpose of automating various aspects of data mining and writing wikimedia modules. Scraping was done via a python pipeline of extracting, decoding, and analyzing resources using headless browser environments to handle authentication and anti-botting measures. A significant portion of this work consisted of decoding and documenting obfuscated data and api responses for public sharing. Wikimedia modules consisted of easy to use templates and functions for automatically creating html blocks illustrating game mechanics and other complex information. Finally, I also contributed much work in the form of translating game information and news from Japanese to English.
        </p>
        <p>
        Technologies used included Python, Lua, Javascript, and MediaWiki.
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

<style lang="scss" scoped>

p {
  font-size: 0.8em;
  text-align: left;
  text-indent: 1.2em;

  &.noindent {
    text-indent: 0;
  }
}

intern {
  font-size: 0.9em;
}

roleid {
  font-size: 0.75em;
}

tenure {
  display: block;
  font-size: 0.75em;
  top: -10px;
}


.top-padding {
  padding-top: 2.4em;
}
</style>
