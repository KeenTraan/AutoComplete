<template>
  <div class="auto-layout">
    <div>
      <Search
        @searchItem="searchItem"
        :options="getSelect"
        @select="selectItem"
        :placeholder="PLACEHOLDER"
        :keyword="keyword"
      />
      <DropdownOption
        @selectItem="selectItem"
        :options="filtersItem"
        v-if="ishiden"
      />
    </div>
  </div>
</template>

<script>
import DropdownOption from "@/components/Autocomplete/DropdownOption.vue";
import Search from "@/components/Autocomplete/Search.vue";
import { mapGetters } from "vuex";
import { PLACEHOLDER } from "@/common";
export default {
  name: "AutocompleteView",
  data() {
    return {
      ishiden: false,
      keyword: "",
      options: [],
      PLACEHOLDER: PLACEHOLDER.CITY,
      disabled: true,
    };
  },
  components: {
    DropdownOption,
    Search,
  },
  methods: {
    searchItem(keyword) {
      this.ishiden = true;
      this.keyword = keyword.trim();
      
    },
    selectItem(item) {
      this.$store.dispatch("selectCity", item);
      this.keyword = "";
    },
  },
  computed: {
    ...mapGetters(["getCity", "getSelect"]),
    filtersItem() {
      return this.getCity.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.keyword.toLowerCase()) &&
          this.keyword.length
        );
      });
    },
  },
  created() {
    this.$store.dispatch("fetchCity");
  },
};
</script>

<style lang="scss" scoped>
.auto-layout {
  display: flex;
}
</style>
