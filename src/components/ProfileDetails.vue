<template>
    <div class="ProfileDetails">
        <div class="row my-3">
                <div class="col-3 d-flex justify-content-center">
                    <div>
                    <img :src="profile.picture" alt="" class="creator-picture rounded-circle">
                        <h5>{{ profile.name }}</h5>
                        <p v-if="profile.class">{{ profile.class }} </p> <i v-if="profile.graduated == true" class="mdi mdi-school"></i>
                        <p>{{ profile.bio }}</p>
                        <span class="fs-3">
                            <a :href="profile.github" target="_blank">
                                <i v-if="profile.github" class="mdi mdi-github"></i>
                            </a>
                            <a :href="profile.linkedin" target="_blank">
                                <i v-if="profile.linkedin" class="mdi mdi-linkedin"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div class="col-md-8 d-flex align-items-center">
                    <div class="border border-dark rounded">
                        <img :src="profile.coverImg" class="img-fluid cover-img" alt="">
                    </div>
                </div>
            </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Profile } from '../models/Account.js';

export default {
    props: {
        profile: {
            type: Profile,
            required: true
        }
    },
    setup() {
        return {
            profile: computed(() => AppState.profile),
            post: computed(() => AppState.posts)
        };
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

.cover-img{
    height: 100vh;
    width: 100%;
    object-position: center;
    object-fit: cover;
}

</style>