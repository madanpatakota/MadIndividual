import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators'

export class authinterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, handler: HttpHandler) {

        const ModifyRequest = request.clone(
            {
                headers: new HttpHeaders({ token: 'madan' }),
                params: new HttpParams().set("Authentciation", "true"),
                responseType: 'json',
            }
        )

        const returnPromise = handler.handle(ModifyRequest).pipe(tap(event => {
            if (event.type === HttpEventType.Response) {
                console.log(event.body)
            }
            if (event.type === HttpEventType.Sent) {
                //console.log(event.)
            }
        }));

        return returnPromise;
    }

}