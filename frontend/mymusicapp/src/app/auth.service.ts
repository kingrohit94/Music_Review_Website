import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import * as moment from "moment";
import { Observable } from "rxjs";
import { tap, shareReplay } from "rxjs/operators";


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

}
