export type Comment = {
  content: string
  client: string
  role: string
}

export const commentsData: Comment[] = [
  {
    content:
      'Trabalhar com Marcelo Pereira foi uma experiência excelente. Cumpriu todos os prazos combinados, manteve um valor justo e sempre entregou exatamente o que acordamos. Além disso, teve a paciência e atenção para me ouvir e entender minhas necessidades, conseguindo resolver problemas que outros profissionais não conseguiram. Recomendo de olhos fechados pelo profissionalismo e pela capacidade de transformar o que era difícil em soluções práticas e eficazes.',
    client: 'Marcelo Solimeo',
    role: 'Plataforma Jarvis Leilões',
  },
  {
    content:
      'A dedicação e o profissionalismo do Marcelo são notáveis desde o primeiro contato. Ele não apenas entendeu nossas necessidades, mas também sugeriu soluções diferentes para a funcionalidade e manutenção do nosso site. Ficamos muito contentes com o resultado. Obrigada pelo excelente trabalho!',
    client: 'Luísa Trento',
    role: 'Diretora de marketing na CPD',
  },
  // {
  //   content:
  //     'Graças ao site criado pelo Marcelo, estou recebendo muitos novos clientes de Canoas e região. Eles estão encontrando meu número no site e chegando até mim. Adorei a sugestão de reformas na hora, que trouxe ainda mais clientes. Meu negócio cresceu muito, só tenho a agradecer!',
  //   client: 'Elaine Gouvêa',
  //   role: 'Costureira',
  // },
]
