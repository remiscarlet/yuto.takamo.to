<template>
  <b-tbody>
    <b-tr class="pt-5">
      <h4>{{ category }}</h4>
    </b-tr>
    <b-tr v-for="tech in technologies" v-bind:key="tech.name">
      <b-td style="width:25%" class="p-2 align-middle">
        <h6 class="m-0">{{ tech.name }}</h6>
      </b-td>
      <b-td style="width:25%" class="p-2 align-middle">
        <star-rating :rating="tech.rating" :star-style="starStyle(tech)"></star-rating>
      </b-td>
      <b-td style="width:50%" class="p-2 align-middle comment">
        {{ tech.comment ? tech.comment : "" }}
      </b-td>
    </b-tr>
  </b-tbody>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import StarRating from './StarRating.vue';
const randomColor = require('randomcolor');

Vue.component('star-rating', StarRating);

@Component({
  components: {
    StarRating,
  },
})
export default class TechRatings extends Vue {
  @Prop() category: string
  @Prop() technologies: Array<object>

  created() {
    console.log("#######");
    console.log(this.category);
    console.log(this.technologies);
  }

  starStyle(params: any) {
    let fullStarColor: string = params.fullStarColor ?? '#ed8a19';
    let emptyStarColor: string = params.emptyStarColor ?? '#737373';
    let starWidth: number = params.starWidth ?? 20;
    let starHeight: number = params.starHeight ?? 20;

    if ( ! params.noRandomizeFillColor) {
      fullStarColor = randomColor({
        luminosity: 'light',
        hue: 'red',
      });
    }

    console.log("Color is: "+fullStarColor);

    return {
      fullStarColor: fullStarColor,
      emptyStarColor: emptyStarColor,
      starWidth: starWidth,
      starHeight: starHeight,
    }
  }
};
</script>
<style lang="scss" scoped>
.comment {
  font-size: 0.8em;
}

tbody {
  border-bottom: 30px solid transparent;
}

</style>
