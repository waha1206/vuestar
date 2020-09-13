<template>
  <div class="demo">
    <h2>{{ web }}</h2>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      web: "myoacg.com"
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  h2 {
    color: blue;
  }
}
</style>
