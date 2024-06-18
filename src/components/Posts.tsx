import Link from "next/link";
import { Post } from "@/types/Post";
import { FavoriteBtn } from "./FavoriteBtn";
import Avatar from "./Avatar";
import { getAllPosts } from "@/services/getData";

export const Posts = async () => {
  const data = await getAllPosts();

  return (
    <>
      <ul className="mt-12 flex flex-col gap-8">
        {data
          ? data.map((post: Post) => (
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
    </>
  );
};
