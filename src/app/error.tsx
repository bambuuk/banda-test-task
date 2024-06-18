"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <h1 className="flex justify-center items-center text-2xl flex-1">
      Ooops!!! {error.message}
    </h1>
  );
}
