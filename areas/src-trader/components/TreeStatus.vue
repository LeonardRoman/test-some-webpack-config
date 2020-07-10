<template>
  <div>
    <i
      class="status-icon"
      @click="statusHelper"
      v-if="!sideBarViewToggle"
    >
      stat
    </i>
    <div v-else>
      Status данные
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeStatus",
  props: { sideBarViewToggle: { type: Boolean, required: true } },
  data() {
    return {
      statusActive: false
    };
  },
  methods: {
    statusHelper() {
      this.statusActive = true;
      this.$emit("sideBarViewToggleEmit");
    }
  }
};
</script>

<style>
.status-icon {
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