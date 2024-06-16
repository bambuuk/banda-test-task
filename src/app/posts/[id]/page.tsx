import PostItem from "@/components/PostItem";
import { getPostById } from "@/services/getData";
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

export default function PostItemPage({ params }: Props) {
  return (
    <main className="flex flex-col items-center flex-auto">
      <div className="max-w-[1240px] m-full py-7 px-[20px] sm:px-[40px]">
        <PostItem id={params.id} />
      </div>
    </main>
  );
}
