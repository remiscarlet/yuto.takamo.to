<template>
  <b-container class="my-5">
    <b-row class="my-5">
      <b-col>
        <h3>
          But I do have a long history with technology
        </h3>
        <p>
        Having been taught programming at a young age, I’ve been creating tools and experiences for most of my life. While I started with humble beginnings unironically creating neon colored Comic Sans websites or writing 3000-line “helloworld.py” IRC chat bots, I’ve since studied and graduated from Carnegie Mellon University and worked on or for a wide range of companies, projects, and communities. Here are just some of my most notable experiences.
        </p>
      </b-col>
    </b-row>
    <InfoRow
      v-for="experience in yamlData.experiences"
      v-bind="experience"
      v-bind:key="experience.title"
      v-bind:colRatio="yamlData.colRatio"
    />
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as YAML from 'yaml';

import yamlContent from '!!raw-loader!../../content/yaml/experiences.yaml';
import InfoRow from './InfoRow.vue';

@Component({
  components: {
    InfoRow,
  }
})
export default class History extends Vue {
  get yamlData(): any {
    return YAML.parse(yamlContent);
  }
};
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
</style>
