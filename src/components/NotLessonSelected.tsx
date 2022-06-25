import { RocketLaunch } from "phosphor-react";

export function NotLessonSelected() {
  return (
    <div className="flex w-[1100px] flex-col  items-center justify-center ">
      <RocketLaunch size={200} weight="fill" className="text-gray-500" />
      <h2 className="text-3xl text-gray-500">Selecione uma aula ao lado</h2>
    </div>
  );
}
