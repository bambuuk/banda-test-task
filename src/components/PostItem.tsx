"use client";

import {
  useGetAllPostsQuery,
  useGetCommentsForPostQuery,
} from "@/api/postsApi";
import Avatar from "@/components/Avatar";
import { FavoriteBtn } from "@/components/FavoriteBtn";

export default function PostItem({ id }: { id: string }) {
  const {
    data: commentsList,
    error: commentsError,
    isLoading: commentsLoading,
  } = useGetCommentsForPostQuery(id);
  const { data: allPosts, error, isLoading } = useGetAllPostsQuery("");

  const data = allPosts?.filter((item) => item.id === +id)[0];
  return (
    <>
      {isLoading || commentsLoading ? (
        <div className="mt-10 text-xl font-semibold">Loading ...</div>
      ) : error || commentsError ? (
        <div className="mt-10 text-xl font-semibold">
          Oooops!! Loading error
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex gap-5 items-center">
            <Avatar color={data?.color} initials={data?.initials} />
            <FavoriteBtn id={+id} />
          </div>

          <div className="text-lg flex flex-col">
            <div className="font-semibold uppercase text-[#61a3ad]">Title</div>{" "}
            {data ? data.title : "Any"}
          </div>

          <div className="text-lg flex flex-col">
            <div className="font-semibold uppercase text-[#61a3ad]">
              Description
            </div>
            {data ? data.body : "Any"}
          </div>

          <div className="text-lg flex flex-col">
            <div className="font-semibold uppercase text-[#61a3ad]">
              Comments
            </div>
            <div className="flex flex-col gap-5 mt-2">
              {commentsList?.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="text-[14px] leading-normal">
                    <span className="text-[#64748b]">Name:</span> {item.name}
                  </div>
                  <div className="text-[14px] leading-normal">
                    <span className="text-[#64748b]">Email:</span> {item.email}
                  </div>
                  <div className="leading-snug text-lg">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
