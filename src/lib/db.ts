import { PrismaClient, Todo } from '@prisma/client';
const prisma = new PrismaClient();

export const db = prisma;
