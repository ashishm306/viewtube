import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError,map, Observable, throwError  } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})

export class SecurityGuard implements CanActivate {
  constructor(private router : Router, private service: DataService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.service.isAuthenticated().pipe(map((data:any)=>{
        if(data.isAuthenticated){
          return true
        }
        else{
          this.router.navigateByUrl('/login');
          return false;
        }
      }),catchError((err: HttpErrorResponse)=>{
        this.router.navigateByUrl('/login');
        return throwError(err);
      }));
    }
  }
