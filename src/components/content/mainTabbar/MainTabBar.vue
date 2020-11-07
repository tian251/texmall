<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img src="~assets/img/tabbar/shouye.svg" slot="item-icon" alt srcset />
      <img
        src="~assets/img/tabbar/shouye1.svg"
        slot="item-icon-active"
        alt
        srcset
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/fen.svg" slot="item-icon" alt srcset />
      <img
        src="~assets/img/tabbar/fen1.svg"
        slot="item-icon-active"
        alt
        srcset
      />

      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/img/tabbar/gou.svg" slot="item-icon" alt srcset />
      <img
        src="~assets/img/tabbar/gou1.svg"
        slot="item-icon-active"
        alt
        srcset
      />

      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/me.svg" slot="item-icon" alt srcset />
      <img
        src="~assets/img/tabbar/me1.svg"
        slot="item-icon-active"
        alt
        srcset
      />

      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue';
import tabBarItem from 'components/common/tabbar/tabBarItem.vue';

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    tabBarItem,
  },
};
</script>

<style>
</style>