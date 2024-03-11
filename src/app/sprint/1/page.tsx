import Head from "next/head";

export default function SprintPage() {
  return (
    <>
      <div className="flex w-full min-h-screen">
        <div className="p-10 flex flex-col gap-10 w-[50%]">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Objetivos
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Na primeira Sprint, o grupo focou em realizar o design da
              aplicação e pesquisas de alguns recursos que seriam necessários
              utilizar. Alguns desses recursos não tivemos contato antes, como
              serviços da Azure e o a funcionalidade de Login do usuário com uma
              conta Bosch. <br /> Após finalizar o protótipo do site, começamos
              a fase de pesquisas, e em seguida partimos para a codificação.
            </p>
          </div>
          <div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Tópicos trabalhados na Sprint
            </h2>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li className="text-blue-600">Pesquisa</li>
              <li className="text-purple-600">Design</li>
              <li className="text-pink-400">Front-End</li>
              <li className="text-gray-500">Banco de Dados</li>
              <li className="text-cyan-400">Back-End</li>
              <li className="text-orange-500">Devops</li>
            </ul>
          </div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Atividades em conjunto
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              As primeiras atividades nós optamos por realizá-las em conjunto,
              sendo elas: o <span className="text-purple-600">Design</span> da
              nossa aplicação, as{" "}
              <span className="text-blue-600">Pesquisas</span> e algumas
              definições de como seria o ecossitema do Smarthub. Foi uma etapa
              de muito planejamento, e após isso, começamos codificar a
              aplicação.
            </p>
          </div>
        </div>
        <div className="p-10 w-[45%] flex flex-col gap-10">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Ângelo
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Nós decidimos que eu ficaria responsável pelo{" "}
              <span className="text-pink-400">Front-End</span> e pela integração
              com o SSO da Bosch. <br /> Após toda a etapa de pesquisa, comecei
              a configurar o nosso{" "}
              <span className="text-orange-500">
                Ambiente de desenvolvimento
              </span>
              , optei por criar uma estrutura de monorepo, para que pudesse
              centralizar todo o código e aplicações em um único repositório.
              Após isso, comecei a codificar as telas de: Login, Home com todos
              os containers, Informações de container específico, Agenda e
              Informações de usuário.
              <br />
              Com as telas finalizadas, finalizei integrando com o{" "}
              <span className="text-cyan-400">Back-End</span>.
            </p>
          </div>
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Diego
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Eu fiquei responsável pelo Back-End, dividindo ele em alguns
              serviços. Iniciei com a etapa da pesquisa, buscando conhecer como
              poderíamos integrar os serviços da Azure com as APIs, após isso
              preparei todo o ambiente de desenvolvimento para começar a
              programar. Também realizei a modelagem do banco de dados, que foi
              desenvolvido com Microsoft SQL Server. A linguagem escolhida para
              ser utilizada nas APIs foi o Python, utilizando a biblioteca
              FastAPI, onde já desenvolvi os serviços de gerenciamento de
              temperaturas e de agendamentos dos contêineres.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
