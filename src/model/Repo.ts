export class Repo {
    name: string 
    description: string
     size: number
     forks: number
     programmingLanguage: string

    constructor(repo: any) {
        this.name = repo.name
        this.description = repo.description
        this.size = repo.size
        this.forks = repo.forks
        this.programmingLanguage = repo.language
    }
}