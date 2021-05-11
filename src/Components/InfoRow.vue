<template>
  <b-row class="my-5">
    <b-col v-bind:cols="leftColWidth">
      <h2>
        <a v-if="link" :href="link" target="_blank">{{ title }}</a>
        <span v-else>{{ title }}</span>
      </h2>
      <ul>
        <li v-for="role in roles" v-bind:class="{ intern: isintern }">
          {{ role.position }}<span v-if="role.roleid" class="roleid"> ({{ role.roleid }})</span><br v-if="role.tenure" />
          <span class="tenure" v-if="role.tenure">({{ role.tenure }})</span>
        </li>
      </ul>
    </b-col>
    <b-col class="top-padding" v-bind:cols="rightColWidth">
      <p v-for="line in description.split('\n\n')">
      {{ line }}
      </p>
    </b-col>
  </b-row>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class InfoRow extends Vue {
  @Prop() title: string;
  @Prop() roles: Array<string>;
  @Prop({default: false}) isintern: boolean;
  @Prop({default: "1:1"}) colRatio: string;
  @Prop({default: ""}) link: string;
  @Prop({default: ""}) description: string;
  @Prop({default: ""}) tech: Array<string>;

  leftColWidth: number
  rightColWidth: number

  mounted() {
    console.log("InfoRow:");
    console.log(this.title);
    console.log(this.roles);
    console.log(this.isintern);
    console.log(this.colRatio);
    console.log(this.link);
    console.log(this.description);
  }

  @Watch('colRatio')
  onColRatioChanged(ratio: string) {
    let split: Array<string> = ratio.split(":");
    if (split.length !== 2) {
      throw new Error(`Invalid ratio string. Got: ${split.length}`);
    }
    this.leftColWidth = parseInt(split[0]);
    this.rightColWidth = parseInt(split[1]);
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
