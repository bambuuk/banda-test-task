import { getComments } from "@/services/getData";

export const Comments = async ({ id }: { id: string }) => {
  const commentsList = await getComments(id);

  return (
    <div className="text-lg flex flex-col">
      <div className="font-semibold uppercase text-[#61a3ad]">Comments</div>
      <div className="flex flex-col gap-5 mt-2">
        {commentsList?.map((item: Comment) => (
          <div key={item.id} className="flex flex-col">
            <div className="text-[14px] leading-normal">
              <span className="text-[#64748b]">Name:</span> {item.name}
            </div>
            <div className="text-[14px] leading-normal">
              <span className="text-[#64748b]">Email:</span> {item.email}
            </div>
            <div className="leading-snug text-lg">{item.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
