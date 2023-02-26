<template>
  <div class="about text-center">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>
      </div>
    </div>
  </div>
  <EditProfileOffCanvas />
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import EditProfileOffCanvas from '../components/EditProfileOffCanvas.vue';
export default {
    setup() {
        return {
            account: computed(() => AppState.account)
        };
    },
    components: { EditProfileOffCanvas }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
