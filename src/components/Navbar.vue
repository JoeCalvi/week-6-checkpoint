<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <!-- TODO add home, profile, account -->
          <router-link v-if="account" :to="{ name: 'Account'}" class="btn text-success lighten-30 selectable text-uppercase">
            Account
          </router-link>
          <router-link :to="{ name: 'Home'}" class="btn text-success lighten-30 selectable text-uppercase">
            Home
          </router-link>
        </li>
      </ul>
      <form @submit.prevent="getProfilesByQuery(`${editable.value}`)">
        <div class="input-group pe-3">
          <input type="text" class="form-control" name="query" id="query" v-model="editable.query" placeholder="search..." aria-label="search">
              <button class="btn btn-outline-secondary" type="submit"><i class="mdi mdi-magnify"></i></button>
            </div>
          </form>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
import { AppState } from '../AppState.js';
import { computed, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { profileService } from '../services/ProfileService.js';
import { router } from '../router.js'

export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      account: computed(() => AppState.account),

      async getProfilesByQuery() {
        try {
          let query = editable.value
          await profileService.getProfilesByQuery(query)
          router.push({ name: 'Results'})
        } catch (error) {
          Pop.error('[GETTING PROFILES BY QUERY]', error)
        }
      }
    }
  },
  components: { Login },
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

</style>
