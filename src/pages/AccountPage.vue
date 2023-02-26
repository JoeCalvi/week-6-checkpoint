<template>
  <div class="about text-center">
    <div class="row justify-content-center m-0">
      <AdCard :ads="ads"/>
      <div class="col-md-10">
        <h1>Welcome {{ account.name }}</h1>
        <router-link :to="{name: 'Profile', params: { profileId: account.id} }">
          <img class="rounded selectable" :src="account.picture" alt="" />
        </router-link>
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
