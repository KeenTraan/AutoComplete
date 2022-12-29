<template>    
     <div class="add-file">
       <h3>Drag and drop file</h3>
       <label for="input-file" class="input-add-file">Browser file</label>
       <input type="file" id="input-file" @change="handledata" multiple/>
    </div>
</template>

<script>
export default {
  name: "add-file",
  methods: {
    handledata(e) {
      const data = e.target.files[0];
      this.$emit("addFile", data)
      console.log(data)
    }
  },
};
</script>

<style scoped lang="scss">
.add-file {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  .input-add-file {
    text-decoration: underline gray;
    cursor: pointer;
  }
  #input-file {
    display: none;
  }
}
</style>
