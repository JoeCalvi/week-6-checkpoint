<template>
    <div class="PostForm">
        <form> 
            <div class="mb-3">
                <label for="newPost" class="form-label">New Post:</label>
                <textarea class="form-control" id="newPost" rows="3"></textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-outline-info" type="submit">Submit</button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>