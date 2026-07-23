import WithLogging from "../HOC/WithLogging";

function Login() {
  return (
    <div className="App-body flex-1 border-t-2 border-t-[var(--color-main)] px-0 py-2 text-[10px]">
      <p className="mb-4 text-[10px]">Login to access the full dashboard</p>

      <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[10px]">
        <label htmlFor="email" className="whitespace-nowrap">
          Email:
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="h-5 w-[96px] rounded border border-gray-400 px-1 text-[10px] leading-none"
        />

        <label htmlFor="password" className="whitespace-nowrap">
          Password:
        </label>

        <input
          type="password"
          id="password"
          name="password"
          className="h-5 w-[96px] rounded border border-gray-400 px-1 text-[10px] leading-none"
        />

        <button
          type="button"
          className="flex h-5 items-center justify-center rounded border border-gray-400 px-2 text-[10px] leading-none"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default WithLogging(Login);
