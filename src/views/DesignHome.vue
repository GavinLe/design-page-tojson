<template>
  <div class="home">
    <DesignPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import DesignPage from '@/components/DesignPage.vue'

export default {
  name: 'Home',
  components: {
    DesignPage
  }
}
</script>