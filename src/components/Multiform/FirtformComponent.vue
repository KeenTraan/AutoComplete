<template>
  <div>
    <div v-for="(item, index) in dynamicForm" :key="index">
      <span>{{ index + 1 }}</span>
    </div>
    <!-- <p class="title">Đơn Ứng Tuyển</p>
    <StepperComponent :step="step"/>
    <div>
      <form class="first-form">
        <label for="name">Họ và tên</label>
        <input type="text" id="name" class="input" />
        <label for="date">Ngày Sinh</label>
        <input type="date" id="date" />
        <label>Thành Phố</label>
        <select class="input">
          <option value="">Hà Nội</option>
          <option value="">Thanh Hóa</option>
          <option value="">Nghệ An</option>
          <option value="">Ninh Bình</option>
          <option value="">Hải Phòng</option>
        </select>
        <label>Vị trí làm việc</label>
        <p class="text">có thể chọn nhiều vị trí mà bạn muốn làm</p>
        <CityComponent />
        <label for="description-input">Mô tả về bản thân</label>
        <textarea id="description-input"></textarea>
        <textarea id="description-input"></textarea>
        <label>Ảnh cá nhân</label>
        <DropzoneComponent :limitedFile="3" :maxSize="10000000" />
      </form>
    </div>
    <button class="btn-next">Tiếp</button> -->
  </div>
</template>

<script>
// import StepperComponent from "@/components/Multiform/components/StepperComponent.vue";
// import CityComponent from "@/components/CityComponent.vue";
// import DropzoneComponent from "@/components/Dropzone/DropzoneComponent.vue";
export default {
  name: "FirstformComponent",
  components: {

  },
  props:{ 
    dynamicForm: {
      type: Array,
      required: true,
    },
    step: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/components/Multiform/style/Firstfrom.scss"
</style>
