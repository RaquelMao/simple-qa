<template>
  <div class="home_container">
    <item father-component="home"></item>
  </div>
</template>

<script>
  import item from '../../components/item.vue';
  export default {
    name: 'home',
    components: { item },
  };
</script>
