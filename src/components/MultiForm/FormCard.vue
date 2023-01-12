<template>
  <div>
    <div v-for="inputItem in currentForm.layout" :key="inputItem.id">
      <!-- {{ inputItem.type }} -->
      <div v-if="inputItem.type === 'text'">
        {{ inputItem.label }}
        <input type="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentForm: {
      type: Object,
    },
  },
};
</script>

<style>
</style>