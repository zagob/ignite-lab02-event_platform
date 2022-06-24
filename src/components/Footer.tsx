export function Footer() {
  return (
    <div className="z-0 flex flex-col lg:flex-row max-w-[930px] items-center justify-between py-5 px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img src="/src/assets/Logo-rockeat.svg" />
        <span className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>

      <span className="text-gray-300">Politicas de privacidade</span>
    </div>
  );
}
