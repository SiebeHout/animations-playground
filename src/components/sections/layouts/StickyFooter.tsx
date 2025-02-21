import clsx from "clsx";

export default function StickyFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <footer
      aria-label="Site footer"
      className={clsx(
        "relative isolate [clip-path:polygon(0%_0,_100%_0%,_100%_100%,_0_100%)]",
        className
      )}
    >
      <div className="fixed bottom-0 w-full">{children}</div>
    </footer>
  );
}

export function ExampleFooter() {
  return (
    <div className="container w-full flex flex-col items-center justify-center">
      <nav aria-label="Site map" className="w-full">
        <ul className="w-full flex justify-evenly text-[2vw]">
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
          <li>
            <a href="#">link</a>
          </li>
        </ul>
      </nav>
      <p className="text-[15vw]">STONE</p>
    </div>
  );
}
