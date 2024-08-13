interface CategoryItemProps {
  iconSrc: string
  label: string
}
export const CategoryItem = ({ iconSrc, label }: CategoryItemProps) => (
  <div className='flex flex-col items-center gap-3'>
    <div className='bg-white shadow-sm rounded-full p-4 cursor-pointer'>
      <img src={iconSrc} alt={label} className='' />
    </div>

    <span className='text-gray-600 font-bold text-sm'>{label}</span>
  </div>
)
