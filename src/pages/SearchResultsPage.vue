<template>
    <div class="SearchPage">

            <ProfileCard :peopleResults="people"/>
        
        <div v-for="p in posts" class="row mb-3">
          <PostCard :post="p" />
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