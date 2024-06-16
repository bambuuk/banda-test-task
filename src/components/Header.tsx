import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 flex justify-center w-full shadow-sm z-50 bg-[inherit]">
      <div className="max-w-[1240px] w-full py-5 px-[40px] flex justify-center items-center gap-5">
        <Navigation navLinks={navItems} />
      </div>
    </header>
  );
};
