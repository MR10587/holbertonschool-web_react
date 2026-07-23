import holbertonLogo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <header className="App-header flex items-center gap-4 py-6">
      <img
        src={holbertonLogo}
        alt="holberton logo"
        className="h-24 w-auto shrink-0 object-contain"
      />

      <h1 className="text-4xl font-bold text-[var(--color-main)]">
        School Dashboard
      </h1>
    </header>
  );
}

export default Header;
