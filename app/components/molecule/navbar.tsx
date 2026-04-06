export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-4 border-b-2 border-[#e3e0dd]">
      <div className="size-12">
        <img src="public\Logo_New_York_Life.svg.png" />
      </div>
      <div>
        <a href="https://www.newyorklife.com/leads-agents/get-started-now">
          <button className="border-2 rounded h-12 px-7.5 font-bold">
            Get Started
          </button>
        </a>
        <button className="rounded h-12 px-7.5 font-bold text-[#999999]">
          Account
        </button>
      </div>
    </nav>
  );
}
