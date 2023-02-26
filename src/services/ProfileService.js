import { AppState } from "../AppState.js"
import { Profile } from "../models/Account.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ProfileService {

    async getProfileById(profileId) {
        const res = await api.get('/api/profiles/' + profileId)
        AppState.profile = new Profile(res.data)
        logger.log('[PROFILE]', AppState.profile)
    }

    async getPostsByQuery(query) {
        const res = await api.get('/api/posts/', { params: query })
        AppState.posts = res.data.posts.map(p => new Post(p))
        logger.log(AppState.posts)
    }

    async getProfilesByQuery(query) {
        const res = await api.get('/api/profiles', { params: query })
        AppState.peopleResults = res.data.map(r => new Profile(r))
        logger.log(AppState.peopleResults)
    }
}

export const profileService = new ProfileService()