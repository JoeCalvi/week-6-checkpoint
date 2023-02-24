
export class Post {
    constructor(data) {
        this.id = data.id
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.likes = data.likes
        this.likeIds = data.likeIds
    }
}