import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Res,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OrderService } from './orders.service';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}
  //for posting
  @Post()
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @Res() response: Response,
  ) {
    try {
      const orders = await this.orderService.create(createOrderDto);
      response.send({ data: orders, message: 'Success!' }).status(201);
    } catch (e) {
      console.log(e);
      response
        .send({ data: null, message: 'internal server error!!' })
        .status(500);
    }
  }

  //for finding all
  @Get()
  async findAll(@Res() response: Response) {
    try {
      const allorders = await this.orderService.findAll();
      response.send({ data: allorders, message: 'Success' }).status(200);
    } catch (e) {
      console.log(e);
      response
        .send({ data: null, message: 'Internal Server Error!' })
        .status(500);
    }
  }

  //for finding one
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      const orders = await this.orderService.findOne(id);
      return response.send({ data: orders, message: 'Success' }).status(201);
    } catch (e) {
      console.log(e);
      return response
        .send({ data: null, message: 'Internal Server Error!!' })
        .status(500);
    }
  }

  //update
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto,
    @Res() response: Response,
  ) {
    try {
      const order = await this.orderService.update(id, updateOrderDto);
      return response
        .send({ data: order, message: 'Successfully updated' })
        .status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'Internal server error!' })
        .status(500);
    }
  }

  //for delete
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    try {
      const order = await this.orderService.remove(id);
      return response
        .send({ data: order, message: 'Successfully deleted!' })
        .status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'Internal server Error!' })
        .status(500);
    }
  }
}
