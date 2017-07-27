import  {Component} from '@angular/core';
import {GithubSerivce} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
	moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html'
})
export class ProfileComponent{
 user;
 repos;
 username: string;

	constructor(private _gitService: GithubSerivce){
		this.user = false;
   
	}
	searchUser() {
		this._gitService.updateUser(this.username);

		this._gitService.getUser().subscribe(user => {
			console.log(user);
			this.user = user;
		})

		this._gitService.getRepos().subscribe(repos => {
			console.log(repos);
			this.repos = repos;
		})
	}
}
