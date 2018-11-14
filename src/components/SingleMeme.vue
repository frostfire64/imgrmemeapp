<template>
  <div class="col-lg-4 mt-5">
    <div class="card" style="width: 18rem;">
        <!-- <a :href="value.link"> -->
        <img class="card-img-top" :src="value.link" alt="Card image cap">
        <!-- </a> -->
        <div class="card-body">
          <h5 class="card-title">{{value.title}}</h5>
          <p class="card-text">
            Uploaded: {{date}}<br>
            Views: {{value.views}}
          </p>
          <a :href="'https://imgur.com/'+value.id" class="btn btn-primary">Go To Imgur</a>
        </div>
    </div>
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'viewerjs'

export default {
  props: ['value'],
  name: 'single-meme',
  data: function () {
    return {
      view: {}
    }
  },
  computed: {
    date: function () {
      let dateObject = new Date(this.value.datetime * 1000)
      return dateObject.toLocaleDateString() + ' ' + dateObject.toLocaleTimeString()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.view = new Viewer(this.$el.querySelector('.card-img-top'), {
        navbar: false,
        toolbar: false,
        movable: false
      })
    })
  }
}
</script>

<style>
.card {
  -webkit-box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 70px 0px rgba(0,0,0,0.75);
  border-radius: 0px !important;
}
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>
