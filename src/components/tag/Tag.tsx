type TTag = {
  children: React.ReactNode;
};

function Tag({ children }: TTag) {
  return (
    <div className=" flex flex-col justify-between h-28 mt-10 px-6 py-4 text-gray-200 bg-gray-900 text-center rounded-3xl text-xl">
      {children}
    </div>
  );
}

export default Tag;
