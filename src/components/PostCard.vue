<template>
    <div class="PostCard">
        <div class="col-md-12 border border-dark rounded">
            <div class="row align-items-center my-2">
                <div class="col-md-2 ps-4">
                    <router-link :to="{name: 'Profile', params: { profileId: post.creatorId} }">
                        <img :src="post.creator.picture" alt="" class="creator-picture rounded-circle selectable">
                    </router-link>
                </div>
                <div class="col-md-10">
                    <h5>{{ post.creator.name }}</h5>
                    <p>{{ post.updatedAt }}</p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8 border-top border-dark">
                        <div v-if="post.imgUrl">
                            <img :src="post.imgUrl" class="rounded img-fluid my-2" alt="">
                        </div>
                        <p class="mt-3">{{ post.body }}</p>
                        <div class="text-end">
                            {{ post.likeIds.length }}
                            <i class="mdi mdi-thumb-up-outline selectable" @click="likePost(`${post.id}`)"></i>
                                <button v-if="account.id == post.creatorId" class="btn btn-danger ms-3" @click="deletePost(`${post.id}`)"><i class="mdi mdi-trash-can"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { Post } from '../models/Post.js';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import { computed } from 'vue';


export default {
    props: {
        post: { type: Post}
    },
    setup(){
    return {
        async likePost(postId) {
            try {
                await postsService.likePost(postId)
            } catch (error) {
                Pop.error('[LIKING POST]', error)
            }
        },

        async deletePost(postId) {
            try { if (await Pop.confirm('Are you sure you want to delete this post?')) {
                await postsService.deletePost(postId)
            }
            } catch (error) {
                Pop.error('[DELETING POST]', error)
            }
        },
        posts: computed(() => AppState.posts),
        account: computed(() => AppState.account)
    }
    }
}
</script>


<style lang="scss" scoped>

.creator-picture{
  height: 6vw;
  width: 6vw;
  object-fit: cover;
  object-position: center;
}

</style>