<template>
    <div class="container__links">
        <ul>
          <li
            v-for="social in socialLinks"
            :key="`key_${social.name}`"
          >
            <a
              :href="social.url"
              :class="`links__${social.name}`"
            >
                {{ social.name }}
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'SocialLinksComponent',
  props: {
    socialLinks: {
        type: Object,
        required: true,
    }
  }
}
</script>