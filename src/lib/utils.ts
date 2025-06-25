import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getUserByClerkId(clerkId: string) {
  return prisma.user.findUnique({ where: { clerkId } });
}
