<template>
  <div class="hello-vue">
    <h1>Hello Vue!</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data() {},
  props: {
    message: {
      type: String,
      default: "Default message",
    },
  },
};
</script>
