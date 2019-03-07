<template>
  <main class="capsule">
    <app-mastheadtoo img="banner-ppl-produce" title="Produce" bkcolor="#92ff1c"/>
    <div class="contain">
      <app-sidebar :highdistance.sync="highdistance"/>
      <transition-group name="items" tag="section" class="content">
        <app-item
          v-for="(item, index) in mProducts"
          key="produce"
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
      highdistance: 100,
      farmdirect: 'true'
    };
  },
  computed: {
    mProducts() {
      return this.$store.getters.produce.filter(el =>
        this.$store.state.distance
          ? el.distance < this.highdistance && el.distace
          : el.distance < this.highdistance
      );
    }
  }
};
</script>
