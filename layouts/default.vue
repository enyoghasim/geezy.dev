<template>
  <custom-cursor />
  <Header />
  <slot />
  <Footer />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Lenis from "@studio-freight/lenis";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CustomCursor from "@/components/CustomCursor.vue";

const scroll = () => {
  const lenis = new Lenis({
    duration: 1.6,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

onMounted(() => {
  scroll();
});
</script>
