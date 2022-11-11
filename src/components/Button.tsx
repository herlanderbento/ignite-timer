import { ButtonContainer, ButtonVariant } from './Button.styles'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: ButtonVariant
  children: ReactNode
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}
