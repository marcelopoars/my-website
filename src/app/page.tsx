import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 p-12">
      <Image
        src="/logo-marcelo-pereira-frontend-developer.svg"
        alt="Logo Marcelo Pereira"
        width={196}
        height={49}
        priority
      />

      <div className="">
        <span className="text-xl lg:text-3xl text-[#9C9C9C]">
          desenvolvimento & educação
        </span>
        <h1 className="text-3xl lg:text-8xl">
          Tecnologia e expertise <br /> para seu projeto
        </h1>
      </div>
    </main>
  );
}
