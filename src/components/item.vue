<template>
  <div class="item">
    <span class="num-tip">题目{{ itemNum }}</span>
    <div class="item-panel">
      <li v-for="(item, index) in itemDetails[itemNum-1].answer" @click="choosed(index, item.answerId)" class="item-list">
        <span class="option-style" :class="{ 'has-choosed': choosedNum === index }">{{ chooseType(index) }}</span>
        <span class="option-detail">{{ item.answerContent }}</span>
      </li>
      <span class="next-button" @click="nextItem" v-if="itemNum < itemDetails.length">下一题</span>
      <span class="submit-button" v-else @click="submitAnswer">完成提交</span>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-alert */
  export default {
    name: 'Item',
    data() {
      return {
        choosedNum: null, // 选中答案索引
        choosedId: null, // 选中答案id
      };
    },
    props: ['fatherComponent'],
    computed: {
      itemNum() {
        return this.$store.getters.itemNum;
      },
      itemDetails() {
        return this.$store.getters.itemDetails;
      },
    },
    methods: {
      nextItem() {
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          this.$store.dispatch('AddNum', this.choosedId);
        } else {
          alert('您还没有选择答案');
        }
      },
      /* eslint-disable-next-line */
      chooseType: type => {
        switch (type) {
          case 0: return 'A';
          case 1: return 'B';
          case 2: return 'C';
          case 3: return 'D';
          default: return null;
        }
      },
      choosed(type, id) {
        this.choosedNum = type;
        this.choosedId = id;
      },
      submitAnswer() {
        if (this.choosedNum !== null) {
          this.$store.dispatch('AddNum', this.choosedId);
          this.$router.push({ path: '/ending' });
        } else {
          alert('您还没有完成');
        }
        console.log(this.$store.getters.choosedAnswerId);
      },
    },
    created() {
      if (this.fatherComponent === 'home') {
        this.$store.dispatch('InitializeData');
      }
    },
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .item {
    .num-tip {
      position: absolute;
      left: 0.48rem;
      font-size: 2.5rem;
      height: 2.7rem;
      width: 6.5rem;
      font-family: '黑体';
      font-weight: 600;
      color: $primary-color;
    }
    .item-panel {
      padding-top: 4.4rem;
    }
    .item-list {
      width: 10rem;
      span {
        display: inline-block;
        font-size: 2.6rem;
        color: #fff;
        vertical-align: middle;
      }
      .option-detail,
      .option-style {
        font-family: 'Arial';
        font-size: 1.5rem;
        height: 1.7rem;
        width: 2.5rem;
        color: #a57c50;
      }
      .has-choosed {
        background-color: #ffd400;
        color: #575757;
        border-color: #ffd400;
      }
    }
  }
</style>
