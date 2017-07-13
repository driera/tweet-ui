import Vue from 'vue'
// import App from './App.vue'
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const MAX_TWEET_LENGTH = 140;

let message = 'Compose New Tweet'

new Vue({
    el: '#twitterVue',
    data: {
        tweet: '',
        message: message
    },
    computed: {
        tweetIsOutOfRange() {
            return this.charactersRemaining == MAX_TWEET_LENGTH || this.charactersRemaining < 0;
        },

        charactersRemaining() {
            return MAX_TWEET_LENGTH - this.tweet.length;
        },

        underTwentyMark() {
            return this.charactersRemaining <= 20 && this.charactersRemaining > 10;
        },

        underTenMark() {
            return this.charactersRemaining <= 10;
        }
    }
})
