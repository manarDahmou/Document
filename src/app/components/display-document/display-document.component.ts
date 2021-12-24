import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-display-document',
  templateUrl: './display-document.component.html',
  styleUrls: ['./display-document.component.css']
})
export class DisplayDocumentComponent implements OnInit {


  id: any;
  document: any;
  constructor(private documentService: DocumentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.documentService.getDocumentById(this.id).subscribe(
      (data) => {
        console.log('data', data);

        this.document = data.finded;
      }
    )

  }

}
