import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute, private githubService: GithubService,private router:Router) { }

  isLoading = false
  userid: string
  userGithubRepo: any
  userInfo= null

  ngOnInit(): void {
    this.isLoading = true
    this.route.params.subscribe((responseData) => {
      console.log(responseData['user-id'])
      this.userid = responseData['user-id']
    })
    this.loadGithubData()
  }

  loadGithubData() {
    this.githubService.fetchUserInfo(this.userid).subscribe(responseData => {
      this.userInfo = responseData
      console.log(this.userInfo)
    },error=>{
      console.log(error)
      this.isLoading=false
      this.router.navigate(['/user-not-found'])
    })

    this.githubService.fetchUserRepos(this.userid).subscribe(responseData => {
      this.userGithubRepo = responseData
      this.isLoading = false

    },error=>{
      console.log(error)
      this.isLoading=false
    })
    
    
  }
}
