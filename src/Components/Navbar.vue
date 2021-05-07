<template>
  <div>
    <b-navbar fixed="top" v-bind:class="{'scrolled-up': isScrollingUp, 'scrolled-down': isScrollingDown}" toggleable="lg" type="dark" variant="alert">
      <b-container>
        <b-navbar-brand href="#" class="text-decoration-none mr-5" v-on:click="changePage('home')">Yuto Takamoto</b-navbar-brand>
        <b-nav-item v-on:click="changePage('aboutme')">About Me</b-nav-item>
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
  hideY: number = 50;
  showY: number = 100;

  created() {
    window.addEventListener('scroll', this.handleScroll);
  }

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  changePage(page: string) {
    return;
  }

  handleScroll (event: Event) {
    console.log("Handling scroll event");

    let scrollTop = window.scrollY;
    if (scrollTop < this.lastScrollTop && scrollTop <= this.showY) {
      this.isScrollingUp = true;
      this.isScrollingDown = false;
    } else if (scrollTop >= this.hideY) {
      this.isScrollingUp = false;
      this.isScrollingDown = true;
    }
    this.lastScrollTop = scrollTop;

  }
};
</script>

<style scoped>
.scrolled-down {
  transform:translateY(-100%); transition: all 0.5s ease-in-out;
}
.scrolled-up {
  transform:translateY(0); transition: all 0.5s ease-in-out;
}
</style>
