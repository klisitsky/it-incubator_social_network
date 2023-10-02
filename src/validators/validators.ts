export const required = (value: string)  => value ? undefined : 'Required'

export const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

