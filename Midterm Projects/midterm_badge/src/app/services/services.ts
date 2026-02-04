import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../data.service';
import { Observable, combineLatest, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './services.html',
})
export class Services {
  search$ = new BehaviorSubject<string>('');
  filteredPosts$: Observable<Post[]>;
  constructor(private dataService: DataService) {
    this.filteredPosts$ = combineLatest([
      this.dataService.posts$,
      this.search$.pipe(startWith(''))
    ]).pipe(
      map(([posts, search]) =>
        posts.filter(post =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.body.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }
}
