import holbertonLogo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <header className="App-header flex items-center gap-4 border-b-2 border-[var(--color-main)] py-0">
      <img
        src={holbertonLogo}
        alt="holberton logo"
        className="h-[90px] w-auto shrink-0 object-contain"
      />

      <h1 className="text-3xl font-bold text-[var(--color-main)]">
        School Dashboard
      </h1>
    </header>
  );
}

export default Header;
