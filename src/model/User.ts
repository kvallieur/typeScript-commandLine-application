import { Repo } from "./repo";

export class User {
    loginId: string
    fullName: string
    gitHubId: number
    location: string
    noOfRepos: number
    repos: Repo[] = []

    constructor(userResponse: any) {
        this.gitHubId = userResponse.id
        this.loginId = userResponse.login
        this.fullName = userResponse.name
        this.location = userResponse.location
        this.noOfRepos = userResponse.public_repos

    }

}