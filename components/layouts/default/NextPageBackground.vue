<template lang="pug">
  component(:is="nextPageBackgroundComponent")
</template>

<script>
import indexBackground from '~/components/pages/index/BlackBackground'
import aboutBackground from '~/components/pages/about/Background'
import lovegraphBackground from '~/components/pages/lovegraph/Background'

import contactBackground from '~/components/pages/contact/Background'

export default {
  methods: {
  },
  components: {
    indexBackground,
    aboutBackground,
    lovegraphBackground,
    
    contactBackground,
  },
  computed: {
    nextPageBackgroundComponent() {
      return this.currentPage + 'Background';
    }
  },
  data() {
    return {
      currentPage: 'index',
    }
  },
  watch: {
    '$route' (to, from) {
      this.currentPage = to.name;
    }
  },
}
</script>
