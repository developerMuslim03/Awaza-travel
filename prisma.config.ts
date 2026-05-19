import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Sonuna ünlem ekleyerek: "Burası asla undefined olmayacak, bana güven" diyoruz.
    url: process.env.DATABASE_URL!, 
  },
});