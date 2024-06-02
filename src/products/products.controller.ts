import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

// express
// app.use((req, res, next) => {
//   res.status(201).end('Poka');
// });

@Controller('products')
export class ProductsController {
  // @Get()
  // // @Redirect('https://google.com', 301)
  // getAll(@Req() req: Request, @Res() res: Response): string {
  //   res.status(201).end('Poka');
  //   return 'get All products';
  // }

  @Get()
  getAll(): string {
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'get by id ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    return `Title: ${createProductDto.title} Price: ${createProductDto.price}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove ' + id;
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'Update ' + id;
  }
}
