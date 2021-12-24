import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  documents:any;
  constructor(private documentService:DocumentService, private router: Router) { }

  ngOnInit() {
    this.getAllDocuments()
  }
  getAllDocuments() {
    this.documentService.getAllDocuments().subscribe(
      (data) => {
        this.documents = data.documentRes;
      }
    );
  }
  deleteDocument(id) {
    this.documentService.deleteDocumentById(id).subscribe(
      () => {
        console.log('deleted with success')
        this.getAllDocuments();

      }
    );
  }
  displayDocument(id) {
    this.router.navigate([`displayDocument/${id}`])
  }
  editDocument(id) {
    this.router.navigate([`editDocument/${id}`])

  }
}
