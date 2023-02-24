<template>
    <div class="PostCard">
        <div class="col-md-12 border border-dark rounded">
            <div class="row align-items-center my-2">
                <div class="col-md-2 ps-4">
                    <img :src="post.creator.picture" alt="" class="creator-picture rounded-circle">
                </div>
                <div class="col-md-10">
                    <h5>{{ post.creator.name }}</h5>
                    <p>{{ post.updatedAt }}</p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8 border-top border-dark">
                        <p class="mt-3">{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Post } from '../models/Post.js';

export default {
    props: {
        post: { type: Post}
    },
    setup(){
        return {}
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