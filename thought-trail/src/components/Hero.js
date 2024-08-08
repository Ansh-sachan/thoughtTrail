export default function Hero() {
  return (
    <>
      <div className="container hero mx-auto p-4">
        <h1 className="flex text-white text-3xl basis-2/3 pt-12 flex-grow-0 flex-shrink font-extrabold font-serif">
          Every idea begins with a single step. Start your journey with
          ThoughtTrail
        </h1>
        <div className="flex justify-center relative">
          <button className="bg-white rounded-lg px-3 py-2 top-20 absolute">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
