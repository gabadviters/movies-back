import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { ROLES } from '../constants/role.constants';

@Injectable()
export class IsUserGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.user.role !== "user") {
      throw new UnauthorizedException('you don´t have the permissions');
    }

    return true;
  }
}