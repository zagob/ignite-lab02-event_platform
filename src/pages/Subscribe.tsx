import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscribe($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { data, loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION);

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    setName("");
    setEmail("");

    navigate("/event");
  }

  return (
    <div className="lg:px-10 min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col lg:px-0 justify-center items-center lg:flex-row lg:justify-between mt-20 mx-auto">
        <div className="max-w-[640px] px-4 lg:px-0 flex flex-col items-center">
          <Logo />
          <h1 className="mt-8 text-[2rem] lg:text-[2.5rem] leading-tight text-center lg:text-justify">
            Construa uma
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS.</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed text-center lg:text-justify">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="w-full lg:w-auto mt-5 lg:mt-0 p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-1xl lg:text-2xl mb-5 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code.png" className="mt-10" alt="" />
    </div>
  );
}
