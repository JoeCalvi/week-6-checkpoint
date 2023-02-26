<template>
    <div class="SearchPage">
        <div class="container-fluid">
            <div class="row justify-content-center my-3">
                <div class="col-md-10">
                    <h2 class="text-center">
                        Users:
                    </h2>
                    <ProfileCard :peopleResults="people"/>
                </div>
            </div>
            <div class="row justify-content-center my-3">
                <div class="col-md-10 border-top border-dark pt-3">
                    <h2 class="text-center">
                        Posts:
                    </h2>
                    <div v-for="p in posts" class="row mb-3">
                        <PostCard :post="p" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
    setup(){
        return {
            posts: computed(() => AppState.posts),
            peopleResults: computed(() => AppState.peopleResults)
        }
    }
}
</script>


<style lang="scss" scoped>

.creator-picture{
  height: 15vw;
  width: 15vw;
  object-fit: cover;
  object-position: center;
}

</style>