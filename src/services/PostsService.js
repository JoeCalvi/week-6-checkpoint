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

    async getNextPage() {
        if (AppState.currentPage < AppState.totalPages) {
            AppState.currentPage++
        }
        const res = await api.get(`/api/posts?page=${AppState.currentPage}`)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.totalPages = res.data.totalPages
        AppState.nextPage = res.data.nextPage
        AppState.previousPage = res.data.previousPage
        logger.log('[current]', AppState.currentPage, '[total]', AppState.totalPages)
    }

    async getPreviousPage() {
        if (AppState.currentPage > 1) {
            AppState.currentPage--
        }
        const res = await api.get(`/api/posts?page=${AppState.currentPage}`)
        AppState.posts = res.data.posts.map(p => new Post(p))
        AppState.totalPages = res.data.totalPages
        AppState.nextPage = res.data.nextPage
        AppState.previousPage = res.data.previousPage
        logger.log(res.data)
    }
}

export const postsService = new PostsService()