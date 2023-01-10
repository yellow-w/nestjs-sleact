import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // 컨트롤러 전 부분
        return next.handle().pipe(map((data)=>( data === undefined ? null : data )));   
        //  data는 컨트롤러에서 리턴해주는 부분
        // { data: user, code: 'SUCCESS' }
    }
}