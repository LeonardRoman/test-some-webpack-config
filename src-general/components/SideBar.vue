<template>
  <div
    class="side-bar"
    :class='{"side-bar-active": sideBarViewToggle}'
  >
    <i
      v-show="sideBarViewToggle"
      @click="closingSideBar"
    >
      close
    </i>
    <slot name="chat"></slot>
    <slot name="filter"></slot>
    <slot name="status"></slot>
  </div>

</template>

<script>
export default {
  name: "SideBar",
  props: { sideBarViewToggle: { type: Boolean, required: true } },
  data() {
    return {
      sideBarClose: true
    };
  },
  methods: {
    closingSideBar() {
      // this.sideBarViewToggle = false;
      this.sideBarClose = true;
      this.$emit("sideBarViewToggleEmit");
    }
  }
};
</script>

<style scope>
.side-bar {
  width: 41px;
  transition: width 0.5s;
}
.side-bar-active {
  width: 30vw;
  transition: width 0.5s;
}
</style>