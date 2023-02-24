import { Profile } from "./Account.js"


export class Post {
    constructor(data) {
        this.id = data.id
        this.creator = new Profile(data.creator)
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt).toLocaleTimeString('en-US')
        this.updatedAt = new Date(data.updatedAt).toLocaleTimeString('en-US')
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.likes = data.likes
        this.likeIds = data.likeIds
    }
}