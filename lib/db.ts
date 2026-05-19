import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const databaseUrl = process.env.DATABASE_URL;

export const prismadb = globalThis.prisma || new PrismaClient({

  datasourceUrl: databaseUrl, 
});

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;