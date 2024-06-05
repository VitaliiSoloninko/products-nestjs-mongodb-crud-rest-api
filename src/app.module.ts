import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb+srv://vitaliypulupovuch:YPvglwuVjYpOgjsy@nest-api.d1cwop9.mongodb.net/products`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
