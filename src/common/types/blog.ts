import { z } from "zod";

const MAX_FILE_SIZE = 200000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const blogSchema = z.object({
  id: z.string().optional(),
  title: z.string().max(255),
  content: z.string().min(500),
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
  author: z.string(),
});

export type BlogType = z.infer<typeof blogSchema>;
