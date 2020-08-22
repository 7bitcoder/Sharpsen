import { Injectable } from '@angular/core';
import { identity, ObservedValueOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'


@Injectable({
    provideIn: 'root'
})
export class FileserviceService {

    constructor(private http: HttpClient) {
        // nothing to do
    }

    download(url: string) {
        return this.http.get(url);
    }
}