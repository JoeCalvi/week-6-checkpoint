<template>
    <div class="ProfileCard">
        <div class="row justify-content-center my-3">
            <div class="col-md-3" v-for="r in results">
                <div v-if="results">
                    <div  class="card mb-2">
                        <div class="card-body text-center">
                                <router-link :to="{name: 'Profile', params: { profileId: r._id}}">
                                    <img :src="r.picture" class="img-fluid creator-picture rounded-circle selectable" alt="">
                                </router-link>
                                <div class="my-2">
                                    <h5>{{ r.name }}</h5>
                                    <p>{{ r.bio }}</p>
                                </div>
                            </div>
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