import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  getPosts() {
    return [
      {
        id: 1,
        title: 'First Post',
        body: '1 dummy text!',
        votes: 1,
      },
      {
        id: 2,
        title: 'Second Post',
        body: '2 dummy text!',
        votes: 2,
      },
    ];
  }
}
