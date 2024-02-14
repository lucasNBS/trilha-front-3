import user from "public/icons/user.svg"
import email from "public/icons/email.svg"
import padlock from "public/icons/padlock.svg"
import {
  FormContainer,
  FormGroup,
  FormLabel,
  FormInputContainer,
  FormInput,
  FormButton,
  Icon,
} from "./style"

export default function Form() {
  return (
    <FormContainer>
      <FormGroup>
        <FormLabel>Nome</FormLabel>
        <FormInputContainer>
          <FormInput type="text" />
          <Icon src={user} alt="Ícone de  usuário" />
        </FormInputContainer>
      </FormGroup>
      <FormGroup>
        <FormLabel>E-mail</FormLabel>
        <FormInputContainer>
          <FormInput type="email" />
          <Icon src={email} alt="Ícone de e-mail" />
        </FormInputContainer>
      </FormGroup>
      <FormGroup>
        <FormLabel>Senha</FormLabel>
        <FormInputContainer>
          <FormInput type="password" />
          <Icon src={padlock} alt="Ícone de senha" />
        </FormInputContainer>
      </FormGroup>
      <FormButton>Inscrever-se</FormButton>
    </FormContainer>
  )
}
