import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response,NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    private logger = new Logger('HTTP');    
    //  console가 많아지면 추적이 어려워짐
    //  이러한 단점을 극복하기 위해 debug라는 패키지를 주로 사용함
    //  https://www.npmjs.com/package/debug

    use(request: Request, response: Response, next: NextFunction): void{
        const {ip, method, originalUrl } = request;
        const userAgent = request.get('user-agent') || '';

        response.on('finish', ()=>{
            const { statusCode } = response;
            const contentLength = response.get('content-length');

            //  Logger 인스턴스 생성 시 매개변수 인 context가 필요없는 경우는,
            //  this.logger.log가 아닌 Logger.log로 써도 무방함
            this.logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`);
        })
        next();
    }   
}