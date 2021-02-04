import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

interface Props {
  options: string[]
  sort?: (a: string, b: string) => number
  getOptionLabel?: (option: string) => string
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
}

const NameAutocomplete = ({
  options,
  sort,
  getOptionLabel,
  value,
  onChange,
  label = 'Label',
  placeholder = 'Placeholder'
}: Props): React.ReactElement => {
  const handleChangeAutocomplete = (_: any, value: string | null): void => {
    onChange(value !== null ? value : '')
  }
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <Autocomplete
      freeSolo
      options={options.sort(sort).filter((name, index, array) => name !== array[index + 1])}
      getOptionLabel={getOptionLabel}
      value={value}
      inputValue={value}
      onChange={handleChangeAutocomplete}
      renderInput={params => (
        <TextField
          {...params}
          variant='outlined'
          onChange={handleChangeInput}
          label={label}
          placeholder={placeholder}
          autoComplete='off'
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  )
}

export default NameAutocomplete
