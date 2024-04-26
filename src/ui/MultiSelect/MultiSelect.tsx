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
import InputSearch from '../InputSearch/InputSearch'
import useOutsideClick from 'hooks/useClickOutside'

interface IServiceOptions {
  key: string
  name: string
}

interface MultiSelectProps {
  options: IServiceOptions[]
  onChange: (selectedServices: IServiceOptions[]) => void
  placeholder: string
  label: string
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onChange,
  placeholder,
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
    <MultiSelectWrapper ref={refOptions} $isOpen={isOpen}>
      <InputBox onClick={() => setIsOpen((prev) => !prev)} $isOpen={isOpen}>
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
                <span>{service.name}</span>
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
          <InputSearch
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={placeholder}
            icon={<MirroredIcon className="icon-search" size={24} />}
          />
          <OptionsWrapper>
            {suggestions?.map((service) => {
              return !selectedServicesSet.has(service.key) ? (
                <StyledOption
                  key={service.key}
                  onClick={() => handleAddService(service)}
                >
                  {service.name}
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
