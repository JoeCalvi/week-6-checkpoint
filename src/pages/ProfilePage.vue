<template>
    <div v-if="profile" class="ProfilePage">
        <div class="container-fluid">
            <AdCard :ads="ads"/>
            <ProfileDetails :profile="profile"/>
                <div v-for="p in posts" class="row mb-3">
                    <div class="col-md-12">
                        <PostCard :post="p" />
                    </div>
                </div>
                <div class="mb-3 text-center">
                    <button class="btn btn-info me-2" @click="previousPageByProfileId()">Previous</button>
                    <button class="btn btn-info" @click="nextPageByProfileId()">Next</button>
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
import { Profile } from '../models/Account.js';
import ProfileDetails from '../components/ProfileDetails.vue';
import PostCard from '../components/PostCard.vue';
import AdCard from '../components/AdCard.vue';

export default {
    props: {
        profile: {
            type: Profile,
            required: true
        }
    },
    setup(props) {
        const route = useRoute();
        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                await profileService.getProfileById(profileId);
            }
            catch (error) {
                Pop.error("[GETTING PROFILE BY ID]", error);
            }
        }
        async function getPostsByProfileId() {
            try {
                const profileId = route.params.profileId;
                await profileService.getPostsByQuery({ creatorId: profileId });
            }
            catch (error) {
                Pop.error("[GETTING POSTS BY ID]", error);
            }
        }

        
        onMounted(() => {
            getProfileById();
            getPostsByProfileId();
        });
        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),
            account: computed(() => AppState.account),
            ads: computed(() => AppState.ads),

            async nextPageByProfileId() {
                try {
                    const profileId = route.params.profileId;
                    await profileService.nextPageByProfileId(profileId)
                } catch (error) {
                    Pop.error('No more pages', error)
                }
            },
            
            async previousPageByProfileId() {
                try {
                    const profileId = route.params.profileId;
                    await profileService.previousPageByProfileId(profileId)
                } catch (error) {
                    Pop.error('No more pages.', error)
                }
            }
        };
    },
    components: { ProfileDetails, PostCard, AdCard }
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