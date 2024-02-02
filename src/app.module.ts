import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule} from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'localhost', 
      port: 3306,
      username: 'root',
      password:'root123v',
      database:"sm54_arduino",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true 
        //密码
    }),
    UsersModule,
    AuthModule,
    ],

})
export class AppModule {}
