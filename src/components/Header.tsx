import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center w-full shadow-sm">
      <div className="max-w-[1240px] m-auto py-5 px-[40px] xl:px-0">
        <Link href="/" className="text-xl">
          Posts
        </Link>
      </div>
    </header>
  );
};
