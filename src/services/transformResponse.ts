import { CustomProperty } from "@/types/CustomProperty";
import { getRandomColor } from "./getRandomColor";
import { getRandomInitials } from "./getRandomInitials";
import { Post } from "@/types/Post";

export const transformResponse = (response: Post[]) => {
  const userIdToColorMap: CustomProperty = {};
  const userIdToInitials: CustomProperty = {};

  return response
    .sort((a, b) => a.userId - b.userId)
    .map((post, index) => {
      if (index === 0 || post.userId !== response[index - 1].userId) {
        if (!userIdToColorMap[post.userId]) {
          const color = getRandomColor();
          userIdToColorMap[post.userId] = color;
        }
      }

      if (index === 0 || post.userId !== response[index - 1].userId) {
        if (!userIdToInitials[post.userId]) {
          const initials = getRandomInitials();
          userIdToInitials[post.userId] = initials;
        }
      }

      return {
        ...post,
        color: userIdToColorMap[post.userId],
        initials: userIdToInitials[post.userId],
      };
    });
};
