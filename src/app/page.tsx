import type { FunctionComponent } from "react";

type pageProps = {};

export const Home: FunctionComponent<pageProps> = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <p>Hello World !</p>
    </div>
  );
};

export default Home;
