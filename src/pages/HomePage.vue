<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-3">
      <div class="col-md-8">
        <form> 
            <div class="mb-3">
                <label for="newPost" class="form-label">New Post:</label>
                <textarea class="form-control" id="newPost" rows="3"></textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-outline-info" type="submit">Submit</button>
            </div>
        </form>
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-md-8">
        <div v-for="p in posts" class="row mb-3">
          <PostCard :post="p" />
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
