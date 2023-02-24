<template>
    <div class="ProfilePage">

    </div>
</template>


<script>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState.js'
import { profileService } from '../services/ProfileService';
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
            posts: computed(() => AppState.posts)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>