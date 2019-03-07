<template>
  <div class="kbitem">
    <img :src="`/${item.img}`" :alt="`Image of ${item.name}`" width="140" align=left>
         <p><BR></BR><b>{{ item.name }}</a></b></p>
         <p>{{ item.short }}
    </p>


    <button class="add" @click="visitKbitem">More</button>
  </div>
</template>

<script>
export default {
  props: {
    kboneitem: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  filters: {
    usdollar: function(value) {
      return `$${value}`;
    }

  },
  methods: {
    visitKbitem() {
      this.$store.commit('addKbitem', this.kbitem.id);
    }
  }
};
</script>

<style scoped>
.kboneitem {
  width: 100%;
  min-width: 305px;
  border-radius: 5px;
  padding: 20px;
  background: white;
  position: relative;
}

.kboneitem > img {
  padding: 10px;
}

.supermarketpill {
  background: rgb(232, 35, 25);
  color: white;
  font-family: 'Barlow', sans-serif;
  position: absolute;
  right: 30px;
  top: 60px;
  padding: 2px 10px 4px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  border-radius: 10px;
}

p {
  font-size: 18px;
}
</style>