"use strict";
const questions = [
    {
        qAnswer: ['回答１ 赤', '回答2　青', '回答3　黄', '回答4　緑'],
        qText: '質問文１',
    },
    {
        qAnswer: ['回答１ 赤', '回答2　青', '回答3　黄', '回答4　緑'],
        qText: '質問文2',
    },
    {
        qAnswer: ['回答１ 赤', '回答2　青', '回答3　黄', '回答4　緑'],
        qText: '質問文3',
    },
];
const resultOutput = [
    {
        style: 'red',
        text: '赤',
    },
    {
        style: 'blue',
        text: '青',
    },
    {
        style: 'yellow',
        text: '黄',
    },
    {
        style: 'green',
        text: '緑',
    },
];
const returnAnsweList = questions[0].qAnswer.map(() => {
    return 0;
});
console.log(returnAnsweList);
const app = Vue.createApp({
    data() {
        return {
            startState: false,
            finishState: false,
            questionCount: 0,
            questions: questions,
            answerList: returnAnsweList,
            questionText: '',
            maxCount: questions.length,
            favoriteIndex: 0,
        };
    },
    methods: {
        start() {
            this.startState = true;
        },
        restart() {
            this.startState = false;
            this.finishState = false;
            this.questionCount = 0;
            this.questionText = '';
            this.answerList = this.answerList.map((e, i) => {
                return 0;
            });
        },
        cancel() {
            this.startState = false;
            this.finishState = false;
            this.restart();
        },
        answer(index) {
            this.questionCount++;
            this.answerList[index]++;
            if (this.questionCount === this.maxCount) {
                this.startState = false;
                this.finishState = true;
                this.questionCount = 0;
                this.showResult();
            }
        },
        showResult() {
            this.favoriteIndex = this.answerList.indexOf(Math.max(...this.answerList));
        },
    },
    computed: {
        watchTextCount() {
            if (this.questionCount <= this.maxCount) {
                console.log(this.questionCount);
                console.log(this.maxCount);
                return this.questions[this.questionCount].qText;
            }
        },
        watchAnswerCount() {
            return questions[this.questionCount].qAnswer;
        },
        uiVixible() {
            return this.startState === true || this.finishState === true;
        },
        favoriteColor() {
            return resultOutput[this.favoriteIndex].text;
        },
        favoriteColorStyle() {
            return resultOutput[this.favoriteIndex].style;
        },
    },
});
app.mount('#ct');
