/**
 * Created by Raquel on 2018/4/20.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  itemNum: 1, // 第几题
  itemDetails: [{
    topicId: 1,
    answer: [{
      answerId: 1,
      answerContent: 'a',
      isCorrectAnswer: true,
    },{
      answerId: 2,
      answerContent: 'b',
      isCorrectAnswer: false,
    },{
      answerId: 3,
      answerContent: 'c',
      isCorrectAnswer: false,
    },{
      answerId: 4,
      answerContent: 'd',
      isCorrectAnswer: false,
    },]
  },{
    topicId: 2,
    answer: [{
      answerId: 1,
      answerContent: 'aa',
      isCorrectAnswer: true,
    },{
      answerId: 2,
      answerContent: 'bb',
      isCorrectAnswer: false,
    },{
      answerId: 3,
      answerContent: 'cc',
      isCorrectAnswer: false,
    },{
      answerId: 4,
      answerContent: 'dd',
      isCorrectAnswer: false,
    },]
  },{
    topicId: 3,
    answer: [{
      answerId: 1,
      answerContent: 'aaa',
      isCorrectAnswer: false,
    },{
      answerId: 2,
      answerContent: 'bbb',
      isCorrectAnswer: false,
    },{
      answerId: 3,
      answerContent: 'ccc',
      isCorrectAnswer: true,
    },{
      answerId: 4,
      answerContent: 'ddd',
      isCorrectAnswer: false,
    },]
  },],
  choosedAnswerId: [], //答案id
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
});
