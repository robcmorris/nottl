import type { NextPage } from "next";
import SEO from "../components/SEO";

const About: NextPage = () => {
  return (
    <>
      <SEO
        title="About Me"
        url="https://nottl.io/about"
        description="About Me Page"
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            About<span className="text-[hsl(280,100%,70%)]">.</span>Me
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">Coming Soon</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
