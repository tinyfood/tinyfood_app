<template>

  <div class="item">
{{ /*    <! img :src="`/${item.img}`" :alt="`Image of ${item.name}`" width="140" align=left> */ }}
         
         <BR></BR>
         <b>{{ item.name }}</a></b><BR></BR>
         {{ item.text }}
  </div>
</template>

<script>
export default {
  props: {
    item: {
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

  }
};
</script>

<style scoped>
.item {
  width: 100%;
  min-width: 305px;
  border-radius: 5px;
  padding: 20px;
  background: white;
  position: relative;
}
.Startahubpill, .equatorialpill {
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