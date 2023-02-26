<template>
  <div class="about text-center">
    <div class="row justify-content-center">
      <AdCard :ads="ads"/>
      <div class="col-md-10">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Edit Account</button>
      </div>
    </div>
  </div>
  <EditProfileOffCanvas />
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import AdCard from '../components/AdCard.vue';
import EditProfileOffCanvas from '../components/EditProfileOffCanvas.vue';
export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { EditProfileOffCanvas, AdCard }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
