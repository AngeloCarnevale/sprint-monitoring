export default function Home() {
  return (
    <div className="p-10 w-[90%]">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xll">
        Home
      </h1>
      <p className="mt-6">
        Bem vindo ao site de acompanhamento de sprints do nosso projeto de TCC
        (Smarthub), aqui você poderá acompanhar o trabalho de cada integrante do
        grupo em cada Sprint e suas contribuições. Este projeto foi desenvolvido
        pelo <span className="text-green-600">Diego</span>, <span className="text-red-600">Ângelo</span> e <span className="text-pink-600">Giovanna</span>, em conjunto com a PS.
      </p>
    </div>
  );
}
