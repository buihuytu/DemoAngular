import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('https://localhost:7008/api/Products/AllPage?page=1&take=20&isDelete=0')
  }

  getById(id: any): Observable<any> {
    return this.http.get<any>('https://localhost:7008/api/Products/id?id=' + id)
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>('https://localhost:7008/api/Products/id?id=' + id)
  }

  add(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:7008/api/Products', data);
  }

  edit(id: any, data: any): Observable<any> {
    return this.http.put<any>('https://localhost:7008/api/Products/id?id=' + id, data);
  }
}
