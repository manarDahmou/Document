import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent implements OnInit {

  documentForm:FormGroup;
  document:any={};
  id:any;
  title:any;
  constructor(private formBuilder:FormBuilder ,private documentService:DocumentService,private router:Router,   private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  
    this.documentForm=this.formBuilder.group({
      fullName:[''],
      description:[''],
      date:[''],
      doc:[''],

    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title="Edit"
      this.documentService.getDocumentById(this.id).subscribe(
        (data)=>{
          this.document=data.finded;
        }
      )
    }else{
      this.title='ADD '
    }
  }
  Document(){
    if (this.id) {

    console.log('document object' , this.document)
    this.documentService.editDocument(this.document).subscribe(
      (data)=>{
        console.log('Updated with success',data.message);
        this.router.navigate(['']);
        
      }
    )
   }else{
    this.documentService.addDocument(this.document).subscribe(
      (data)=>{
        console.log('added with success',data.message);
        this.router.navigate(['']);
      }
    );
    }
  }

}
