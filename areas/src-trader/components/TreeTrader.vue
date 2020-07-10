<template>
  <div class="tree">

    <div class="tree-header-container">
      <div class="tree-header-name">
        Наименование
      </div>

      <div
        class="tree-header-body"
        v-for="gtpParent in backend.gtps"
        :key="gtpParent.gtpId + gtpParent.gtpCode"
      >
        {{gtpParent.gtpCode}}
      </div>
    </div>

    <!--     <vuescroll :ops="settingsScrollBar">
      <div class="container-scroll">
        <div
          class="box"
          v-for="box in 500"
          :key="'box' + box"
        >
          {{box}}</div>
      </div>
    </vuescroll> -->
    <div class="tree-content-container">
      <vuescroll opt="settingsScrollBarHorintal">
        <!--         <div class="tree-content-name"></div> -->
        <div
          class="tree-content-body"
          v-for="gtpParent in backend.gtps"
          :key="'content' + gtpParent.gtpId + gtpParent.gtpCode"
        >
          <div
            class="tree-cell-content"
            v-for="(detaildedConsumtonPlanValue, detaildedConsumtonPlanKey) of gtpParent.detaildedConsumtonPlan"
            :key="gtpParent.gtpCode + detaildedConsumtonPlanKey"
          >
            {{detaildedConsumtonPlanValue}}
          </div>

        </div>
      </vuescroll>
    </div>
  </div>
</template>

<script>
import Vuescroll from "vuescroll";
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";
import TreeTraderParent from "./TreeTraderParent.vue";
export default {
  name: "TreeTrader",
  components: { TreeTraderParent, Vuescroll, HorizontalScroll },
  props: { backend: { type: Object, required: true } },
  data() {
    return {
      settingsScrollBarHorintal: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "number",
          detectResize: true
        },
        scrollPanel: {
          scrollingX: true,
          scrollingY: false,
          easing: "easeInQuad"
        },
        rail: {
          background: "rgb(93, 131, 165)",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: "2px",
          keepShow: false
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "rgb(192, 103, 92)",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0,
          size: "6px",
          disable: false
        }
      }
    };
  }
};
</script>

<style>
.tree {
  flex-basis: content;
  display: flex;
}
.tree-header-container {
  min-width: 360px;
  max-width: 20vw;
}
.tree-header-body {
  min-width: 0px;
}
.tree-content-container {
  min-width: 0px;
  max-width: 80vw;
}
.tree-content-body {
  display: flex;
  flex-direction: row;
}
.tree-cell-content {
  display: inline-block;
  /* float: left; */
  min-height: 40px;
  min-width: 60px;
}
</style>