<template>
  <b-container>
    <b-row class="mt-5">
      <b-col>
        <h3>
          {{ sectTitle }}
        </h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="pl-4">
        <div
          v-for="project in projects"
          v-bind:key="project.title"
          class="mt-3"
        >
          <h4>
            <a v-if="project.link" v-bind:href="project.link" target="_blank">{{
              project.title
            }}</a>
            <span v-else>{{ project.title }}</span>
          </h4>
          <div class="container">
            <div class="row">
              <div class="col-8">
                <p
                  v-for="line in project.description.split('\n\n')"
                  v-html="line"
                ></p>
              </div>
              <div class="col-4 tech-used">
                <h5 class="pl-2">Tech Used</h5>
                <ul>
                  <li v-for="line in project.tech">
                    {{ line }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { BContainer, BRow, BCol } from "bootstrap-vue";

@Component({
  components: {
    BContainer,
    BRow,
    BCol,
  },
})
export default class ProjectsSect extends Vue {
  @Prop() sectTitle: string;
  @Prop() projects: Array<any>;

  created() {
    console.log(this.projects);
  }
}
</script>
<style lang="scss" scoped>
.tech-used {
  font-size: 0.75em;
}
p {
  font-size: 0.75em;
}
</style>
