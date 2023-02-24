import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Post } from "../models/Post.js"


class PostsService {
    async getAllPosts() {
        const res = await api.get('/api/posts')
        AppState.posts = res.data.posts.map(p => new Post(p))
        logger.log('[AppState.posts]', AppState.posts)
    }

    async createPost(postData) {
        const res = await api.post('/api/posts', postData)
        AppState.posts.push(new Post(res.data))
        logger.log('[new post]', AppState.posts)
    }
}

export const postsService = new PostsService()