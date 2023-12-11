import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto py-14">
        <div className="text-center">
          <h1 className="text-[8em] font-medium tracking-wider text-gray-900 sm:text-[10em] md:text-[12em] lg:text-[16em]">
            <span className="text-white">LEX</span>
            <span>ARI</span>
          </h1>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-light leading-8 text-gray-100 md:text-2xl lg:text-3xl">
          Harnessing AI and advanced research innovations to enable legal
          professionals.
        </p>
        <p className="mt-4 text-xl  font-light leading-8 text-gray-100 md:text-2xl lg:text-3xl">
          Simple yet powerful.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/waitlist"
            className="rounded-full border-2 border-white bg-transparent px-3.5 py-2.5 text-sm text-primary-foreground text-black shadow duration-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join the Waitlist
          </Link>
          {/*<Link*/}
          {/*  to="/discovery"*/}
          {/*  className="rounded-full border-2 border-white bg-transparent text-primary-foreground px-3.5 py-2.5 text-sm text-black shadow duration-300 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
          {/*>*/}
          {/*  Discovery*/}
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
}
export default Hero;
