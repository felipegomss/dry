import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { HighlighterItem, HighlightGroup } from "./highlighter";
import { Particles } from "./particles";

const services = [
  {
    name: "Tráfego Pago",
    description:
      "Atraímos o público certo para seu negócio com campanhas otimizadas de Google Ads, Facebook Ads e outras plataformas. Nossa equipe gerencia suas campanhas para maximizar ROI.",
    features: [
      "Gestão completa de campanhas",
      "Otimização de anúncios",
      "Relatórios detalhados de performance",
      "Análise contínua de público-alvo",
    ],
    cta: "Saiba mais",
    link: "/servicos/trafego-pago",
  },
  {
    name: "Business Intelligence e Análise de Dados",
    description:
      "Transforme dados em insights estratégicos com nosso serviço de BI. Analisamos suas campanhas e operações para fornecer relatórios detalhados e dashboards customizados.",
    features: [
      "Relatórios detalhados e em tempo real",
      "Dashboard customizado",
      "Análise de KPIs e métricas importantes",
      "Sugestões de otimização baseadas em dados",
    ],
    cta: "Descubra o poder ",
    link: "/servicos/bi-analise-dados", // Atualize com o link correto
  },
  {
    name: "Software Sob Medida",
    description:
      "Desenvolvemos soluções de software personalizadas para as necessidades específicas do seu negócio, como landing pages, sistemas e integrações.",
    features: [
      "Desenvolvimento de Landing Pages",
      "Integrações com CRM",
      "Automação de processos",
      "Desenvolvimento de sistemas personalizados",
    ],
    cta: "Solicite agora",
    link: "/servicos/software-sob-medida", // Atualize com o link correto
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="relative ">
      {/* Radial gradient */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-muted-foreground rounded-full blur-[120px] opacity-50" />
        </div>
      </div>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <div>
              <div className="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-muted">
                Preços e Planos
              </div>
            </div>
            <h2 className="pb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
              Simples e transparente
            </h2>
            <p className="text-lg text-zinc-400">
              Conheça nossos planos e escolha o que melhor se encaixa nas
              necessidades do seu negócio.
            </p>
          </div>
          {/* Pricing tabs */}
          <HighlightGroup className="grid h-full gap-6 md:grid-cols-12 group">
            {/* Box #1 */}

            {services.map((service, i) => (
              <div
                key={service.name}
                className="flex flex-1 h-full md:col-span-6 lg:col-span-4 group/item"
                data-aos="fade-down"
              >
                <HighlighterItem>
                  <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
                    <Particles
                      className="absolute inset-0 transition-opacity duration-1000 ease-in-out -z-10 opacity-10 group-hover/item:opacity-100"
                      quantity={(i + 1) ** 2 * 10}
                      color={["#34d399", "#fde047", "#f43f5e"][i]}
                      vy={-0.2}
                    />
                    <div className="flex flex-col flex-1 h-full">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 w-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none left-1/2 -z-10 aspect-square"
                        aria-hidden="true"
                      >
                        <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}

                      <div className="flex flex-col justify-between flex-1 h-full p-8">
                        <div>
                          <h3
                            id={service.name}
                            className="text-lg font-semibold leading-8 text-white"
                          >
                            {service.name}
                          </h3>

                          <p className="mt-4 text-sm leading-6 text-zinc-400">
                            {service.description}
                          </p>
                          <ul
                            role="list"
                            className="mt-8 space-y-3 text-sm leading-6 text-zinc-300"
                          >
                            {service.features.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                <Check
                                  className={cn("h-6 w-5 flex-none", {
                                    "text-emerald-400": i === 0,
                                    "text-yellow-300": i === 1,
                                    "text-rose-500": i === 2,
                                  })}
                                  aria-hidden="true"
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          className="mt-16 w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                          href={service.link}
                        >
                          {service.cta}
                          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            ))}
            <div
              className="h-full md:col-span-6 lg:col-span-12 group/item"
              data-aos="fade-down"
            >
              <HighlighterItem>
                <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
                  <Particles
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out -z-10 opacity-10 group-hover/item:opacity-100"
                    quantity={200}
                  />
                  <div className="flex flex-col">
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 w-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none left-1/2 -z-10 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
                    </div>
                    {/* Text */}

                    <div className="p-8">
                      <h3 className="text-lg font-semibold leading-8 text-white">
                        Personalização de Soluções
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-zinc-400">
                        Transforme as necessidades do seu negócio em soluções
                        sob medida! Combine nossos serviços de Tráfego Pago,
                        Business Intelligence, Análise de Dados e
                        desenvolvimento de software personalizado para garantir
                        o crescimento e a eficiência que você precisa.
                      </p>

                      <div className="mt-16">
                        <Link
                          className="flex items-center gap-2 font-medium transition duration-150 ease-in-out whitespace-nowrap text-zinc-100 hover:text-white group"
                          href="/custom-packages"
                        >
                          Crie a Solução Ideal para Seu Negócio
                          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </div>
      </div>
    </section>
  );
};
