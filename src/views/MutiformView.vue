<template>
  <div class="mutiform-layout">
    <Navbar />
    <MultiformComponent />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import MultiformComponent from "@/components/Multiform/MultiformComponent.vue";
export default {
components: {
    Navbar,
    MultiformComponent
}
}
</script>

<style scoped lang="scss">
.mutiform-layout {
    display: flex;
}
</style>>