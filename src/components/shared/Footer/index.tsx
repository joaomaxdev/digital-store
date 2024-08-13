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
