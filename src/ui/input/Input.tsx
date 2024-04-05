import { useRef } from 'react'

import { InputWrapper, InputLabel } from './Input.styles'
import { WithClassName } from 'types/components/shared'

interface IStyledInput extends WithClassName {
  id: string
  type?: 'text' | 'number' | 'email' | 'password'
  name?: string
  value: string | number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
}

const Input: React.FC<IStyledInput> = ({
  id,
  type = 'text',
  name,
  onChange,
  onBlur,
  value,
  placeholder = '',
  label,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleWrapperClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <InputWrapper onClick={handleWrapperClick} className={className}>
      <InputLabel>
        <input
          ref={inputRef}
          id={id || name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="input"
          placeholder={placeholder}
        />
        <span>{label}</span>
      </InputLabel>
    </InputWrapper>
  )
}

export default Input
