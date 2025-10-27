import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return '<html><body>Server products-mongodb started successfully</body></html>';
  }

  @Get('status')
  status(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/html');
    res.send(
      '<html><body>Server products-mongodb started successfully</body></html>',
    );
  }
}
