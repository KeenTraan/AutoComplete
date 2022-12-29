<template>
  <div>
    <div v-for="file in fileList" :key="file.id">
        {{ file.name }}
    </div>
  </div>
</template>

<script>
export default {
    props: {
      fileList: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>