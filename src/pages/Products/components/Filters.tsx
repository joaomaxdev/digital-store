import { FilterSection } from './FilterSection'

const brands = ['Adidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma']
const categories = ['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida']
const genders = ['Masculino', 'Feminino', 'Unisex']
const states = ['Novo', 'Usado']

export default function Filters() {
  return (
    <section className='flex flex-col gap-5'>
      <FilterSection title='Marca' options={brands} inputType='checkbox' />
      <FilterSection
        title='Categoria'
        options={categories}
        inputType='checkbox'
      />
      <FilterSection title='Gênero' options={genders} inputType='checkbox' />
      <FilterSection
        title='Estado'
        options={states}
        inputType='radio'
        name='estado'
      />
    </section>
  )
}
