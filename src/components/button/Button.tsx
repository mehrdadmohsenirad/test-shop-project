import { ComponentProps } from "react";

type TButton = ComponentProps<"button"> & {
  title: string;
  color: "success" | "error";
};

function Button({ title, color, onClick }: TButton) {
  return (
    <>
      <button
        onClick={onClick}
        className={` ${color === "success" && " bg-green-700"} ${
          color === "error" && "bg-red-500"
        } transform hover:scale-95 transition duration-200 ease-in-out w-full rounded-lg pt-2 pb-2 mb-3 text-lg cursor-pointer	`}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
