import { forwardRef } from 'react'
import { InputSearchWrapper, StyledInputSearch } from './InputSearch.styles'

interface ISearch {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  icon?: React.ReactNode
}

const InputSearch = forwardRef<HTMLInputElement, ISearch>(
  ({ value, onChange, placeholder, icon }, ref) => {
    return (
      <InputSearchWrapper>
        <StyledInputSearch
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
        />
        {icon}
      </InputSearchWrapper>
    )
  }
)

export default InputSearch
