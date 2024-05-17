import { useEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { CgChevronDown, CgChevronUp } from 'react-icons/cg'

import {
  InputBox,
  Tag,
  TagsWrapper,
  MirroredIcon,
  StyledOption,
  OptionsWrapper,
  DisplayOptions,
  MultiSelectWrapper,
} from './MultiSelect.styles'
import useOutsideClick from 'hooks/useClickOutside'
import { IServiceOptions, IMultiSelectProps } from 'types/ui/Multiselect'
import useIntlMessages from 'hooks/useIntlMessages'
import SearchMultiSelect from '../SearchMultiSelect/SearchMultiSelect'

const MultiSelect: React.FC<IMultiSelectProps> = ({
  options,
  onChange,
  searchPlaceholder,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [suggestions, setSuggestions] = useState<IServiceOptions[]>(options)
  const [selectedServices, setSelectedServices] = useState<IServiceOptions[]>(
    []
  )
  const [selectedServicesSet, setSelectedServicesSet] = useState(new Set())
  const refOptions = useOutsideClick(() => setIsOpen(false))
  const inputRef = useRef<HTMLInputElement>(null)
  const intl = useIntlMessages()

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions(options)
      return
    }

    const filteredOptions = options.filter((element) =>
      element.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSuggestions(filteredOptions)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  const handleAddService = (service: IServiceOptions) => {
    const updatedSelectedServices = [...selectedServices, service]
    setSelectedServices(updatedSelectedServices)
    setSelectedServicesSet(new Set([...selectedServicesSet, service.key]))
    onChange(updatedSelectedServices)
    if (inputRef.current !== null) {
      inputRef.current.focus()
    }

    if (updatedSelectedServices.length === suggestions.length) {
      setIsOpen((prev) => !prev)
    }
  }

  const handleRemoveService = (service: IServiceOptions) => {
    const filteredArray = selectedServices.filter(
      (ele) => ele.key !== service.key
    )
    setSelectedServices(filteredArray)
    const updatedServices = new Set(selectedServicesSet)
    updatedServices.delete(service.key)
    setSelectedServicesSet(updatedServices)
    onChange(filteredArray)
  }

  return (
    <MultiSelectWrapper ref={refOptions} $isOpen={isOpen} tabIndex={0}>
      <InputBox
        onClick={() => setIsOpen((prev) => !prev)}
        $isOpen={isOpen}
        $servicesLength={selectedServices.length}
      >
        <div className="input-box-wrapper">
          <span className="span-question">{label}</span>
          {isOpen ? (
            <CgChevronUp className="arrow-button" size={20} />
          ) : (
            <CgChevronDown className="arrow-button" size={20} />
          )}
        </div>
        {selectedServices.length > 0 && (
          <TagsWrapper onClick={(e) => e.stopPropagation()}>
            {selectedServices?.map((service) => (
              <Tag key={service.key}>
                <span>{intl(service.name)}</span>
                <div className="icon-close-wrapper">
                  <IoClose
                    className="icon-close"
                    size={20}
                    onClick={() => handleRemoveService(service)}
                  />
                </div>
              </Tag>
            ))}
          </TagsWrapper>
        )}
      </InputBox>
      {isOpen && (
        <DisplayOptions $isOpen={isOpen}>
          <SearchMultiSelect
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={searchPlaceholder}
            icon={<MirroredIcon className="icon-search" size={24} />}
          />
          <OptionsWrapper>
            {suggestions?.map((service) => {
              return !selectedServicesSet.has(service.key) ? (
                <StyledOption
                  key={service.key}
                  onClick={() => handleAddService(service)}
                >
                  {intl(service.name)}
                </StyledOption>
              ) : null
            })}
          </OptionsWrapper>
        </DisplayOptions>
      )}
    </MultiSelectWrapper>
  )
}

export default MultiSelect
