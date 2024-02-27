export default function SprintPage() {
  return (
    <div className="p-10 flex flex-col gap-10 w-[50%]">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Objetivos
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
          voluptatem suscipit corrupti delectus, fugiat laborum exercitationem
          officia voluptates consequuntur et autem aliquid esse quibusdam earum
          itaque nostrum deleniti? Autem, placeat.
        </p>
      </div>
      <div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Divisão de tarefas
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
      </div>
    </div>
  );
}
