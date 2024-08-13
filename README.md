# GT Digital Store

Este projeto de front-end foi criado durante o curso de Desenvolvimento Web para colocar em prática tudo o que aprendemos. Utilizamos tecnologias modernas como React, TypeScript, TailwindCSS e ShadcnUI, seguindo boas práticas de desenvolvimento.

## Apresentação do Projeto de Front-end

### Introdução

Bem-vindos ao projeto de Front-end do curso de Desenvolvimento Web! Este projeto é uma oportunidade para aplicar os conhecimentos adquiridos ao longo do curso, utilizando tecnologias modernas e boas práticas de desenvolvimento. O projeto tem como base a [documentação do projeto Digital Store](https://github.com/digitalcollegebr/projeto-digital-store) e o design visual disponível no [Figma](https://www.figma.com/design/cfb4F7ZXMFQmvmTn3PKI4z/DRIP-STORE---DIGITAL-COLLEGE?node-id=22-30).

### Objetivo

O objetivo deste projeto é desenvolver uma aplicação web completa utilizando React. Foram implementadas funcionalidades essenciais, seguindo os requisitos mínimos descritos na documentação, para entregar um projeto final que será avaliado com base em diversos critérios.

### Definição de Rotas

As rotas da aplicação são definidas utilizando o `react-router-dom`. O `RootLayout` é usado como o layout principal que envolve todas as rotas, garantindo que o `Header` e o `Footer` estejam presentes em todas as páginas. As páginas principais da aplicação incluem a página inicial, a página de listagem de produtos, a página de visualização do produto e a página de erro.

```tsx
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { RootLayout as Root } from './layouts/Root'

import { ProductPage } from './pages/Product'
import { ProductsPage } from './pages/Products'
import { NotFoundPage } from './pages/NotFound'
import { HomePage } from './pages/Home'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />} errorElement={<NotFoundPage />}>
        <Route index element={<HomePage />} />
        <Route path='/produtos' element={<ProductsPage />} />
        <Route path='/produtos/:id' element={<ProductPage />} />
      </Route>
    </>
  )
)
```

## Componentes Principais

### Componente de Layout

O componente `RootLayout` é responsável por envolver todas as páginas definidas nas rotas da aplicação. Ele garante que os componentes `Header` e `Footer` estejam presentes em todas as páginas, fornecendo uma estrutura consistente de layout. Além disso, o componente `Toaster` é utilizado para exibir notificações toast.

```tsx
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { Toaster } from 'sonner'

export function RootLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <Toaster richColors />
    </>
  )
}
```

### Header

O componente `Header` é utilizado em toda a aplicação para fornecer navegação entre as páginas principais.

```tsx
import { Search } from './Search'
import { Nav } from './Nav'
import { RegisterButton } from '../RegisterButton'
import { LoginButton } from '../LoginButton'
import { Logo } from '../Logo'
import { ShoppingCart } from './ShoppingCart'

export function DesktopHeader() {
  return (
    <header className='bg-white shadow-md border md:px-24 py-8'>
      <div className='mx-auto flex items-center gap-10'>
        <div className='flex-1 flex items-center space-x-4'>
          <Logo variant='default' className='h-11' />
          <Search />
        </div>

        <div className='flex items-center space-x-16'>
          <div className='space-x-4'>
            <RegisterButton />
            <LoginButton />
          </div>

          <ShoppingCart />
        </div>
      </div>

      <Nav />
    </header>
  )
}
```

### Footer

O componente `Footer` é utilizado em toda a aplicação para fornecer informações de rodapé.

```tsx
import { Separator } from '@/components/ui/separator'
import { FooterSocials } from './Socials'
import { FooterLinkList } from './LinkList'
import { FooterSection } from './Section'
import { FooterContact } from './Contact'
import { Logo } from '../Logo'

import { FOOTER_INFO_LINKS_1, FOOTER_INFO_LINKS_2 } from '@/constants'

export function Footer() {
  return (
    <footer className='bg-neutral-900 text-neutral-300 py-12 px-0 md:px-24'>
      <div className='px-5 md:px-0'>
        <div className='flex flex-col gap-10 md:flex-row md:justify-between'>
          <div className='flex flex-col items-start md:max-w-[307px] '>
            <Logo variant='footer' className='h-7 md:h-11 mb-8' />

            <p className='md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <FooterSocials />
          </div>

          <div className='md:mt-0 flex gap-8 md:gap-0 md:space-x-16'>
            <FooterSection title='Informação'>
              <FooterLinkList links={FOOTER_INFO_LINKS_1} />
            </FooterSection>

            <FooterSection title='Informação'>
              <FooterLinkList links={FOOTER_INFO_LINKS_2} />
            </FooterSection>
          </div>

          <div className='mt-8 md:mt-0'>
            <FooterContact />
          </div>
        </div>

        <Separator className='mt-8 bg-neutral-700' />
        <div className='text-center pt-4'>
          &copy; {new Date().getFullYear()} Digital College
        </div>
      </div>
    </footer>
  )
}
```

### Banner

O componente `Banner` é utilizado na página inicial para destacar promoções ou mensagens importantes.

```tsx
import { Button } from '@/components/ui/button'

interface BannerProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  imageSrc: string
  ornamentSrc?: string
  altText: string
}

export function Banner({
  title,
  subtitle,
  description,
  buttonText,
  imageSrc,
  ornamentSrc,
  altText,
}: BannerProps) {
  return (
    <section className='text-center md:text-start p-5 pb-10 flex flex-col md:flex-row md:items-center md:justify-between md:py-10 md:px-24 relative overflow-hidden'>
      {ornamentSrc && (
        <img
          src={ornamentSrc}
          alt='Imagem ornamento, partículas brilhantes'
          className='h-36 w-36 absolute md:top-20 md:right-9 right-0 transform translate-x-1/2 md:translate-x-0 z-0'
        />
      )}

      <div className='md:w-1/2 order-2 md:order-1 flex flex-col md:items-start gap-5'>
        <h2 className='text-primary font-bold text-sm md:text-base'>
          {subtitle}
        </h2>
        <h1 className='text-4xl font-bold'>
          {title}{' '}
          <span role='img' aria-label='fire'>
            🔥
          </span>
        </h1>
        <p className='text-gray-600'>{description}</p>
        <Button className='text-white px-8 py-3 w-full md:w-56 h-12'>
          {buttonText}
        </Button>
      </div>

      <div className='md:w-full md:order-2 z-10'>
        <img src={imageSrc} alt={altText} className='w-full h-auto' />
      </div>
    </section>
  )
}
```

## Requisitos, Instalação e Execução do Projeto

### Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados em seu ambiente de desenvolvimento:

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- Git

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/gafanhotoalexandre/gt-digital-store.git
   ```

2. **Instale as dependências**

   Navegue até o diretório do projeto e execute o comando de instalação:

   ```bash
   cd gt-digital-store
   npm install
   ```

## Execução

1. **Execute o projeto em modo de desenvolvimento**

   Utilize npm ou Yarn para iniciar o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

2. **Acesse a aplicação**

   Abra o navegador e acesse o endereço:

   ```
   http://localhost:5173
   ```

3. **Build para produção**

   Para gerar uma versão otimizada da aplicação para produção, utilize o comando:

   ```bash
   npm run build
   ```

4. **Preview da Build**

   Para visualizar a versão de produção gerada, utilize o comando:

   ```bash
   npm run preview
   ```

### Considerações Finais

Este projeto foi desenvolvido como parte de um curso de Desenvolvimento Web, utilizando tecnologias modernas como React, TypeScript, TailwindCSS e ShadcnUI. Ele oferece uma base sólida para a construção de aplicações web completas e escaláveis.

Para mais informações acerca do projeto, consulte a [documentação oficial](https://github.com/digitalcollegebr/projeto-digital-store) e explore os links úteis para estudo.

---

A aplicação está disponível para acesso no seguinte link: [GT Digital Store](https://gt-digital-store.vercel.app/).

**Nota**: Agradeço a oportunidade de desenvolver este projeto e estou aberto a feedbacks para aprimorar ainda mais minhas habilidades e conhecimentos.
