import { Module } from '@nestjs/common';
import { UsersModule } from 'src/resources/users/users.module';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  exports : [LocalStrategy, AuthService,JwtStrategy]
})
export class AuthModule {}
