import { Button, GithubIcon, LinkedinIcon } from "@/components";

export default function Home() {
  return (
    <div className="container">
      <span className="block text-xl text-muted-foreground lg:text-3xl font-mono font-medium mb-2">
        desenvolvimento & educação
      </span>
      {/* arrumar line height */}
      <h1 className="text-3xl lg:text-[100px] lg:leading-tight mb-10">
        Tecnologia e expertise <br /> para seu projeto
      </h1>

      <aside className="flex items-center gap-4">
        <Button asChild>
          <a
            href="https://api.whatsapp.com/send?phone=5551981838118&text=Ol%C3%A1!"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar uma conversa
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/marcelopoars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <a
            href="https://www.linkedin.com/in/marcelopoars/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </Button>
      </aside>
    </div>
  );
}
