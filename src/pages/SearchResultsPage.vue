<template>
    <div v-if="results" class="SearchPage">

        <ProfileCard :results="results"/>

    </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
    setup(){
        return {
            results: computed(() => AppState.results)
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