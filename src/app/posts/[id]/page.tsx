"use client";

import {
  useGetCommentsForPostQuery,
  useGetPostByIdQuery,
} from "@/api/postsApi";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { toggleFavorite } from "@/store/favoriteSlice";
// import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

// export function generateMetadata({
//   params: { id },
// }: Props): Promise<Metadata> {
//   const post = await getPostById(id);

//   return {
//     title: post.title,
//   };
// }

export default function PostItemPage({ params }: Props) {
  const { data, error, isLoading } = useGetPostByIdQuery(params.id);
  const {
    data: commentsList,
    error: commentsError,
    isLoading: commentsLoading,
  } = useGetCommentsForPostQuery(params.id);
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();

  const handleToggleFavorite = (postId: number) => {
    dispatch(toggleFavorite(postId));
  };

  return (
    <main className="flex flex-col items-center flex-auto">
      <div className="max-w-[1240px] m-full py-7 px-[40px]">
        {isLoading || commentsLoading ? (
          <div className="mt-10 text-xl font-semibold">Loading ...</div>
        ) : error || commentsError ? (
          <div className="mt-10 text-xl font-semibold">
            Oooops!! Loading error
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="text-lg">
              <button
                onClick={() => handleToggleFavorite(+params.id)}
                className="text-[green]"
              >
                {favorites.includes(+params.id)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>{" "}
              <span className="font-semibold uppercase text-[#64748b]">
                Title
                <br />
              </span>{" "}
              {data ? data.title : "Any"}
            </div>
            <div className="mt-5 text-lg">
              <span className="font-semibold uppercase text-[#64748b]">
                Description
                <br />
              </span>
              {data ? data.body : "Any"}
            </div>

            <div className="mt-5 font-semibold uppercase text-[#64748b]">
              Comments
            </div>
            <ul>
              {commentsList?.map((item) => (
                <li key={item.id}>{item.body}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
