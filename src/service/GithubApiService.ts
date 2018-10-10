import request from 'request';
import { User } from "../model/User";
import { Repo } from "../model/Repo";

const OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GithubApiService {

    getUserInfo(userName: string, callBack: (user: User) => any) {
        // calling Github
        request.get("https://api.github.com/users/" + userName, OPTIONS, (response: any, error: any, body: any) => {
            //console.log(response)
            // console.log(body)
            //console.log(error);
            let GitUser = new User(body);
            callBack(GitUser);
        })

    }

    getRepos(userName: string, callBack: (repos: Repo[]) => any) {

        // calling Github
        request.get("https://api.github.com/users/" + userName + "/repos", OPTIONS, (response: any, error: any, body: any) => {
           let repos =  body.map((repo: any) => new Repo(repo))
           callBack(repos)
        })

    }
}