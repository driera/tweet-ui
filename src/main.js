import Velocity from 'velocity-animate'
import Vue from 'vue'

const MAX_TWEET_LENGTH = 140;

let message = 'Compose New Tweet'

new Vue({
    el: '#twitterVue',
    data: {
        tweet: '',
        message: message,
        photos: [],
        modalShowing: false
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
            return this.photos.length > 0;
        }
    },
    methods: {
        triggerFileUpload() {
            this.$refs.photoUpload.click();
        },
        handlePhotoUpload(e) {
            let self = this;
            let files = e.target.files;

            for (var i = 0; i < files.length; i++) {
                let reader = new FileReader();

                reader.onloadend = function(evt) {
                    self.photos.push(evt.target.result)
                }

                reader.readAsDataURL(files[i]);
            }
        },
        removePhoto(index) {
            this.photos.splice(index, 1);
        },
        modalEnter(el, done) {
            Velocity(el, 'fadeIn', {
                duration: 300,
                complete: done,
                display: 'flex'
            })
        },
        modalLeave(el, done) {
            Velocity(el, 'fadeOut', {
                duration: 300,
                complete: done
            })
        },
        showModal() {
            this.modalShowing = true
        },
        hideModal() {
            this.modalShowing = false
            this.tweet = ''
        }
    }
})
