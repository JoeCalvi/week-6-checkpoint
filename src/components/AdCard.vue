<template>
    <div class="AdCard">
        <marquee scrollamount="12">
            <div class="row mt-3">
                <div v-for="a in ads" class="col-md-6">
                    <img :src="a.banner" class="img-fluid" alt="">
                </div>
            </div>
        </marquee>
    </div>
</template>


<script>
import { Ad } from '../models/Ad.js';
import { AppState } from '../AppState.js';
import { computed } from 'vue'



export default {
    props: {
        ads: {
            type: Ad,
            required: true
        }
    },
    setup(){
        return {
            ads: computed(() => AppState.ads)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>