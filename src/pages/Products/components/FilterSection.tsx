import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface FilterSectionProps {
  title: string
  options: string[]
  inputType: 'checkbox' | 'radio'
  name?: string
}

export function FilterSection({
  title,
  options,
  inputType,
  name,
}: FilterSectionProps) {
  return (
    <div>
      <h3 className='text-sm md:text-lg font-bold mb-2 text-zinc-700'>
        {title}
      </h3>
      <div className='flex flex-col gap-2 text-zinc-700'>
        {options.map((option, index) => (
          <Label key={index} className='flex items-center gap-2 font-normal'>
            {inputType === 'checkbox' ? (
              <Checkbox className='border-zinc-400 aria-checked:border-primary' />
            ) : (
              <input
                type={inputType}
                name={name}
                className='w-4 h-4 accent-primary'
              />
            )}
            {option}
          </Label>
        ))}
      </div>
    </div>
  )
}
