import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { secret } from 'src/common/constants/secret.constant';

@Injectable()
export class AuthJWTGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log('token: ' + token);
    if (!token) {
      throw new UnauthorizedException('token doesn´t exist');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, { secret});
      console.log('Payload: ' + JSON.stringify(payload));
      request.user = payload;
    } catch (error) {
      throw new UnauthorizedException('token not verified');
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      console.log('Authorization header not found');
      return undefined;
    }

    return authHeader;
  }
}