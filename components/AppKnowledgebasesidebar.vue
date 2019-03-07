<template>
  <aside>
    <div class="sidearea">
    </div>
  
    <app-switch />
    <div class="sidearea callout">
      <p>Sharing is caring.</p>
    </div>
    <div class="sidearea callout">
      <h4>Help us grow the Tiny Food knowledgebase</h4>
      <p>Please <a href="mailto:ecocommunity@photonmail.com">send us links</a> to organic/natural farming, nutrition, food distribution or other resources you have found useful.</p>
    </div>
   <div class="sidearea callout">
      <img src="onebuilding_foodan1.gif">
   </div> 
    </app-switch>
  </aside>
</template>

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