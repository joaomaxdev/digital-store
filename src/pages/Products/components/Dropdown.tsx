import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

interface DropdownProps {
  options: { value: string; label: string }[]
  placeholder: string
}
export function Dropdown({ options }: DropdownProps) {
  return (
    <Select>
      <SelectTrigger className='max-w-80 md:w-80 h-16 justify-start text-zinc-600 bg-transparent border-zinc-500'>
        <div className='flex-1 flex justify-start gap-2'>
          <span className='font-bold text-zinc-600'>Ordenar por:</span>
          <SelectValue placeholder={''} />
        </div>
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
