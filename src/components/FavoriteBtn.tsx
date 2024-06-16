"use client";

import { useAppSelector } from "@/hooks/useAppSelector";
import useHandleToggleFavorite from "@/hooks/useHandleToggleFavorite";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export const FavoriteBtn = ({ id }: { id: number }) => {
  const favorites = useAppSelector((state) => state.favorites);
  const handleToggleFavorite = useHandleToggleFavorite();

  return (
    <button
      onClick={() => handleToggleFavorite(id)}
      className={`group p-2 transition-colors border-solid border-2 rounded-md
        border-[#fff] ${
          favorites.includes(id) ? "border-statusRed" : "border-[#fff]"
        } lg:hover:border-[#dc2626]`}
    >
      {favorites.includes(id) ? (
        <div className="flex gap-2 sm:gap-4 items-center">
          <MdFavorite size={30} color="#dc2626" />
          <span className="text-[#dc2626] lg:text-[#fff] lg:group-hover:text-[#dc2626] transition-colors">
            Remove from Favorites
          </span>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <MdFavoriteBorder size={30} color="#dc2626" />
          <span className="text-[#fff] lg:group-hover:text-[#dc2626] transition-colors">
            Add to Favorites
          </span>
        </div>
      )}
    </button>
  );
};
