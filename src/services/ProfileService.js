import { AppState } from "../AppState.js"
import { Profile } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ProfileService {

    async getProfileById(profileId) {
        const res = await api.get('api/profiles/' + profileId)
        AppState.profile = new Profile(res.data)
        logger.log('[PROFILE]', AppState.profile)
    }
}

export const profileService = new ProfileService()