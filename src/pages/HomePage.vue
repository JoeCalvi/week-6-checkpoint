<template>
  <div class="container-fluid">
    <AdCard :ads="ads"/>
    <div class="row justify-content-center mt-3">
      <div class="col-md-8">
        <PostForm />
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-md-8">
        <div class="mb-3 text-center">
          <button class="btn btn-info me-2" @click="getPreviousPage()">Previous</button>
          <button class="btn btn-info" @click="getNextPage()">Next</button>
        </div>
        <div v-for="p in posts" class="row mb-3">
          <PostCard :post="p" />
        </div>
        <div class="mb-3 text-center">
          <button class="btn btn-info me-2" @click="getPreviousPage()">Previous</button>
          <button class="btn btn-info" @click="getNextPage()">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { adsService } from '../services/AdsService.js';
import AdCard from '../components/AdCard.vue';

export default {
    setup() {
        async function getAllPosts() {
            try {
                await postsService.getAllPosts();
            }
            catch (error) {
                Pop.error("[GETTING ALL POSTS]", error);
            }
        }
        async function getAds() {
            try {
                await adsService.getAds();
            }
            catch (error) {
                Pop.error("[GETTING ADS]");
            }
        }
        onMounted(() => {
            getAllPosts();
            getAds();
        });
        return {
            posts: computed(() => AppState.posts),
            ads: computed(() => AppState.ads),
            async getNextPage() {
                try {
                    await postsService.getNextPage();
                }
                catch (error) {
                    Pop.error("[CHANGING PAGE]", error);
                }
            },
            async getPreviousPage() {
                try {
                    await postsService.getPreviousPage();
                }
                catch (error) {
                    Pop.error("[CHANGING PAGE]", error);
                }
            },
        };
    },
    components: { AdCard }
}
</script>

<style scoped lang="scss">

.creator-picture{
  height: 6vw;
  width: 6vw;
  object-fit: cover;
  object-position: center;
}

</style>
