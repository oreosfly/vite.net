<template>
  <div class="block-container">
    <detail-layout  
        :title="`${title}: ${blockHash}`"
        :list="list">
    </detail-layout >
  </div>
</template>

<script>
  import detailLayout from "~/components/detailLayout";

  export default {
    components: {
      detailLayout
    },
    validate ({ params }) {
      return params.blockHash;
    },
    asyncData({ params }) {
      return {
        blockHash: params.blockHash || "",
        list: [{
          name: "快照块高度",
          describe: "2830928023984014810481"
        }, {
          name: "快照块年龄",
          describe: "2830928023984014810481"
        }, {
          name: "打包账户数",
          describe: "283"
        }, {
          name: "快照块Hash",
          describe: "2830928023984014810481"
        }, {
          name: "打包节点",
          describe: "2830928023984014810481"
        }, {
          name: "锻造奖励",
          describe: "2830928023984014810481"
        }]
      };
    },
    data() {
      return {
        title: "快照块详情",
        blockHash: "",
        list: []
      };
    },
    head() {
      return {
        title: this.title
      };
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>