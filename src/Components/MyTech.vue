<template>
  <div>
    <b-container>
      <b-row>
         <b-col>
           <h3>
             The Technology I've Used Over the Years
           </h3>
           <p>
           While hardly an exhaustive list, here's a list of technologies I've used and a relative level of comfort and experience I have with each one. Here's a rough measure of what each level means:
           </p>
           <b-table-simple>
             <b-tbody>
               <b-tr>
                 <b-td><star-rating rating="0.0" :star-style="starStyle"/></b-td>
                 <b-td>I've heard of it. Or maybe I haven't.</b-td>
               </b-tr>
               <b-tr>
                 <b-td><star-rating rating="1.0" :star-style="starStyle"/></b-td>
                 <b-td>I've used it... like once in my life.</li></b-td>
               </b-tr>
               <b-tr>
                 <b-td><star-rating rating="2.0" :star-style="starStyle"/></b-td>
                 <b-td>I've used it in projects and can read/write usable code/configs, but I'm largely googling</b-td>
               </b-tr>
               <b-tr>
                 <b-td><star-rating rating="3.0" :star-style="starStyle"/></b-td>
                 <b-td>A technology I've used to build things from scratch and would feel comfortable starting a greenfield with this.</b-td>
               </b-tr>
               <b-tr>
                 <b-td><star-rating rating="4.0" :star-style="starStyle"/></b-td>
                 <b-td>Something I've been using for a while and would consider myself very comfortable</b-td>
               </b-tr>
               <b-tr>
                 <b-td><star-rating rating="5.0" :star-style="starStyle"/></b-td>
                 <b-td>I've been using this long enough that I have strong opinions and understand the lower level implications of this technology</b-td>
               </b-tr>
             </b-tbody>
           </b-table-simple>
         </b-col>
      </b-row>
    </b-container>
    <b-container class="my-5">
      <b-table-simple>
        <caption>Rating my Technologies</caption>
        <b-thead>
        </b-thead>
        <TechRatings
          v-for="(technologies, category) in yamlData.ratings"
          v-bind:key="category"
          v-bind:category="category"
          v-bind:technologies="technologies"
        />
      </b-table-simple>
    </b-container>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { parse } from 'yaml';

import StarRating from './StarRating.vue';
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

  get starStyle() {
    return {
      starWidth: 20,
      starHeight: 20,
    }
  }
};
</script>
<style lang="scss" scoped>

.container {
  font-size: 0.8em;
}

tbody td {
  padding: 0.5em;
  font-size: 0.75em;
}

</style>
