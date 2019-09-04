import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Book } from '../shared/book.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl +'/book/';


@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css']
})
export class InsertBookComponent implements OnInit {
  private form: FormGroup;

  private genres = ['Classic','Sci-Fi','Coming of Age','Fantasy','History',];

  private miscLinkAdded = '';
  private addedMiscLinks = [];
  
  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar
    ) { }


  ngOnInit() {
    //addBook Form
    this.form = new FormGroup({
      'ISBN': new FormControl(null, {validators: [Validators.required]}),
      'author': new FormControl(null, {validators: [Validators.required]}),
      'publisher': new FormControl(null, {validators: [Validators.required]}),
      'title': new FormControl(null, {validators: [Validators.required]}),
      'titleOfSeries': new FormControl(null),	
      'noInSeries': new FormControl(null, {validators: [Validators.required]}),
      'genre': new FormControl(null, {validators: [Validators.required]}),
      'blurbText': new FormControl(null),
      'amazonLink': new FormControl(null),
      'goodreadsLink': new FormControl(null),
      'audibleLink': new FormControl(null),
      'linkBookCover': new FormControl(null),
      'miscLinks': new FormControl(null),	
    })
   }

   onSubmitBook() {   
    if(this.form.invalid)
      return;

    else if(confirm('Are you sure you want to submit?')) {
      const newBook: Book = this.form.value;
      
      // console.log(newBook);

      this.http.post<{message: string, book: Book }>(BACKEND_URL, newBook)
        .subscribe((responseData) => { });
    
      
      this.openSnackBar('Book added to DataBase', '');
      this.form.reset();
    }
   }



  onAddMiscLink() {
    this.addedMiscLinks.push(this.miscLinkAdded);
    this.openSnackBar(this.miscLinkAdded+' successfully added', '');
    
    this.miscLinkAdded='';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
