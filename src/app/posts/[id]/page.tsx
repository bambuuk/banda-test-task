import { getPostById } from "@/services/getData";
import { Post } from "@/types/Post";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPostById(id);

  return {
    title: post.title,
  };
}

export default async function PostItemPage({ params }: Props) {
  const post: Post = await getPostById(params.id);

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
