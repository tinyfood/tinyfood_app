<template>
  <div class="mastheadtoo2" :style="`background:${bkcolor}`">
   <img class="ppl-banner" :src="`/${img}.png`" alt="`/${title}` not for profit foundation driven network quality food access network">
  </div>
</template>

<script>
export default {
  props: {
    bkcolor: {
      type: String,
      default: 'white'
    },
    title: {
      type: String,
      default: 'Tiny Food'
    },
    img: {
      type: String,
      default: 'banner-ppl'
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  position: relative;
  z-index: 100;
  font-size: 60px;
  padding: 8px 80px;
}

#titletext {
  font-size: 42px;
}

.bk {
  position: absolute;
  top: 0;
  left: 0;
}

.ppl-banner {
  z-index: 10;
  height: 355px;
}

.mastheadtoo2 {
  background-color: #fff;
  height: 355px;
  color: white;
}
</style>