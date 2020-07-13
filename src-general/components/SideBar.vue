<template>
  <div
    ref="sideBar"
    class="side-bar"
    :class='{"side-bar-active": sideBarViewToggle}'
  >
    <i
      class="button-close"
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
  min-width: 41px;
  transition: width 0.5s;
}
.side-bar-active {
  min-width: 300px;
  transition: min-width 0.5s;
}
.button-close {
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