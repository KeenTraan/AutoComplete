<template>
    <div>
        <div v-for="form in firstForm" :key="form.id">
           <label>{{ form.label }}</label>
           <input type="text"/>
        </div>
    </div>
</template>

<script>
import { firstForm } from "@/components/Multiform/dynamicForm";
export default {
  data() {
    firstForm
  },
};
</script>

<style>
</style>