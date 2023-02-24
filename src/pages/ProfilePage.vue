<template>
    <div class="ProfilePage">

    </div>
</template>


<script>
export default {
    setup(){
        const route = useRoute()

    async function getProfileById() {
      try {
        const profileId = route.params.profileId
        await profileService.getProfileById(profileId)
      } catch (error) {
        Pop.error('[GETTING PROFILE BY ID]', error)
      }
    }
    onMounted(() => {
      getProfileById()
    })
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>