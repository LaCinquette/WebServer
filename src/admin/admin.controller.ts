import { Controller, Get, Render, UseGuards } from '@nestjs/common';
import { AdminGuard } from 'src/auth/admin.guard';

@Controller('admin')
export class AdminController {
    @Get('panel')
    @UseGuards(AdminGuard)
    @Render('admin')
    admin(): any{
        return;
    }
}
