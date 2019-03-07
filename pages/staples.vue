<template>
  <main class="capsule">
    <app-mastheadtoo img="banner-ppl_staple-foods2" title="Staple Foods" bkcolor="#1825d0"/>
    <div class="contain">
      <app-sidebar :pricerange.sync="highprice"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in wProducts"
          key=item0
          :item="item"
          :index="index"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import AppSidebar from './../components/AppSidebar.vue';
import AppMastheadtoo from './../components/AppMastheadtoo.vue';
import AppItem from './../components/AppItem.vue';

export default {
  components: {
    AppSidebar,
    AppMastheadtoo,
    AppItem
  },
  data() {
    return {
      highprice: 125,
      farmdirect: 'true',
    };
  },
  computed: {
    wProducts() {
      return this.$store.getters.staples.filter(el =>
        this.$store.state.sale
          ? el.price < this.highprice && el.sale
          : el.price < this.highprice
      );
    }
  }
};
</script>
                                                                                                                                                                                                                                                                                                                            