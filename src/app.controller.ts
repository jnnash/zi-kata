import { Body, Controller, Post } from '@nestjs/common';

import { AppService } from './app.service';

// class CheckoutBodyDTO {

// }

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  checkout(@Body() items): number {
    return this.appService.checkout(items);
  }
}
