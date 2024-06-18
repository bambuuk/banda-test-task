import { Metadata } from "next";
import Comments from "@/components/Comments";
import FavoriteBtn from "@/components/FavoriteBtn";
import { getPostById } from "@/services/getData";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { title } = await getPostById(id);

  return {
    title: title,
  };
}

export default async function PostItemPage({ params }: Props) {
  const id = params.id;
  const { title, body } = await getPostById(id);
  return (
    <main className="flex flex-col items-center flex-auto mt-[70px]">
      <div className="max-w-[1240px] m-full py-7 px-[20px] sm:px-[40px]">
        <div className="flex flex-col gap-6">
          <div className="flex">
            <FavoriteBtn id={+id} />
          </div>

          <div className="text-lg flex flex-col">
            <div className="font-semibold uppercase text-[#61a3ad]">Title</div>{" "}
            {title ? title : "Any"}
          </div>

          <div className="text-lg flex flex-col">
            <div className="font-semibold uppercase text-[#61a3ad]">
              Description
            </div>
            {body ? body : "Any"}
          </div>
        </div>

        <Comments id={id} />
      </div>
    </main>
  );
}
