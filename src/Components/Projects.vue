<template>
  <b-container>
    <b-row class="my-5">
      <h2>
        So What Else Have I Done?
      </h2>
      <p>
        These are just some of the various projects I've done on my own over the years.
      </p>
    </b-row>
    <ProjectsSect
      v-for="data in yamlData.sects"
      v-bind:key="data.sectTitle"
      v-bind="data"
    />
    <b-row>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as YAML from 'yaml';

import yamlContent from '!!raw-loader!../../content/yaml/projects.yaml';
import ProjectsSect from './ProjectsSect.vue';

@Component({
  components: {
    ProjectsSect
  }
})
export default class Projects extends Vue {
  get yamlData(): any {
    return YAML.parse(yamlContent);
  }
};

</script>
<style lang="scss" scoped>

p {
  left-padding: 1em;
  bottom-margin: 3em;
  text-indent: 1.2em;
}

</style>
