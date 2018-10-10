import { GithubApiService } from "./service/GithubApiService";
import { User } from "./model/User";
import { Repo } from "./model/Repo";
import _ from 'lodash';

if (process.argv.length < 3) {
    console.log("Please pass an argument to run the app")
} else {
    testGitApiCalls(process.argv[2]);
}

function testGitApiCalls(userName: string) {

    let gitService = new GithubApiService();
    gitService.getUserInfo(userName, (user: User) => {
        gitService.getRepos(userName, (repos: Repo[]) => {
            // sorting the repos based on size - lodash
            let sortedRepos = _.orderBy(repos, ['size'], ['desc'])
            // take only the top five
            user.repos = _.take(sortedRepos, 5)
            console.log(user)
        })
    });


}

