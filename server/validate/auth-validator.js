const z = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(50, { message: "Email must be at most 50 characters long" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be 10 characters long" })
    .max(10, { message: "Phone must be 10 characters long" }),
});

module.exports = signupSchema;
