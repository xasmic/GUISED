import { brandValues } from "@/lib/site";

export function BrandValues() {
  return (
    <section
      className="border-t border-hygen-text/10 bg-hygen-bg text-hygen-text"
      aria-label="Brand values"
    >
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 px-0 py-14 min-[800px]:grid-cols-3 min-[800px]:gap-12 min-[800px]:py-[72px]">
        {brandValues.map((item) => (
          <div key={item.title} className="text-center">
            <h2 className="font-display m-0 mb-4 text-[13px] font-medium tracking-[0.16em] uppercase text-hygen-text min-[800px]:text-[14px] min-[800px]:tracking-[0.14em]">
              {item.title}
            </h2>
            <p className="font-body mx-auto m-0 max-w-[22rem] text-[16px] leading-[1.65] text-hygen-text/80 min-[800px]:text-[17px]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
