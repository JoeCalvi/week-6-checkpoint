<template>
    <div class="EditProfileOffcanvas">

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Edit Profile Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <form @submit.prevent="editProfile()">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" name="name" v-model="editable.name" placeholder="">
                </div>
                <div class="mb-3">
                    <label for="picture" class="form-label">Profile Picture</label>
                    <input type="text" class="form-control" id="picture" name="picture" v-model="editable.picture" placeholder="must be URL">
                </div>
                <div class="mb-3">
                    <label for="coverImg" class="form-label">Cover Image</label>
                    <input type="text" class="form-control" id="coverImg" name="coverImg" v-model="editable.coverImg" placeholder="must be URL">
                </div>
                <div class="mb-3">
                    <label for="github" class="form-label">Github</label>
                    <input type="text" class="form-control" id="github" v-model="editable.github" placeholder="">
                </div>
                <div class="mb-3">
                    <label for="linkedin" class="form-label">LinkedIn</label>
                    <input type="text" class="form-control" id="linkedin" name="linkedin" v-model="editable.linkedin" placeholder="">
                </div>
                <div class="mb-3">
                    <label for="Bio" class="form-label">Bio</label>
                    <textarea class="form-control" id="bio" name="bio" v-model="editable.bio" rows="3"></textarea>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="editable.graduated" id="graduated" name="graduated">
                    <label class="form-check-label" for="flexCheckDefault">
                        Graduated?
                    </label>
                </div>
                <button class="btn btn-info" type="submit" data-bs-dismiss="offcanvas">Save</button>
            </form>
            </div>
    </div>

    </div>
</template>


<script>
import { ref, computed, watchEffect } from 'vue';
import { AppState } from '../AppState.js';
import { Profile } from '../models/Account.js';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';
export default {
    props: {
        profile: { type: Profile }
    },
    setup(props){
        const editable = ref({})

        watchEffect(() => {
            if(AppState.account.id) {
                editable.value = {...AppState.account}
            }
        })
        return {
            editable,
            account: computed(() => AppState.account),
            async editProfile() {
                try {
                    const formData = editable.value
                    await accountService.editProfile(formData)
                } catch (error) {
                    Pop.error('[EDITING ACCOUNT]')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>