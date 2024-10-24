import { Button } from "@/components/ui/button";
import notFoundImage from "@/assets/logo.svg"; // Substitua pelo caminho correto da sua imagem
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="text-center">
        <img
          src={notFoundImage}
          alt="Not Found"
          className="w-48 h-auto mx-auto mb-6"
        />
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-600 mb-4">
          Página Não Encontrada
        </h2>
        <p className="text-gray-500 mb-8">
          A página que você está procurando não pôde ser encontrada. Pode ter
          sido movida ou excluída.
        </p>
        <Link to="/">
          <Button className="bg-[#c92071] text-white hover:bg-pink-600 py-2 px-4 rounded-lg transition duration-300">
            Voltar para a Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
