<template>
  <div>
    <StepProgress :stepProgress="stepProgress"/>
  </div>
</template>

<script>
import StepProgress from './StepProgress.vue';
import {stepProgress} from './form'
export default {
    data() {
        return {
            stepProgress
        }
    },
    components: {
        StepProgress
    },
}
</script>

<style>

</style>