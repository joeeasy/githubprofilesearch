import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubSerivce {
	private username: string;
	private client_id = '694ce0aafdfbc47ad583';
	private client_secret = '58709f1741ce72e8102a05b41412b38750bf1cd0';

	constructor(private _http:Http) {
		console.log('Github Service Ready...');
		this.username = 'joeeasy';
		
	}

	getUser(){
		return this._http.get('http://api.github.com/users/' +this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json())
	}
	getRepos(){
		return this._http.get('http://api.github.com/users/' +this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		.map(res => res.json())
	}
	updateUser(username) {
		this.username = username;
	}
}