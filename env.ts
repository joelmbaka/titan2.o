import { z } from "zod";

console.log("Loading environment variables...");
console.log("Raw process.env:", process.env);

const envSchema = z.object({
  VERCEL_API_TOKEN: z.string().min(1, "VERCEL_API_TOKEN is required"),
  // ... other environment variables ...
});

try {
  const env = envSchema.parse(process.env);
  console.log("Environment variables successfully validated:", env);
  export { env };
} catch (error) {
  console.error("❌ Environment variable validation failed:", error);
  throw error;
} 