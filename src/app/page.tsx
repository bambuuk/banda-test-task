import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center flex-auto">
      <div className="max-w-[1240px] w-full py-5 px-[40px] flex justify-center items-center">
        <h1 className="text-3xl">Home page</h1>
      </div>
    </main>
  );
}
