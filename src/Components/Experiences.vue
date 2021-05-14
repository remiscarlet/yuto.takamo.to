<template>
  <b-container>
    <b-row class="mt-5">
      <b-col>
        <h2 class="mb-3">
          <a v-if="link" :href="link" target="_blank">{{ title }}</a>
          <span v-else>{{ title }}</span>
        </h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-bind:cols="leftColWidth">
        <div>
          <h6 class="pl-2 m-0"><i>Positions:</i></h6>
          <ul>
            <li v-for="role in roles" v-bind:key="role.tenure" v-bind:class="{ intern: role.isintern }" class="position">
              {{ role.position }} <span v-if="role.roleid" class="roleid">({{ role.roleid }})</span><br v-if="role.tenure" />
              <span class="tenure" v-if="role.tenure">({{ role.tenure }})</span>
            </li>
          </ul>
        </div>
        <div class="mt-5" v-if="tech">
          <h6 class="pl-2 m-0"><i>Tech I Used:</i></h6>
          <ul>
            <li v-for="line in tech" class="intern">
              {{ line }}
            </li>
          </ul>
        </div>
      </b-col>
      <b-col v-bind:cols="rightColWidth">
        <p v-for="line in description.split('\n\n')">
        {{ line }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { BContainer, BRow, BCol } from 'bootstrap-vue';

@Component({
  components: {
    BContainer,
    BRow,
    BCol,
  }
})
export default class Experiences extends Vue {
  @Prop() title: string;
  @Prop() roles: Array<string>;
  @Prop({default: false}) isintern: boolean;
  @Prop({default: "6:6"}) colRatio: string;
  @Prop({default: ""}) link: string;
  @Prop({default: ""}) description: string;
  @Prop({default: ""}) tech: Array<string>;

  leftCols: number = 6;
  rightCols: number = 6;

  get leftColWidth() : number {
    console.log("leftColWidth: " + this.leftCols.toString());
    return this.leftCols;
  }

  get rightColWidth() : number {
    console.log("rightColWidth: " + this.rightCols.toString());
    return this.rightCols;
  }

  mounted() {
    this.initColWidths(this.colRatio);
  }

  initColWidths(ratio: string) {
    let split: Array<string> = ratio.split(":");
    if (split.length !== 2) {
      throw new Error(`Invalid ratio string. Got: ${ratio}`);
    }
    this.leftCols = parseInt(split[0]);
    this.rightCols = parseInt(split[1]);
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

.position {
  font-size: 0.9em;
}

.intern {
  font-size: 0.8em;
}

.roleid {
  font-size: 0.75em;
}

.tenure {
  display: block;
  font-size: 0.75em;
  top: -10px;
}


.top-padding {
  padding-top: 2.4em;
}
</style>
