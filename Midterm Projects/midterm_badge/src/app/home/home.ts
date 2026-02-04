import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Post } from '../data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home.html',
})
export class Home {
  latestPosts$: Observable<Post[]>;
  constructor(private dataService: DataService) {
    this.latestPosts$ = this.dataService.posts$.pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
