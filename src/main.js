import Vue from 'vue'
// import App from './App.vue'
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

new Vue({
    el: '#twitterVue',
    data: {
        tweet: ''
    },
    computed: {
        tweetIsEmpty: function() {
            return this.tweet.length === 0;
        }
    }
})
