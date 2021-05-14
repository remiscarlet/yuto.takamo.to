<template>
  <div>
    <b-container>
      <b-row class="my-5">
        <b-col>
          <h3>
            So What Else Have I Done?
          </h3>
          <p>
            These are just some of the various projects I've done on my own over the years.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <ProjectsSect
      v-for="data in yamlData.sects"
      v-bind:key="data.sectTitle"
      v-bind="data"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BContainer, BRow } from 'bootstrap-vue';
import { parse } from 'yaml';

import yamlContent from '!!raw-loader!../../content/yaml/projects.yaml';
import ProjectsSect from './ProjectsSect.vue';

@Component({
  components: {
    ProjectsSect,
    BContainer,
    BRow,
  }
})
export default class Projects extends Vue {
  get yamlData(): any {
    return parse(yamlContent);
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
