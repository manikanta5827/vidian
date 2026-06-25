import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const images = [
  {
    src: "/img/silicon_wafer.jpg",
    alt: "Macro photography of a highly detailed silicon wafer",
  },
  {
    src: "/img/cleanroom_lab.jpg",
    alt: "Modern high-tech semiconductor cleanroom laboratory",
  },
  {
    src: "/img/processor_board.jpg",
    alt: "Close-up of a complex microchip processor on a sleek printed circuit board",
  },
];

export function Gallery() {
  return (
    <section className="bg-card/40 py-12 lg:py-20 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <StaggerContainer className="grid gap-4 sm:grid-cols-3">
          {images.map((img, i) => (
            <StaggerItem key={i} className="relative overflow-hidden rounded-2xl border border-border shadow-md group h-[250px] sm:h-[300px] lg:h-[400px]">
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
