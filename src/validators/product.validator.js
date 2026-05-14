const { z } = require("zod");

const productSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name must be less than 100 characters long"),
  price: z.number().positive("Price must be a positive number"),
  category: z
    .string()
    .min(2, "Category must be at least 2 characters long")
    .max(50, "Category must be less than 50 characters long"),
  inStock: z.boolean().optional(),
});

module.exports = {productSchema};
