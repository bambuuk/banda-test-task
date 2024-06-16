"use client";

import { useGetAllPostsQuery } from "@/api/postsApi";
import { Post } from "@/types/Post";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { toggleFavorite } from "@/store/favoriteSlice";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export const Posts = () => {
  const { data, error, isLoading } = useGetAllPostsQuery("");
  const favorites = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();

  const handleToggleFavorite = (postId: number) => {
    dispatch(toggleFavorite(postId));
  };
  return (
    <>
      {isLoading ? (
        <div className="mt-10 text-xl font-semibold">Loading ...</div>
      ) : error ? (
        <div className="mt-10 text-xl font-semibold">
          Oooops!! Loading error
        </div>
      ) : (
        <ul className="mt-12 flex flex-col gap-8">
          {data
            ? data.map((post: Post) => (
                <li key={post.id}>
                  <div className="flex flex-col">
                    <div className="flex gap-5 items-center">
                      <div
                        className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-base"
                        style={{ backgroundColor: `${post.color}` }}
                      >
                        {post.initials}
                      </div>

                      <button
                        onClick={() => handleToggleFavorite(post.id)}
                        className="group p-2 transition-colors border-solid border-2 rounded-md lg:border-[#fff] lg:hover:border-[#dc2626]"
                        style={{
                          borderColor: favorites.includes(post.id)
                            ? "#dc2626"
                            : "#fff",
                        }}
                      >
                        {favorites.includes(post.id) ? (
                          <div className="flex gap-2 sm:gap-4">
                            <MdFavorite size={30} color="#dc2626" />
                            <span className="text-[#dc2626] lg:text-[#fff] lg:group-hover:text-[#dc2626] transition-colors">
                              Remove from Favorites
                            </span>
                          </div>
                        ) : (
                          <div className="flex gap-4 items-center">
                            <MdFavoriteBorder size={30} color="#dc2626" />
                            <span className="text-[#fff] lg:group-hover:text-[#dc2626] transition-colors">
                              Add to Favorites
                            </span>
                          </div>
                        )}
                      </button>
                    </div>
                    <Link
                      href={`/posts/${post.id}`}
                      className="text-xl lg:hover:underline mt-3 transition-all"
                    >
                      {post.title}
                    </Link>{" "}
                  </div>
                </li>
              ))
            : ""}
        </ul>
      )}
    </>
  );
};
