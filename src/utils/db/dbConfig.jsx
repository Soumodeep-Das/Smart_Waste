import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://waste_management_owner:dQWZpHIY2D8u@ep-tight-poetry-a5q88l9f.us-east-2.aws.neon.tech/waste_management?sslmode=require"
);

export const db = drizzle(sql, { schema });
