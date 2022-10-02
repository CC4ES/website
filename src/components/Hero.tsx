export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover bg-no-repeat bg-blend-multiply bg-bottom">
      <div className="py-16 px-4 md:px-16 xl:px-36 w-full h-80">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">Coalition Center for</span>{" "}
          <span className="block text-green-500">
            Environmental Sustainability
          </span>
        </h1>
        <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Linking Communities for Regenerative Sustainability
        </p>
      </div>
    </section>
  );
}
