interface FooterLinkListProps {
  links: string[]
}

export function FooterLinkList({ links }: FooterLinkListProps) {
  return (
    <ul className='space-y-2'>
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  )
}
