<template>
  <b-container>
    <b-row class="mt-5">
      <b-col cols=12>
        <h3>
          {{ sectTitle }}
        </h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="pl-5">
        <b-container v-for="project in projects" v-bind:key="project.title" class="mt-3">
          <h4>
            <a v-if="project.link" v-bind:href="project.link" target="_blank">{{ project.title }}</a>
            <span v-else>{{ project.title }}</span>
          </h4>
          <div class="d-flex">
            <p style="width: 75%" v-for="line in project.description.split('\n\n')">
              {{ line }}
            </p>
            <div style="width: 25%" class="mx-3 tech-used">
              <h5>Tech Used</h5>
              <ul>
                <li v-for="line in project.tech">
                  {{ line }}
                </li>
              </ul>
            </div>
          </div>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class ProjectsSect extends Vue {
  @Prop() sectTitle: string;
  @Prop() projects: Array<any>;

  created() {
    console.log(this.projects);
  }
};

</script>
<style lang="scss" scoped>
.tech-used {
  font-size: 0.75em;
}
p {
  font-size: 0.75em;
}
 </style>
