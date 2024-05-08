import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransportsService } from './transports.service';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Transport } from './model/transport.model';

@Controller('transports')
export class TransportsController {
  constructor(private readonly transportsService: TransportsService) {}

  @ApiOperation({ summary: 'Create a new transport' })
  @ApiResponse({ status: 201, type: Transport })
  @Post()
  create(@Body() createTransportDto: CreateTransportDto) {
    return this.transportsService.create(createTransportDto);
  }

  @ApiOperation({ summary: 'get  all transport' })
  @Get()
  findAll() {
    return this.transportsService.findAll();
  }

  @ApiOperation({ summary: 'Get a transport by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportsService.findOne(+id);
  }

  @ApiOperation({ summary: 'update a transport by ID' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransportDto: UpdateTransportDto) {
    return this.transportsService.update(+id, updateTransportDto);
  }

  @ApiOperation({ summary: 'Delete a transport by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportsService.remove(+id);
  }
}
