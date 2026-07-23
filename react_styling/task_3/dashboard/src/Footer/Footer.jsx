import { getCurrentYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <footer className="App-footer mt-auto shrink-0 border-t-2 border-t-[var(--color-main)] pt-2 text-center text-[10px] italic">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(false)}
      </p>
    </footer>
  );
}

export default Footer;
