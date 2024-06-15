import { Post } from "@/types/Post";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const posts = await getData();

  return (
    <main className="flex flex-col items-center flex-auto">
      <div className="max-w-[1240px] m-full py-5 px-[40px]">
        <div className=" flex items-center flex-col">
          <h1 className="text-3xl">Posts Page</h1>

          <ul className="mt-16 list-disc">
            {posts.map((post: Post) => (
              <li key={post.id}>
                <Link
                  href={`/posts/${post.id}`}
                  className="text-lg hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
