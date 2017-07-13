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
        message: message,
        photo: null
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
        },
        photoHasBeenUploaded() {
            return this.photo !== null;
        }
    },
    methods: {
        triggerFileUpload() {
            this.$refs.photoUpload.click();
        },
        handlePhotoUpload(e) {
            let self = this;
            let reader = new FileReader();

            reader.onload = function(e) {
                self.photo = e.target.result;
            }

            reader.readAsDataURL(e.target.files[0]);
        },
        removePhoto() {
            this.photo = null;
        }
    }
})
