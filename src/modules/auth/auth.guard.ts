import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, 
    private configService: ConfigService, 
    private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: this.configService.get('JWT_SECRET')
        }
      );
      request['user'] = payload;
      if (!this.checkRoles(payload.role, context)) {
        throw new UnauthorizedException('Insufficient permissions');
      }
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private checkRoles(role: string, context: ExecutionContext): boolean {
    const handler = context.getHandler();
    const roles = this.reflector.get<string[]>('roles', handler);
    console.log("roles required: ", roles);
    if (!roles) {
      return true; // No se han especificado roles, permitir el acceso
    }

    const user = context.switchToHttp().getRequest()['user'];

    return roles.some( r => r === role);
    //return requiredRoles.some(role => user.roles.includes(role));
  }
}
