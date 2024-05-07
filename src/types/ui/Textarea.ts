export interface ITextareaWrapper {
  $isError: boolean
}

export interface IStyledTextarea {
  label: string
  name: string
  placeholder?: string
  id: string
  value?: string
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string | null
}
