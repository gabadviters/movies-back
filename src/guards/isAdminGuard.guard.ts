import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { ROLES } from '../constants/role.constants';

@Injectable()
export class IsAdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request);
    if (request.user.role !== "admin") {
      throw new UnauthorizedException('you don´t have the permissions');
    }

    return true;
  }
}