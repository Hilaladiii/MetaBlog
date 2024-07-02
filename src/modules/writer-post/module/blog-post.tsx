"use client";

import Button from "@/common/components/elements/Button";
import InputForm from "@/common/components/fragments/InputForm";
import { uploadBlogSchema, UploadBlogType } from "@/common/types/blog";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "@/services/blog";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { cn } from "@/common/lib/utils";
import { useRouter } from "next/navigation";

export default function BlogPost() {
  const [message, setMessage] = useState<string>("");
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handlePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<UploadBlogType>({ resolver: zodResolver(uploadBlogSchema) });

  const onSubmit = async (blog: UploadBlogType) => {
    const file = blog.image instanceof FileList ? blog.image[0] : blog.image;
    const uploadData = {
      ...blog,
      image: file,
    };
    const res = await createPost(uploadData);
    if (res.status == 201) {
      router.push("/writer/my-post");
    } else {
      setMessage(res.message);
    }
  };

  return (
    <div className="mx-auto mt-32 max-w-[70em] px-20">
      <span className="mx-auto text-xl font-semibold">{message}</span>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputForm
          variant="secondary"
          label="Title"
          size="full"
          placeholder="insert title here..."
          name="title"
          type="text"
          error={errors.title}
          register={register}
        />
        <div>
          <label htmlFor="content">Content</label>
          <Controller
            name="content"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ReactQuill
                placeholder="Insert content here..."
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          {errors.content && (
            <span className="text-sm text-red-400">minimum character 200</span>
          )}
        </div>
        <div>
          <label
            htmlFor="image"
            className={cn("cursor-pointer", { hidden: preview })}
          >
            <div className="flex h-32 w-full max-w-md items-center justify-center rounded-md border-[1px] border-dotted border-charcoal">
              <p>upload file here ...</p>
            </div>
          </label>
          {preview && (
            <div className="relative flex max-w-sm flex-row items-start">
              <Image
                src={preview}
                alt="image preview"
                width={400}
                height={400}
              />
              <button
                onClick={() => setPreview(null)}
                className="absolute right-3 top-2 size-4 rounded-full bg-black text-center text-xs text-white"
              >
                X
              </button>
            </div>
          )}
          <input
            id="image"
            type="file"
            className="hidden"
            {...register("image", { required: "Image is required" })}
            onChange={(e) => {
              handlePreview(e);
              register("image").onChange(e);
            }}
          />
          {errors.image && (
            <p className="text-xs text-red-500">
              {errors.image.message?.toString()}
            </p>
          )}
        </div>
        <div className="flex items-center gap-5">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="py-2"
            {...register("category", { required: "Category is required" })}
          >
            <option value="technology">Technology</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="economic">Economic</option>
            <option value="religion">Religion</option>
          </select>
          {errors.category && (
            <p className="text-xs text-red-500">{errors.category.message}</p>
          )}
        </div>
        <Button variant="black" type="submit" className="mt-10">
          Create Post
        </Button>
      </form>
    </div>
  );
}
