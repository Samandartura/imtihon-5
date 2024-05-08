import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JarimaService } from './jarima.service';
import { CreateJarimaDto } from './dto/create-jarima.dto';
import { UpdateJarimaDto } from './dto/update-jarima.dto';

@Controller('jarima')
export class JarimaController {
  constructor(private readonly jarimaService: JarimaService) {}

  @Post()
  create(@Body() createJarimaDto: CreateJarimaDto) {
    return this.jarimaService.create(createJarimaDto);
  }

  @Get()
  findAll() {
    return this.jarimaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jarimaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJarimaDto: UpdateJarimaDto) {
    return this.jarimaService.update(+id, updateJarimaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jarimaService.remove(+id);
  }
}
