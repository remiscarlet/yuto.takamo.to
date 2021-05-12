<template>
  <div>
    <b-container>
      <b-row>
         <b-col>
           <h3>
             The Technology I've Used Over the Years
           </h3>
           <p>
           While hardly an exhaustive list, here's a list of technologies I've used and a relative level of comfort and experience I have with each one. That is to say, the ratings are about how comfortable I am with the technology and not a measure of "expertise" when rated across the industry.
           </p>
         </b-col>
      </b-row>
    </b-container>
    <h4>WIP - Come Back Later</h4>
    <TechRatings
      v-for="rating in yamlData.ratings"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { parse } from 'yaml';

import yamlContent from '!!raw-loader!../../content/yaml/techratings.yaml';
import TechRatings from './TechRatings.vue';

@Component({
  components: {
    TechRatings
  },
})
export default class MyTech extends Vue {
  get yamlData(): any {
    return parse(yamlContent);
  }
};
</script>
<style lang="scss" scoped>
</style>
