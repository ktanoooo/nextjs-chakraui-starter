import { createContext, useContext } from 'react'

interface FormContextProps {
  onSubmit: <T>(data: T) => void
  submitting: boolean
}

export const FormContext = createContext<FormContextProps | null>(null)

export const useFormContext = () => {
  const contextValue = useContext(FormContext)
  if (contextValue === null) {
    throw Error('Context has not been Provided!')
  }
  return contextValue
}
