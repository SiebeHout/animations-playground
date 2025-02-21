import Image from "next/image";

export type Fund = {
  title: string;
  text: string;
  themes: string[];
  image: string;
  downloadLink: string;
};

const data = {
  title: "Funds",
  text: `
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          odio commodi distinctio quis, provident suscipit necessitatibus
          officiis labore facilis veritatis harum voluptatibus corporis illum
          voluptates a at quisquam id voluptatum.
        `,
  funds: [
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
            numquam itaque exercitationem odit beatae, neque distinctio officiis, 
            ut sunt incidunt laboriosam!
            `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
              numquam itaque exercitationem odit beatae, neque distinctio officiis, 
              ut sunt incidunt laboriosam!
              `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
              numquam itaque exercitationem odit beatae, neque distinctio officiis, 
              ut sunt incidunt laboriosam!
              `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
    {
      title:
        "Invest in Equality: The Power of Gender-Inclusive Finance | SANAD",
      text: `
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dignissimos pariatur harum quis magni. Repellat deleniti alias ea 
              numquam itaque exercitationem odit beatae, neque distinctio officiis, 
              ut sunt incidunt laboriosam!
              `,
      themes: ["Investment theme", "Geographical location", "Asset classes"],
      image:
        "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      downloadLink: "#",
    },
  ],
};

export default function CardRowGridV2() {
  return (
    <section className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-5 py-16 container">
        <div className="flex flex-col max-w-[70ch] text-balance">
          <h2 className="my-3 text-4xl">{data.title}</h2>
          <p>{data.text}</p>
        </div>
        {/* Room for more buttons if needed */}
        <div className="flex gap-4">
          <button className="text-sm px-4 py-2 bg-zinc-800 inline-flex items-center gap-2 text-zinc-50 hover:bg-zinc-900/90  [&_svg]:size-6 rounded-full">
            Learn more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-right"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="m12 16 4-4-4-4" />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {data.funds.map((fund, index) => (
          <FundCard fund={fund} key={index} />
        ))}
      </div>
    </section>
  );
}

export function FundCard({ fund }: { fund: Fund }) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 w-full mx-auto border-black border-t last:border-b hover:bg-zinc-700 hover:text-white transition-all duration-500 ease-in-out">
      <div className="col-span-1 md:col-span-1 bg-black relative h-48 md:h-64 w-full md:w-[300px] xl:w-[500px] md:group-hover:[clip-path:polygon(0_0,100%_0%,100%_100%,0%_100%)] md:[clip-path:polygon(0_0,0_0,0_100%,0%_100%)] transition-all duration-500 object-cover">
        <Image fill src={fund.image} alt="Fund image" />
      </div>
      <div className="col-span-1 md:col-span-4 md:transform md:-translate-x-4 xl:translate-x-8 md:group-hover:translate-x-[150px] xl:group-hover:translate-x-[300px] transition-all duration-500 flex">
        <div className="flex pl-4 md:pl-24 flex-col pt-6">
          <p className="text-xs">
            {fund.themes.toString().replaceAll(",", " | ")}
          </p>
          <h3 className="text-xl text-balance">{fund.title}</h3>
        </div>
      </div>
      <p className="text-xs col-span-1 md:col-start-8 md:col-span-2 pt-6 px-4 md:px-0">
        {fund.text}
      </p>
      <div className="flex flex-col col-span-1 md:col-span-2 items-end pt-6 pr-4 md:pr-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-arrow-right group-hover:-rotate-45 transition-all duration-500"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="m12 16 4-4-4-4" />
        </svg>
      </div>
    </div>
  );
}
