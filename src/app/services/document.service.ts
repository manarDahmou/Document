import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documentURL: string = "http://localhost:3000/documents";
  constructor(private httpClient: HttpClient) { }
  getAllDocuments() {
    return this.httpClient.get<{documentRes:any}>(this.documentURL);
  }
  getDocumentById(id:number){
    return this.httpClient.get<{finded:any}>(`${this.documentURL}/${id}`);
  }
  deleteDocumentById(id:number){
    return this.httpClient.delete<{message:any}>(`${this.documentURL}/${id}`);
  }
  addDocument(document:any){
    return this.httpClient.post<{message:any}>(`${this.documentURL}`,document);
  }
  editDocument(document:any){
    return this.httpClient.put<{message:any}>(`${this.documentURL}/${document._id}`,document);

  }
}
