<template>
  <div
    class="tree"
    @resize="test"
  >

    <div
      class="tree-header-container"
      ref="treeHeaderContainer"
    >
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

    <div
      class="tree-content-container"
      ref="treeContentContainer"
    >
      <vuescroll :ops="settingsScrollBarHorintal">
        <div
          class="tree-cell-content"
          v-for="i of 24"
          :key="'detaildedConsumtonPlanheader' + i"
        >
          {{ 10 >= i ? ("0" + (i - 1)) : i - 1 }}
        </div>
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
          sizeStrategy: "percent",
          detectResize: true
        },
        scrollPanel: {
          scrollingX: true,
          scrollingY: false,
          easing: "easeInQuad"
          // maxHeigth: "800"
        },
        rail: {
          background: "#5d83a5",
          opacity: 0,
          size: "6px",
          specifyBorderRadius: false,
          gutterOfEnds: "2px",
          gutterOfSide: "2px",
          keepShow: true
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#006cbe",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0.3,
          size: "6px",
          disable: false
        },
        scrollButton: {
          enable: false,
          background: "rgb(3, 185, 118)",
          opacity: 1,
          step: 180,
          mousedownStep: 30
        }
      }
    };
  },
  methods: {
    test() {
      console.log("resize");
    },
    // Пересчитать и установить ширину колонки данных для вычисления скроллбара
    calcWidthTreeContent() {
      let sideBar = this.$parent.$el.getElementsByClassName("side-bar")[0];
      this.$refs.treeContentContainer.style.maxWidth =
        document.body.clientWidth -
        sideBar.clientWidth -
        this.$refs.treeHeaderContainer.clientWidth +
        "px";
    }
  },
  mounted() {
    this.calcWidthTreeContent();
  },
  updated() {
    // После анимации выезда боковой панели
    setTimeout(() => {
      this.calcWidthTreeContent();
    }, 1000);
  }
};
</script>

<style lang="scss">
.tree {
  flex-basis: content;
  display: flex;
}
.tree-header-container {
  min-width: 360px;
  max-width: 20vw;
}
.tree-header-name {
  min-height: 40px;
  min-width: 60px;
}

.tree-header-body {
  min-height: 40px;
  min-width: 60px;
}
.tree-content-container {
  min-width: 0px;
  /* max-width: 70vw; */
  overflow-x: auto;
  overflow-y: hidden;
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