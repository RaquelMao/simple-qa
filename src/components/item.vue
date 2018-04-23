<template>
  <div class="item">
    <span class="num-tip">题目{{ itemNum }}</span>
    <li v-for="(item, index) in itemDetails[itemNum-1].answer" @click="choosed(index, item.answerId)" class="item-list">
      <span class="option-style" :class="{ 'has_choosed': choosedNum === index }">{{ chooseType(index) }}</span>
      <span class="option-detail">{{ item.answerContent }}</span>
    </li>
    <span class="next-button" @click="nextItem" v-if="itemNum < itemDetails.length"></span>
    <span class="submit-button" v-else @click="submitAnswer"></span>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
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
    computed: mapState([
      'itemNum', // 第几题
      'itemDetails', // 题目详情
    ]),
    methods: {
      ...mapActions([
        'addNum', 'initializeData',
      ]),
      nextItem() {
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          this.addNum(this.choosedId);
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
          this.addNum(this.choosedId);
        } else {
          alert('您还没有完成');
        }
      },
    },
    created() {
      if (this.fatherComponent === 'home') {
        this.initializeData();
      }
    },
  };
</script>

<style>
  .item {
  }
</style>
