export default function Avatar({
  color,
  initials,
}: {
  color: string | undefined;
  initials: string | undefined;
}) {
  return (
    <div
      className="w-[40px] h-[40px] rounded-full flex justify-center items-center text-base"
      style={{ backgroundColor: `${color ? color : 'gray'}` }}
    >
      {initials ? initials : ' '}
    </div>
  );
}
