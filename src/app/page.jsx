import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import KpiCard from '@/components/KpiCard'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import hero from '@/images/hero.png'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import Image from 'next/image'
import Link from 'next/link'

export const clients = [
  ['Santozane', 'https://santozane.com.br'],
  ['Jacoseg', 'https://jacoseg.com.br'],
  ['Bianca Vieira', 'https://bianca.psc.br'],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Incríveis clientes que confiam em nós
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, url]) => (
              <li key={client}>
                <FadeIn>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl font-bold text-white hover:text-primary"
                  >
                    {client}
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Tecnologia sob medida para o futuro do seu negócio"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Usamos a tecnologia como uma aliada para transformar potencial em
          resultados. Criamos soluções personalizadas que acompanham seu
          crescimento e conectam sua marca ao mercado com eficiência e inovação.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <div className="h-16 w-16">
                      <Image
                        src={caseStudy.logo}
                        alt={caseStudy.client}
                        className="w-full grayscale"
                        unoptimized
                      />
                    </div>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Projeto</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Ajudamos você a identificar, explorar e responder a novas oportunidades."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Estamos prontos para transformar ideias em soluções inovadoras que
          realmente fazem a diferença.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Landing Pages">
              Criamos landing pages atraentes e otimizadas para conversão,
              projetadas para captar a atenção do seu público-alvo e maximizar
              resultados.
            </ListItem>
            <ListItem title="Tráfego Pago">
              Gerenciamos suas campanhas de tráfego pago com estratégias
              eficientes, otimizando seu investimento e aumentando a
              visibilidade da sua empresa e consolidando a sua marca.
            </ListItem>
            <ListItem title="Software Sob Medida">
              Desenvolvemos soluções personalizadas que atendem exatamente às
              suas necessidades, acompanhando seu crescimento e facilitando seus
              processos.
            </ListItem>
            <ListItem title="Business Intelligence (BI)">
              Transforme seus dados em vantagem competitiva com insights
              precisos e prontos para ação. Nossas soluções de BI oferecem a
              clareza necessária para decisões estratégicas e direcionadas.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are developer studio working at the intersection of design and technology.',
}

const KPIS = [
  {
    prefix: 'cerca de',
    title: '75% dos usuários',
    text: 'não passam da primeira página de resultados de busca',
  },
  {
    prefix: 'multiplicado em até',
    title: '5x mais alcance',
    text: 'com uma presença digital otimizada, atraindo um público maior',
  },
  {
    prefix: 'mais de',
    title: '55% de confiança',
    text: 'percebida por consumidores em marcas com forte presença online',
  },
]

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="inline-block font-display text-3xl font-medium [text-wrap:balance] sm:text-7xl">
              Don&#39;t repeat yourself.
            </h1>
            <p className="text-xl text-neutral-600">
              O melhor parceiro na evolução digital do seu negócio.
            </p>

            <section className="space-y-2">
              <div className="flex flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-semibold uppercase tracking-tight ">
                    aumento de até 70%
                  </h2>
                  <p className="font-semibold">
                    nas conversões com presença digital
                  </p>
                </div>
                <Button
                  href="/contact"
                  className="flex flex-1 items-center justify-center whitespace-nowrap text-xl"
                >
                  Transforme seu potencial
                </Button>
              </div>
              <p className="py-2 text-foreground ">
                Com um olhar afiado para inovação e eficiência, desenvolvemos
                soluções para maximizar seu potencial e fortalecer sua marca.
                Transformamos o seu ecossistema digital em alta performance e
                resultados concretos.
              </p>
            </section>
          </div>
          <div className={'h-full w-full '}>
            <Image src={hero} alt="Laptop" className="w-full" />
          </div>
        </FadeIn>
        <FadeIn className="grid gap-8 lg:mt-16 lg:grid-cols-3">
          {KPIS.map((kpi) => (
            <KpiCard {...kpi} key={kpi.title} />
          ))}
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
