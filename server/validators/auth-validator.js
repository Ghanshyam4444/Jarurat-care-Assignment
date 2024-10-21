const { z } = require("zod");

const signupschema = z.object({
  service: z
    .string({ required_error: "Service name is required" })
    .trim()
    .min(3, { message: "Service name must be at least 3 characters" })
    .max(255, { message: "Service name must not exceed 255 characters" }),

  description: z
    .string({ required_error: "Description is required" })
    .trim()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(255, { message: "Description must not exceed 255 characters" }),

  price: z
    .number({ required_error: "Price is required" })
    .positive({ message: "Price must be a positive number" }),
});

module.exports = signupschema;
