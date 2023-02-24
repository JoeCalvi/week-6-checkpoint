import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class PostsService {
    async getAllPosts() {
        const res = await api.get('/api/posts')
        logger.log('[GETTING ALL POSTS]', res.data)
    }
}

export const postsService = new PostsService()