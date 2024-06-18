import Avatar from "@/components/Avatar";
import { FavoriteBtn } from "@/components/FavoriteBtn";
import { getAllPosts } from "@/services/getData";
import { transformResponse } from "@/services/transformResponse";
import { Post } from "@/types/Post";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const data = await getAllPosts();
  const transformData = transformResponse(data);

  return (
    <main className="flex flex-col items-center flex-auto mt-[70px]">
      <div className="max-w-[1240px] m-full py-5 px-[20px] sm:px-[40px]">
        <div className=" flex items-center flex-col">
          <h1 className="text-3xl">Posts Page</h1>

          <ul className="mt-12 flex flex-col gap-8">
            {transformData
              ? transformData.map((post: Post) => (
                  <li key={post.id}>
                    <div className="flex flex-col">
                      <div className="flex gap-5 items-center">
                        <Avatar color={post.color} initials={post.initials} />

                        <FavoriteBtn id={post.id} />
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
        </div>
      </div>
    </main>
  );
}
