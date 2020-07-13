<template>
  <main class="grid-container">
    <side-bar
      class="side-bar"
      :sideBarViewToggle="sideBarViewToggle"
      @sideBarViewToggleEmit="testSideBar"
    >
      <template v-slot:filter>
        <tree-filter
          @sideBarViewToggleEmit="testFilter"
          :sideBarViewToggle="sideBarViewToggle"
        />
      </template>
      <template v-slot:status>
        <tree-status
          @sideBarViewToggleEmit="testStatus"
          :sideBarViewToggle="sideBarViewToggle"
        />
      </template>
    </side-bar>
    <tree-trader
      class="tree"
      :backend="backend"
    >
    </tree-trader>
  </main>
</template>

<script>
import SideBar from "../../../src-general/components/SideBar.vue";
import TreeTrader from "./TreeTraderMy.vue";
import TreeFilter from "./TreeFilter.vue";
import TreeStatus from "./TreeStatus.vue";

export default {
  name: "Trader",
  components: { TreeTrader, TreeStatus, SideBar, TreeFilter },
  props: { backend: { type: Object } },
  data() {
    return {
      sideBarViewToggle: false
    };
  },
  methods: {
    testFilter() {
      console.log("эмит из фильтра");
      this.sideBarViewToggle = !this.sideBarViewToggle;
    },
    testStatus() {
      console.log("эмит из статуса");
      this.sideBarViewToggle = !this.sideBarViewToggle;
    },
    testSideBar() {
      console.log("эмит из сайтбара");
      this.sideBarViewToggle = !this.sideBarViewToggle;
    }
  }
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "SideBar Content" "SideBar Content" "SideBar Content";
}

.side-bar {
  grid-area: SideBar;
}

.tree {
  grid-area: Content;
}
</style>