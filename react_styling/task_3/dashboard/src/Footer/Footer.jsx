import { getCurrentYear, getFooterCopy } from "../utils/utils";

function Footer() {
  return (
    <footer className="App-footer mt-auto shrink-0 border-t-2 border-[var(--color-main)] pt-[5px] text-center text-[5px] italic">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(false)}
      </p>
    </footer>
  );
}

export default Footer;
