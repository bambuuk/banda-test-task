import { useAppDispatch } from "@/hooks/useAppDispatch";
import { toggleFavorite } from "@/store/favoriteSlice";

export default function useHandleToggleFavorite() {
  const dispatch = useAppDispatch();
  const handleToggleFavorite = (postId: number) => {
    dispatch(toggleFavorite(postId));
  };

  return handleToggleFavorite;
}
