<template>
  <aside>
    <app-switch v-if="!farmdirect" />
    <div class="sidearea callout">
      <p>Share the shopping!</p>
    </div>
    <div class="sidearea callout">
      <h4>Help grow Tiny Food!</h4>
      <p>Share TinyFood with someone or a group you order with.</p>
    </div>

 <button html="Start a hub" alt="Start a hub" text="Start a hub"></button>
    <div class="sidearea">
      <label for="distance">Sort by distance: <span>{{ distance }}</span> miles</label>
      <input 
        class="slider" 
        id="distance" 
        type="range"
        :value="distance"  
        :min="min" 
        :max="max" 
        step="0.1" 
        @input="$emit('update:distance', $event.target.value)"
      />
      <span class="min">{{ min }}</span>
      <span class="max">{{ max }}</span>
    </div>


   <div class="sidearea callout">
      <img src="onebuilding_foodan1.gif">
   </div> 
    </app-switch>
  </aside>
</template>

<script>
import AppSwitch from './AppSwitch.vue';

export default {
  props: {
    farmdirect: {
      type: Boolean,
      default: false
    },
    organic: {
      type: Boolean,
      default: true
    },
    distance: {
      type: [Number, String],
      default: 18.5
    }
  },
  data() {
    return {
      min: 0,
      max: 120
    };
  },
  components: {
    AppSwitch
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;
  h4 {
    padding-bottom: 10px;
  }
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

/*--input range--*/
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}
</style>