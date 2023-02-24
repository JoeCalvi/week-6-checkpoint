<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">

  </div>
</template>

<script>
import { onMounted } from 'vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';

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

    return {}
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
