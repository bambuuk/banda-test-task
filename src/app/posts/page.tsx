import { Posts } from "@/components/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  return (
    <main className="flex flex-col items-center flex-auto mt-[70px]">
      <div className="max-w-[1240px] m-full py-5 px-[20px] sm:px-[40px]">
        <div className=" flex items-center flex-col">
          <h1 className="text-3xl">Posts Page</h1>

          <Posts />
        </div>
      </div>
    </main>
  );
}
