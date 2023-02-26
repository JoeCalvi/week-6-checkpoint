<template>
    <div class="PostForm">
        <form @submit.prevent="createPost()"> 
            <div class="mb-3">
                <label for="body" class="form-label">New Post:</label>
                <textarea v-model="editable.body" name="body" id="body" class="form-control" rows="3"></textarea>
            </div>
            <div class="mb-3">
                    <label for="imgUrl" class="form-label">Add Image</label>
                    <input type="text" class="form-control" id="imgUrl" name="imgUrl" v-model="editable.imgUrl" placeholder="must be URL">
            </div>
            <div class="text-end">
              <button class="btn btn-outline-info" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>


<script>
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import { ref } from 'vue'

export default {
    setup(){
        const editable = ref({})
        return {
            editable,
            async createPost() {
                try {
                    let postData = editable.value
                    await postsService.createPost(postData)
                    editable.value = {}
                } catch (error) {
                    Pop.error('[CREATING POST]', error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>