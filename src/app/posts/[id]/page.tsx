import { Post } from "@/types/Post";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) throw new Error("Unable to fetch post");

  return response.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

export default async function PostItemPage({ params }: Props) {
  const post: Post = await getData(params.id);

  return (
    <main className="flex flex-col items-center flex-auto">
      <div className="max-w-[1240px] m-full py-7 px-[40px]">
        <div className="flex flex-col mt">
          <div className="text-lg">
            <span className="font-semibold uppercase text-[#64748b]">
              Title:
            </span>{" "}
            {post.title}
          </div>
          <div className="mt-5 text-lg">
            <span className="font-semibold uppercase text-[#64748b]">
              Description:{" "}
            </span>
            {post.body}
          </div>
        </div>
      </div>
    </main>
  );
}
