"use client";
import React from "react";
import { useGetAllPostsQuery } from "@/api/postsApi";
import { Post } from "@/types/Post";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { toggleFavorite } from "@/store/favoriteSlice";

export default function PostsPage() {
  const { data, error, isLoading } = useGetAllPostsQuery("");
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = (postId: number) => {
    dispatch(toggleFavorite(postId));
  };

  return (
    <main className="flex flex-col items-center flex-auto">
      <div className="max-w-[1240px] m-full py-5 px-[40px]">
        <div className=" flex items-center flex-col">
          <h1 className="text-3xl">Posts Page</h1>

          {isLoading ? (
            <div className="mt-10 text-xl font-semibold">Loading ...</div>
          ) : error ? (
            <div className="mt-10 text-xl font-semibold">
              Oooops!! Loading error
            </div>
          ) : (
            <ul className="mt-12 list-disc">
              {data
                ? data.map((post: Post) => (
                    <li key={post.id}>
                      <Link
                        href={`/posts/${post.id}`}
                        className="text-lg hover:underline"
                      >
                        {post.title}
                      </Link>{" "}
                      <button
                        onClick={() => handleToggleFavorite(post.id)}
                        className="text-[green]"
                      >
                        {favorites.includes(post.id)
                          ? "Remove from Favorites"
                          : "Add to Favorites"}
                      </button>
                    </li>
                  ))
                : ""}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
