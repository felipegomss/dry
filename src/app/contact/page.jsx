'use client'

import Link from 'next/link'
import { useId, useState } from 'react'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { maskPhone } from '@/lib/mask'
import clsx from 'clsx'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className={clsx(
          'peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl',
          props.erros && 'border-red-500'
        )}
        onFocus={(e) => props.setErros({ ...props.erros, [props.name]: false })}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, value, checked, onChange }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-primary focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('company')
  const [erros, setErros] = useState({})
  const [emailSet, setEmailSet] = useState(false)

  const handleRadioChange = (e) => {
    setType(e.target.value)
    if (e.target.value === 'person') {
      setCompany('')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      !email ||
      !phone ||
      !message ||
      !name ||
      (!company && type === 'company')
    ) {
      setErros({
        email: !email,
        phone: !phone,
        message: !message,
        name: !name,
        company: type === 'company' && !company,
      })
      return
    }
    setEmailSet(true)
  }

  if (emailSet) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-neutral-300 px-6 py-8 lg:order-last">
        <PageIntro eyebrow="Obrigado!" title="Agradecemos seu contato">
          <p>
            Recebemos sua mensagem e entraremos em contato em breve. Enquanto
            isso, que tal dar uma olhada em nossos projetos?
          </p>
          <div className="mt-4 space-x-2">
            <Button href="/work">Ver projetos</Button>

            <Button onClick={() => setEmailSet(false)} secondary>
              Enviar outro email
            </Button>
          </div>
        </PageIntro>
      </div>
    )
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Vamos conversar sobre seu projeto!
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Você é uma
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Empresa"
                  name="type"
                  value="company"
                  checked={type === 'company'}
                  onChange={handleRadioChange}
                />
                <RadioInput
                  label="Pessoa física"
                  name="type"
                  value="person"
                  checked={type === 'person'}
                  onChange={handleRadioChange}
                />
              </div>
            </fieldset>
          </div>
          {type === 'company' && (
            <TextInput
              label="Empresa"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              erros={erros.company}
              setErros={setErros}
            />
          )}
          <TextInput
            label="Nome"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            erros={erros.name}
            setErros={setErros}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            erros={erros.email}
            setErros={setErros}
          />
          <TextInput
            label="Telefone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            erros={erros.phone}
            setErros={setErros}
          />
          <TextInput
            label="Mensagem"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            erros={erros.message}
            setErros={setErros}
          />
        </div>
        <Button type="submit" className="mt-10">
          Vamos crescer juntos!
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Nossas localidades
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Valorizamos a praticidade do online, mas também estamos disponíveis para
        reuniões presenciais nas cidades onde atuamos. Fale conosco para agendar
        um encontro!
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Suporte', 'suporte@drydigital.com.br'],
            ['Contato', 'contato@drydigital.com.br'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nos siga
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contate-nos" title="Vamos crescer juntos!">
        <p>Mal podemos esperar para ouvir sobre o seu projeto.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
