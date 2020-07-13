<template>
  <div
    class="tree"
    ref="tree"
  >
    <div
      ref="treeHeaderContainer"
      class="tree-header-container"
    ></div>
    <div
      ref="treeContentContainer"
      class="tree-content-container"
    ></div>

    <!-- Наименование ГТП -->
    <div
      ref="treeHeaderName"
      class="tree-header-name"
    >
      Наименование
    </div>
    <div
      class="tree-content-name"
      ref="treeContentName"
    >
      <div
        class="tree-content-cell"
        v-for="i of 24"
        :key="'detaildedConsumtonPlanheader' + i"
      >
        {{ i >= 11 ? i - 1  : ("0" + (i - 1))}}
      </div>
    </div>
    <!-- Данные ГТП -->
    <div
      ref="treeContent"
      class="tree-content-body"
      v-for="gtpParent in backend.gtps"
      :key="'content' + gtpParent.gtpId + gtpParent.gtpCode"
    >
      <div
        ref="treeHeaderBody"
        class="tree-header-body"
      >
        {{gtpParent.gtpCode}}
      </div>
      <div
        ref="treeContentCell"
        class="tree-content-cell"
        v-for="(detaildedConsumtonPlanValue, detaildedConsumtonPlanKey) of gtpParent.detaildedConsumtonPlan"
        :key="gtpParent.gtpCode + detaildedConsumtonPlanKey"
      >
        {{detaildedConsumtonPlanValue}}
      </div>
    </div>
  </div>
</template>

<script>
import TreeTraderParent from "./TreeTraderParent.vue";
import TreeTraderVue from "./TreeTraderChild.vue";
export default {
  name: "TreeTraderMy",
  components: { TreeTraderParent },
  props: { backend: { type: Object, required: true } },
  data() {
    return {};
  },
  methods: {
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
    /*     console.log(this.$refs.treeContentName);
    console.log(this.$refs.treeContent);
    console.log(this.$refs.tree); */
    let sideBar = this.$parent.$el.getElementsByClassName("side-bar")[0];

    // Контейнер для наименования gtp
    let treeHeaderContainer = this.$refs.treeHeaderContainer;
    // treeHeaderContainer.className = "tree-header-container";
    this.$refs.tree.appendChild(treeHeaderContainer);

    // Контейнер для данных gtp
    let treeContentContainer = this.$refs.treeContentContainer;
    // treeContentContainer.className = "tree-content-container";
    /*     treeContentContainer.style.maxWidth =
      document.body.clientWidth -
      sideBar.clientWidth -
      treeHeaderContainer.clientWidth +
      "px"; */
    this.calcWidthTreeContent();
    this.$refs.tree.appendChild(treeContentContainer);

    // Заполняем контейнер наименованиями
    treeHeaderContainer.appendChild(this.$refs.treeHeaderName);
    this.$refs.treeHeaderBody.forEach(e => {
      treeHeaderContainer.appendChild(e);
    });

    // Заполняем контейнер данными
    treeContentContainer.appendChild(this.$refs.treeContentName);
    this.$refs.treeContent.forEach(e => {
      treeContentContainer.appendChild(e);
    });

    console.log("Ширина body", document.body.clientWidth);
    console.log("Ширина side-bar", sideBar.clientWidth);
    console.log(
      "Ширина колонки наименования гтп",
      treeHeaderContainer.clientWidth
    );
    console.log("Ширина колонки данных гтп", treeContentContainer.clientWidth);
    console.log(treeContentContainer);
  },
  updated() {
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
  font-weight: bold;
}

.tree-header-body {
  min-height: 40px;
  min-width: 60px;
}
.tree-content-container {
  overflow-x: auto;
}
.tree-content-body {
  display: flex;
  flex-direction: row;
}
.tree-content-name {
  display: flex;
  flex-direction: row;
  font-weight: bold;
}
.tree-content-cell {
  min-height: 40px;
  min-width: 60px;
}
</style>