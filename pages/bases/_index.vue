<template>
  <main class="capsule">
    <div class="saleimg">
      <app-mastheadtoo2 img="banner-ppl_knowledgebase" title="Tiny Food hyper-local food production, transportation and distribution Knowledgebase by SCD Hub" bkcolor="#fff"/>
    </div>
    <div class="contain">
      <transition-group name="kbitems" tag="section" class="kbcontent">
        <app-kboneitem
          v-for="(item, index) in mKbitems"
          key="item"
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppMastheadtoo2 from './../../components/AppMastheadtoo2.vue';
import AppKboneitem from './../../components/AppKboneitem.vue';

export default {
  components: {
    AppMastheadtoo2,
    AppKboneitem
  },
  computed: {
    mKbitems() {
      return this.$store.getters.kbitems.id; 
    }
  }
};
</script>
<style>
.saleimg .ppl-banner {
  height: 105%;
}
.kbcontent {
  /*no grid support*/
  float: right;
  width: 92%;
  /* grid */
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  padding: 0 !important;
}
</style>
