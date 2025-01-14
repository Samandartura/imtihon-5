import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AdminService } from './admin.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Admin } from './model/admin.model';
import { LoginAdminDto } from './dto/login_admin.dto';
import { CookieGetter } from '../decorators/cookieGetter';
import { JwtAuthGuard } from '../guards/jwt.auth.guard';

@ApiTags('admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Register a new user' }) // Description for Swagger documentation
  @ApiResponse({ status: 201, type: Admin }) // Response definition for Swagger documentation
  @Post('signup') // Defines HTTP POST method and endpoint route
  async registration(
    @Body() createAdminDto: CreateAdminDto, // Request body containing user data
    @Res({ passthrough: true }) res: Response, // Express Response object for setting cookies
  ) {
    return this.adminService.registration(createAdminDto, res); // Calls the registration method from the service
  }

  @ApiOperation({ summary: 'Create a new admin' })
  @ApiResponse({ status: 201, type: Admin })
  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: 'Login as an admin' })
  @HttpCode(200)
  @Post('login') 
  async login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.login(loginAdminDto, res);
  }

  @ApiOperation({ summary: 'Logout as an admin' })
  @Post('logout')
  async logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.logout(refreshToken, res);
  }

  @ApiOperation({ summary: 'Refresh token for an admin' })
  @HttpCode(200)
  @Post(':id/refresh')
  async refresh(
    @Param('id') id: number,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.refreshToken(+id, refreshToken, res);
  }

  @ApiOperation({ summary: 'Activate admin account' })
  @Get('activate/:link')
  async activate(@Param('link') link: string) {
    return this.adminService.activate(link);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get all admins' })
  @Get()
  async findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get an admin by ID' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update an admin by ID' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete an admin by ID' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
