<template>
  <div class="col-4 mt-5">
    <div class="card" style="width: 18rem;">
        <a :href="value.link">
          <img class="card-img-top" :src="value.link" alt="Card image cap">
        </a>
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
export default {
  props: ['value'],
  name: 'single-meme',
  data: function () {
    return {}
  },
  computed: {
    date: function () {
      let dateObject = new Date(this.value.datetime * 1000)
      return dateObject.toLocaleDateString() + ' ' + dateObject.toLocaleTimeString()
    }
  }
}
</script>
