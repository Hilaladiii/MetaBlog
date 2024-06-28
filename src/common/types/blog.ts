import { z } from "zod";

const MAX_FILE_SIZE = 2000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const uploadBlogSchema = z.object({
  id: z.string().optional(),
  title: z.string().max(255),
  content: z.string().min(200),
  category: z.enum([
    "technology",
    "education",
    "health",
    "economic",
    "religion",
  ]),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 2MB.`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted.",
    ),
});
export const blogSchema = z
  .object({
    author: z.string(),
    views: z.number().nonnegative().optional(),
    createdAt: z.string().optional(),
  })
  .merge(uploadBlogSchema);

export type BlogType = z.infer<typeof blogSchema>;
export type UploadBlogType = z.infer<typeof uploadBlogSchema>;
