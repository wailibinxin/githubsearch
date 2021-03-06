import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = 'xxxxxxxxxxxxxxxxxxxxxxxx';
  private client_secret = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx';

  constructor(private http: Http) {
    console.log('Github ready...');
    this.username = 'TiagoDeveloper';

  }

  getUser() {
    return this.http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }

  getRepos() {
    return this.http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());
  }

  updateUser(username: string) {
    this.username = username;
  }

}
