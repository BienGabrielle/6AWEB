import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private postsSubject = new BehaviorSubject<Post[] | null>(null);
  public posts$: Observable<Post[]> = this.postsSubject.asObservable().pipe(
    map(posts => posts || []),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  private loadPosts() {
    this.http.get<Post[]>(this.postsUrl).pipe(
      catchError(() => [])
    ).subscribe(posts => {
      this.postsSubject.next(posts);
    });
  }
}
