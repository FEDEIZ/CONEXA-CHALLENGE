import { Controller, Post, UseGuards } from '@nestjs/common';
import { DatabaseService } from './database-preload.service';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { Roles as RolesEnum } from 'src/modules/user/entities/user.entity';
import { AuthGuard } from 'src/modules/auth/auth.guard';

@Controller('database')
@UseGuards(AuthGuard)
export class DatabaseController {
    constructor(private readonly service: DatabaseService){}
    
    @Roles(RolesEnum.admin)
    @Post('reset')
    async resetFilmsDatabase(){
        return await this.service.resetFilmsDatabase();
    }
}
