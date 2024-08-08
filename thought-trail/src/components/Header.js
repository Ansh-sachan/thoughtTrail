function Header() {
  return (
    <>
      <nav className="container bg-black px-4 py-3 text-white mx-auto">
        <div className="flex justify-between">
          <div className="logo font-extrabold text-2xl">ThoughtTrail</div>
          <ul className="flex flex-wrap items-center">
            <li className="ml-3">Home</li>
            <li className="ml-3">About</li>
            <li className="ml-3">Contact Us</li>
            <li className="border ml-3 bg-slate-500 rounded p-1">Sign In</li>
            <li className="border ml-3 bg-slate-500 rounded p-1">Sign Up</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
