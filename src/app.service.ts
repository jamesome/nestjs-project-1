import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getId(id): string {
    return `id 받기 => ${id}`;
  }

  getBye(request): string {
    // console.log(request);
    return `되는 가? ${request}`;
  }
}
