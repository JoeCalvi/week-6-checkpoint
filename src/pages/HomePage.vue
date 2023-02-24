<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-3">
      <div class="col-md-8">
        <div v-for="p in posts" class="row mb-3">
          <PostCard :post="p" />
          <!-- <div class="col-md-12 border border-dark rounded">
            <div class="row align-items-center my-2">
              <div class="col-md-2">
                <img :src="p.creator.picture" alt="" class="creator-picture rounded-circle">
              </div>
              <div class="col-md-10">
                <h5>{{ p.creator.name }}</h5>
                <p>{{ p.updatedAt }}</p>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-8 border-top border-dark">
                  <p class="mt-3">{{ p.body }}</p>
                </div>
              </div>
            </div>
          </div> -->
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

export default {
  setup() {
    async function getAllPosts(){
      try {
        await postsService.getAllPosts()
      } catch (error) {
        Pop.error('[GETTING ALL POSTS]', error)
      }
    } 
    
    onMounted(() => getAllPosts())

    return {
      posts: computed(() => AppState.posts)
    }
  }
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
