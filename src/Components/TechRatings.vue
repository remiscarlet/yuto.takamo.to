<template>
  <b-tbody>
    <b-tr class="my-5">
      <h4>{{ category }}</h4>
    </b-tr>
    <b-tr v-for="tech in technologies" v-bind:key="tech.name">
      <show-at breakpoint="mediumAndAbove">
      <b-td class="p-1 py-2 align-middle">
        <h6 class="m-0">{{ tech.name }}</h6>
      </b-td>
      </show-at>
      <b-td class="p-1 align-middle">
        <show-at breakpoint="small">
          <h6 class="m-0 mt-2">{{ tech.name }}</h6>
        </show-at>
        <star-rating :rating="tech.rating" :star-style="starStyle(tech)"></star-rating>
      </b-td>
      <b-td class="p-1 align-middle comment">
        {{ tech.comment ? tech.comment : "" }}
      </b-td>
    </b-tr>
  </b-tbody>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { BTbody, BTr, BTd } from 'bootstrap-vue';
import { showAt, hideAt } from 'vue-breakpoints';

import StarRating from './StarRating.vue';
const randomColor = require('randomcolor');

Vue.component('star-rating', StarRating);

@Component({
  components: {
    StarRating,
    BTbody,
    BTr,
    BTd,
    showAt,
    hideAt,
  },
})
export default class TechRatings extends Vue {
  @Prop() category: string
  @Prop() technologies: Array<object>

  @Prop({default: "#ffc4cb"}) defaultFullStarColor: string
  @Prop({default: "#737373"}) defaultEmptyStarColor: string
  @Prop({default: 15}) defaultStarWidth: number
  @Prop({default: 15}) defaultStarHeight: number

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
