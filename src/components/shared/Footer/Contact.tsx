import { FooterSection } from './Section'

export function FooterContact() {
  return (
    <FooterSection className='md:max-w-[240px]' title='Contato'>
      <address className='not-italic'>
        Av. Santos Dumont, 1510 - 1 andar <br />
        Aldeota, Fortaleza - CE, 60150-161 <br />
        (85) 3051-3411
      </address>
    </FooterSection>
  )
}
