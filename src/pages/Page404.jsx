export const Page404 = ({}) => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-[url('/src/img/images/armory_v1.webp')]">
        <div className="flex justify-center items-center h-full">
          <div className="bg-page w-1/2 h-1/2 rounded flex items-center justify-center border-brown border-4">
            <div className="text-3xl font-bold">ERROR: 404 Not Found</div>
          </div>
        </div>
      </div>
    </div>
  );
};
