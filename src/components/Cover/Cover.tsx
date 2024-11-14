const Cover = () => {
  return (
    <div className="relative">
      <div className="h-[100vh] z-[10] relative bg-lime-500"></div>
      <div className="relative z-[10] h-[100vh] bg-red-500"></div>
      <div className="relative h-[100vh] bg-red-100"></div>
      <div className="fixed left-0 z-[5] top-[0px] h-[100vh] w-[100%] grid bg-blue-500 place-items-center">
        <div className="flex flex-col justify-center items-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          perferendis sequi assumenda, nam earum eveniet non neque est maiores
          et aliquam nihil aperiam officia voluptates quod culpa debitis quae,
          amet beatae magnam? Optio eaque quia culpa voluptas fugit sequi at
          ratione obcaecati, quisquam praesentium. Sapiente iure culpa deleniti
          vel quae est veritatis, cupiditate adipisci fuga, ipsa eius, laborum
          iusto beatae tempora nam aperiam odio inventore suscipit optio
          accusamus sit et exercitationem quis quo. Repudiandae, natus porro
          optio illo laudantium amet sint officiis quod neque, nihil aliquid?
          Earum molestiae deleniti perspiciatis, ad quia quas laboriosam odit
          assumenda. Iste, consequatur voluptates. Eum?
          <button
            onClick={() => {
              console.log("clciked");
            }}
          >
            clici me
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cover;
