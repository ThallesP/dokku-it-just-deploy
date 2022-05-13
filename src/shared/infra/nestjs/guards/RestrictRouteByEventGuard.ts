import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

export class RestrictRouteByEventGuard implements CanActivate {
  constructor(private event: string) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();

    if (req.headers['x-github-event'] !== this.event) return false;

    return true;
  }
}
