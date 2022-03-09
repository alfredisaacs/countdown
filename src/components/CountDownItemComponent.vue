<template>
  <li class="clock__item">
    <div class="separator"></div>
    <div class="clock__mask">
        <div class="clock__mask-top">
          <span class="clock__text">{{ future }}</span>
        </div>
        <div class="clock__mask-bottom">
          <span class="clock__text">{{ future }}</span>
        </div>
        <div class="clock__mask-top" :class="(animate) ? 'change' : ''">
          <span class="clock__text">{{ present }}</span>
        </div>
        <div class="clock__mask-bottom">
          <span class="clock__text">{{ present }}</span>
        </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "CountDownItemComponent",
  props: {
    future: {
      type: String,
      required: true,
    },
    present: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      animate: false,
    };
  },
  watch: {
    present() {
      this.animate = true;
      this.animateItem();
    },
  },
  methods: {
    animateItem() {
      setTimeout(() => {
        this.animate = false;
      }, 250);
    },
  },
};
</script>