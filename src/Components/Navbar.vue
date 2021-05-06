<template>
  <div>
    <b-navbar v-bind:class="{'scrolled-up': isScrollingUp, 'scrolled-down': isScrollingDown}" toggleable="lg" type="dark" variant="alert">
      <b-container>
        <b-navbar-brand href="#" class="text-decoration-none">Yuto Takamoto</b-navbar-brand>
      </b-container>
    </b-navbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
  isScrollingUp: boolean = false;
  isScrollingDown: boolean = false;
  lastScrollTop: number = 0;

  created() {
    window.addEventListener('scroll', this.handleScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (event: Event) {
    console.log("Handling scroll event");

    let scrollTop = window.scrollY;
    if (scrollTop < this.lastScrollTop) {
      this.isScrollingUp = true;
      this.isScrollingDown = false;
    } else {
      this.isScrollingUp = false;
      this.isScrollingDown = true;
    }
    this.lastScrollTop = scrollTop;

  }
};
</script>

<style scoped>
.scrolled-down {
  transform:translateY(-100%); transition: all 0.3s ease-in-out;
}
.scrolled-up {
  transform:translateY(0); transition: all 0.3s ease-in-out;
}
</style>
