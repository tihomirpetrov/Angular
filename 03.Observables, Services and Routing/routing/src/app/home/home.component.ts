import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HomeService} from './home.service';
import {GithubProfileModel} from './github-profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HomeService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile: GithubProfileModel;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService
      .getGitHubProfile('tihomirpetrov')
      .subscribe(data => this.profile = data);
  }
}
