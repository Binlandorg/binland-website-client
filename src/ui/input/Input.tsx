import { useRef } from 'react'
import { MdError } from 'react-icons/md'

import { InputWrapper, InputLabel, ErrorMessage } from './Input.styles'
import { IStyledInput } from 'types/ui/Input'

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
  error = null,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleWrapperClick = (): void => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <InputWrapper
        onClick={handleWrapperClick}
        className={className}
        $isError={Boolean(error)}
      >
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
            autoComplete='false'
          />
          <span>{label}</span>
        </InputLabel>
      </InputWrapper>
      {error && (
        <ErrorMessage>
          <MdError />
          {error}
        </ErrorMessage>
      )}
    </div>
  )
}

export default Input
