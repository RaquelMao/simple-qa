<template>
  <div class="ending">
    {{ score }}分
    <span class="restart-button" @click="restart">重做</span>
  </div>
</template>

<script>
  export default {
    name: 'ending',
    data() {
      return {
        rightAnswers: [1, 2, 3],
        score: 0,
      };
    },
    computed: {
    },
    methods: {
      getScore() {
        this.$store.getters.choosedAnswerId.forEach((answer, index) => {
          if (answer === this.rightAnswers[index]) {
            this.score += 3;
          }
        });
      },
      restart() {
        this.$router.push({ path: '/' });
      },
    },
    created() {
      this.getScore();
    },
  };
</script>

<style>
  .ending {

  }
</style>
