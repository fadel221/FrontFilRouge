import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TokenAddInterceptor implements HttpInterceptor {

    intercept (req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>>
    {
        const token= localStorage.getItem('token');
        if (token)
        {
            //Clone chaque requete interceptée et lui ajoute le token
            const CloneReq= req.clone(
                {
                    headers: new HttpHeaders().set('Authorization', 'Bearer '+ token)
                });
            return next.handle(CloneReq);
        }
    return next.handle(req);
        
    }

}

export const RequestInterceptorProvider =
{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenAddInterceptor,
    multi: true
}