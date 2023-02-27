import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { News } from './news';
import { NewsService } from './news.service';
declare var $ : any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NewsService]

})
export class AppComponent implements OnInit, AfterViewInit {
  news: News[] = [];
  submitted:any;
  @ViewChild('addEmployeeButton') addEmployeeButton: any;

  NewsForm: FormGroup;
  
  constructor(private fb: FormBuilder,private _newsSer:NewsService) { 
    this.NewsForm = fb.group({});
    
  }
  
  ngOnInit(): void {
    this.news = this._newsSer.getAllNews();
    this.NewsForm = this.fb.group({
      title: ['',Validators.required],
      body: ['',Validators.required],
      publishDate: ['',Validators.required],
      image:  ['',Validators.required],
    });
  }  
  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();
  }
  setForm(nw: News) {
    this.Title.setValue(nw.title);
    this.Body.setValue(nw.body);
    this.Image.setValue(nw.image);
  }
  addNews() {
    if (this.NewsForm.invalid) {
      this.submitted=false;
      return;
      
    }else{
      this.submitted=true;
    let nw:News = {
      title: this.Title.value,
      body: this.Body.value,
      image:this.Image.value, 
      publishDate: this.Date.value,
    };

    $('#exampleModal').modal('hide');

    console.log(nw);
    this._newsSer.addnews(nw);}
  }

  public get Title(): FormControl {
    return this.NewsForm.get('title') as FormControl;
  }
  public get Body(): FormControl {
    return this.NewsForm.get('body') as FormControl;
  }
  public get Date(): FormControl {
    return this.NewsForm.get('publishDate') as FormControl;
  }

  public get Image(): FormControl {
    return this.NewsForm.get('image') as FormControl;
  }

}

