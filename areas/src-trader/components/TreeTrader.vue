<template>
  <div class="tree">
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
      <vuescroll
        ref="vuescroll"
        :ops="settingsScrollBarHorintal"
      >
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
import TreeTraderParent from "./TreeTraderParent.vue";
export default {
  name: "TreeTrader",
  components: { TreeTraderParent, Vuescroll },
  props: {
    backend: { type: Object, required: true },
    sideBarViewToggle: { type: Boolean }
  },
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
        }
      },
      settingsScrollVertiacal: {
        vuescroll: {
          mode: "native",
          sizeStrategy: "number",
          detectResize: true
        },
        scrollPanel: {
          scrollingX: false,
          scrollingY: true,
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
        }
      }
    };
  },
  methods: {
    // Пересчитать и установить ширину колонки данных для вычисления скроллбара
    calcWidthTreeContent() {
      const sideBar = this.$parent.$el.getElementsByClassName("side-bar")[0];
      /*       console.log(
        "Ширина колонки контента в дереве",
        this.$refs.treeContentContainer.clientWidth
      ); */
      this.$refs.treeContentContainer.style.width =
        document.body.clientWidth -
        sideBar.clientWidth -
        this.$refs.treeHeaderContainer.clientWidth +
        "px";
      this.$refs.vuescroll.refresh();
      console.log(
        "Ширина сайтбара: ",
        sideBar.clientWidth,
        "Ширина колонки контента в дереве",
        this.$refs.treeContentContainer.clientWidth,
        "Ширина колонки названий в дереве",
        this.$refs.treeHeaderContainer.clientWidth
      );
    }
  },
  mounted() {
    console.log("hook mounted");
    this.calcWidthTreeContent();
  },
  beforeUpdate() {
    console.log("hook before updated");
  },
  updated() {
    console.log("hook updated");
  },
  watch: {
    sideBarViewToggle() {
      console.log("sideBarViewToggle", this.sideBarViewToggle);
      setTimeout(() => {
        this.calcWidthTreeContent();
      }, 1000);
    }
  }
};
</script>

<style lang="scss">
.tree {
  flex-basis: content;
  display: flex;
  overflow-y: auto;
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
  /*  max-width: 70vw; */
  overflow: hidden;
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