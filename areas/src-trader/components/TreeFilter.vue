<template>
  <div>
    <i
      class="filter-icon"
      @click="filterHelper"
      v-if="!sideBarViewToggle"
    >
      filt
    </i>
    <div v-else>
      Filter данные
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeFilter",
  props: { sideBarViewToggle: { type: Boolean, required: true } },
  data() {
    return {
      filterActive: false
    };
  },
  methods: {
    filterHelper() {
      this.filterActive = true;
      this.$emit("sideBarViewToggleEmit");
    }
  }
};
</script>

<style>
.filter-icon {
  content: "\e901";
  cursor: pointer;
  margin: 35px 0 0 0;
  text-align: center;
  font-size: 25px;
  vertical-align: middle;
  line-height: 0.5em;
  color: #006cbe;
}
</style>