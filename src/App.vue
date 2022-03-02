<template>
  <div class='container'>
    <h1 class='container__title'>
      We're launching soon
    </h1>
    <count-down-component />
    <social-links-component :social-links='socialLinks' />
  </div>
</template>

<script>
import CountDownComponent from './components/CountDownComponent.vue'
import SocialLinksComponent from './components/SocialLinksComponent.vue'

export default {
  name: 'App',
  components: {
    CountDownComponent,
    SocialLinksComponent
  },
  data() {
    return {
        socialLinks: [
            {
                name: 'facebook',
                url: 'http://www.facebook.com'
            },
            {
                name: 'pinterest',
                url: 'http://www.pinterest.com'
            },
            {
                name: 'instagram',
                url: 'http://www.instagram.com'
            }
        ]
    };
  }
}
</script>

<style>
  @import './styles/styles.scss';
</style>
