import { z } from 'zod';
import { packageSchema, carSchema } from './schema';

export const api = {
  packages: {
    list: {
      method: 'GET' as const,
      path: '/api/packages' as const,
      responses: {
        200: z.array(packageSchema),
      },
    },
  },
  cars: {
    list: {
      method: 'GET' as const,
      path: '/api/cars' as const,
      responses: {
        200: z.array(carSchema),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
