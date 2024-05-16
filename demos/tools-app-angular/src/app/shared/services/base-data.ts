

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseData<T, S> {

  protected constructor(protected httpClient: HttpClient, protected resourceName: string) {}

  protected collectionUrl(): string {
    return `/api/${this.resourceName}`;
  }

  protected elementUrl(id: number): string {
    return `/api/${this.resourceName}/${id}`;
  }

  all(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.collectionUrl());
  }

  one(id: number): Observable<T> {
    return this.httpClient.get<T>(this.elementUrl(id));
  }

  create(data: S): Observable<T> {
    return this.httpClient.post<T>(this.collectionUrl(), data);
  }

  update(id: number, data: T): Observable<{}> {
    return this.httpClient.put(this.elementUrl(id), data);
  }

  delete(id: number): Observable<{}> {
    return this.httpClient.delete(this.elementUrl(id));
  }
}