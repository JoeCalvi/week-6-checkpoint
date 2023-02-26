export class Profile {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.bio = data.bio
    this.class = data.class
    this.graduated = data.graduated
    this.picture = data.picture
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin


  }
}

export class Account extends Profile {
  constructor(data) {
    super(data)
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
  }
}
