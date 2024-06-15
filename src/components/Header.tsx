import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
];

export const Header = () => {
  return (
    <header className="flex justify-center w-full shadow-sm">
      <div className="max-w-[1240px] w-full m-auto py-5 px-[40px] flex justify-center items-center gap-5">
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};
