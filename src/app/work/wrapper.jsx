import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import Link from 'next/link'

export default async function CaseStudyLayout({ children, _segments }) {
  let id = _segments.at(-2)
  let allCaseStudies = await loadMDXMetadata('work')
  let caseStudy = allCaseStudies.find((caseStudy) => caseStudy.id === id)
  let moreCaseStudies = allCaseStudies
    .filter((caseStudy) => caseStudy.id !== id)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Projeto" title={caseStudy.title} centered>
            <div className="flex flex-col gap-4">
              <p>{caseStudy.description}</p>
              {caseStudy.url && (
                <Link
                  href={caseStudy.url}
                  className="mx-auto w-fit rounded-full border border-primary px-4 py-2 text-sm hover:bg-primary hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acesse
                </Link>
              )}
            </div>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Cliente</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      {caseStudy.date && (
                        <>
                          <dt className="font-semibold">Ano</dt>
                          <dd>
                            <time dateTime={caseStudy.date.split('-')[0]}>
                              {caseStudy.date.split('-')[0]}
                            </time>
                          </dd>
                        </>
                      )}
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                      <dt className="font-semibold">Serviço</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Veja também"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  )
}
