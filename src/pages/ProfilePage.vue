<template>
    <div v-if="profile" class="ProfilePage">
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-3 d-flex justify-content-center">
                    <img :src="profile.picture" alt="" class="creator-picture rounded-circle">
                </div>
                <div v-if="account.id == profile.id" class="col-md-8">
                    <PostForm />
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-3 d-flex justify-content-start">
                    <div>
                        <h5>{{ profile.name }}</h5>
                        <p v-if="profile.class">{{ profile.class }} <i v-if="profile.graduated" class="mdi mdi-school"></i></p>
                        <p>{{ profile.bio }}</p>
                        <span class="fs-3">
                            <i v-if="profile.github" class="mdi mdi-github"></i>
                            <i v-if="profile.linkedin" class="mdi mdi-linkedin"></i>
                        </span>
                    </div>
                </div>
                <div class="col-md-8">
                    <div v-for="p in posts" class="row mb-3">
                        <PostCard :post="p" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import { profileService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';

export default {
    setup(){
        const route = useRoute();
        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                await profileService.getProfileById(profileId);
                } catch (error) {
                Pop.error('[GETTING PROFILE BY ID]', error);
                }
            }
        
        async function getPostsByProfileId() {
            try {
                const profileId = route.params.profileId;
                await profileService.getPostsByQuery({ creatorId: profileId });
            } catch (error) {
                Pop.error('[GETTING POSTS BY ID]', error);
            }
        }

        onMounted(() => {
            getProfileById();
            getPostsByProfileId();
        })
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            account: computed(() => AppState.account)
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