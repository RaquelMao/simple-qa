<template>
  <div>
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'item',
  };
</script>
