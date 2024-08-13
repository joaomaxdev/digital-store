import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface LabeledInputProps {
  id: string
  label: string
  placeholder: string
  buttonLabel: string
  buttonOnClick: () => void
}

export function LabeledInput({
  id,
  label,
  placeholder,
  buttonLabel,
  buttonOnClick,
}: LabeledInputProps) {
  return (
    <div className='flex gap-2 items-end'>
      <div className='space-y-1'>
        <Label htmlFor={id} className='text-zinc-700 font-bold'>
          {label}
        </Label>
        <Input
          id={id}
          className='bg-stone-100 h-12 border-none'
          placeholder={placeholder}
        />
      </div>

      <Button
        variant='ghost'
        className='w-20 h-12 text-primary hover:text-primary hover:bg-stone-100'
        onClick={buttonOnClick}
      >
        {buttonLabel}
      </Button>
    </div>
  )
}
