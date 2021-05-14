<template>
  <b-tbody>
    <b-tr class="my-5">
      <h4>{{ category }}</h4>
    </b-tr>
    <b-tr v-for="tech in technologies" v-bind:key="tech.name">
      <b-td style="width:20%" class="p-1 py-2 align-middle">
        <h6 class="m-0">{{ tech.name }}</h6>
      </b-td>
      <b-td style="width:20%" class="p-1 align-middle">
        <star-rating :rating="tech.rating" :star-style="starStyle(tech)"></star-rating>
      </b-td>
      <b-td style="width:60%" class="p-1 align-middle comment">
        {{ tech.comment ? tech.comment : "" }}
      </b-td>
    </b-tr>
  </b-tbody>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { BTbody, BTr, BTd } from 'bootstrap-vue';

import StarRating from './StarRating.vue';
const randomColor = require('randomcolor');

Vue.component('star-rating', StarRating);

@Component({
  components: {
    StarRating,
    BTbody,
    BTr,
    BTd,
  },
})
export default class TechRatings extends Vue {
  @Prop() category: string
  @Prop() technologies: Array<object>

  @Prop({default: "#ffc4cb"}) defaultFullStarColor: string
  @Prop({default: "#737373"}) defaultEmptyStarColor: string
  @Prop({default: 20}) defaultStarWidth: number
  @Prop({default: 20}) defaultStarHeight: number

  starStyle(params: any) {
    let fullStarColor: string = params.fullStarColor ?? this.defaultFullStarColor;
    let emptyStarColor: string = params.emptyStarColor ?? this.defaultEmptyStarColor;
    let starWidth: number = params.starWidth ?? this.defaultStarWidth;
    let starHeight: number = params.starHeight ?? this.defaultStarHeight;

    if (params.randomizeFillColor) {
      fullStarColor = randomColor({
        luminosity: 'light',
        hue: 'red',
      });
    }

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
