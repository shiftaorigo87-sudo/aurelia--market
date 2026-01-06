import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { ApiError } from './errorHandler';

export interface AuthUser {
  userId: string;
  email: string;
  role: 'customer' | 'admin';
}

export function verifyToken(token: string): AuthUser {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as AuthUser;
    return decoded;
  } catch (error) {
    throw new ApiError(401, 'Invalid or expired token');
  }
}

export function getAuthUser(request: NextRequest): AuthUser {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new ApiError(401, 'No token provided');
  }

  const token = authHeader.substring(7);
  return verifyToken(token);
}

export function requireAuth(request: NextRequest): AuthUser {
  return getAuthUser(request);
}

export function requireAdmin(request: NextRequest): AuthUser {
  const user = getAuthUser(request);
  
  if (user.role !== 'admin') {
    throw new ApiError(403, 'Admin access required');
  }
  
  return user;
}
