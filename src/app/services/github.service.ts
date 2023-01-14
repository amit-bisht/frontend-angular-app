import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable({providedIn:'root'})
export class GithubService{
    constructor(private http:HttpClient){
    }
    fetchUserRepos(userid){
        return this.http.get(`https://backend-flask-api.vercel.app/api/repos/${userid}`)
    }
    fetchUserInfo(userid){
        return this.http.get(`https://backend-flask-api.vercel.app/api/user/${userid}`)
    }
}