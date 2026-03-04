import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";


  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];

  refreshBooks(){
    this.http.get(this.APIUrl+'GetBooks').subscribe((data: any) => {
      this.books = Array.isArray(data) ? data.map(book => ({
        ...book,
        author: book.author !== undefined ? book.author : '',
        date: book.date !== undefined ? book.date : ''
      })) : [];
    });
  }

  ngOnInit(){
    this.refreshBooks();
  }

  addBook(){
    const newBook = (<HTMLInputElement>document.getElementById("newBook")).value;
    const newDesc = (<HTMLInputElement>document.getElementById("newDesc")).value;
    const newPrice = (<HTMLInputElement>document.getElementById("newPrice")).value;
    const newAuthor = (<HTMLInputElement>document.getElementById("newAuthor")).value;
    const newDate = (<HTMLInputElement>document.getElementById("newDate")).value;
    const bookData = {
      title: newBook,
      description: newDesc,
      price: newPrice,
      author: newAuthor,
      date: newDate
    };
    this.http.post(this.APIUrl+'AddBook', bookData).subscribe(data=>{
      alert(data);
      this.refreshBooks();
    });
  }

  deleteBook(id:any){
      this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }

  trackByBookId(index: number, book: any) {
    return book.id;
  }
}
