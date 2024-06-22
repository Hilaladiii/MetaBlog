import { z } from "zod";

export const userSchema = z.object({
  username: z.string().max(15, "max length username is 15 characters"),
  email: z.string().email(),
  password: z.string().min(8, "min length password is 8 characters"),
  role: z.enum(["reader", "writer", "admin"]),
});

export type UserType = z.infer<typeof userSchema>;
