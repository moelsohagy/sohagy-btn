<template>
  <button class="sohagy-btn" @click="alert">
    <span class="title">{{ title }}</span>
    <span class="subtitle">{{ subtitle }}</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "SohagyBtn",
  props: {
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
  },
  methods: {
    alert() {
      alert(`${this.title} - ${this.subtitle}`);
    },
  },
};
</script>

<style scoped >
.sohagy-btn {
  background-color: darkslategrey;
  color: lightcyan;
  border: 1px solid;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  font-size: 2rem;
  cursor: pointer;
}
  span {
    display: block;
  }
  .subtitle {
    border-top: 1px solid;
    font-size: 1rem;
  }
</style>
