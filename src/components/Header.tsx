import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

interface HeaderProps {
  onChangeStateNavbar: () => void;
  state: boolean;
}

export function Header({ onChangeStateNavbar, state }: HeaderProps) {
  return (
    <header className="py-5 flex items-center justify-between px-4 lg:px-0 lg:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="block lg:hidden">
        {state ? (
          <X
            onClick={() => onChangeStateNavbar()}
            size={32}
            className="cursor-pointer text-blue-300 hover:text-blue-200 transition-colors"
          />
        ) : (
          <List
            onClick={() => onChangeStateNavbar()}
            size={32}
            className="cursor-pointer text-blue-300 hover:text-blue-200 transition-colors"
          />
        )}
      </div>
    </header>
  );
}
