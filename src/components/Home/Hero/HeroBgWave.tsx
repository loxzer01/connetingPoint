import Image from "next/image";

// components/hero/HeroBgWave.tsx
export default function HeroBgWave() {
    return (
      <div className="absolute bottom-0 left-0 right-0 z-[-1]">
        <Image
          src="/svgs/shape.svg"
          alt="shape"
          className="w-full"
          width={1920}
          height={100}
        />
      </div>
    )
  }
  