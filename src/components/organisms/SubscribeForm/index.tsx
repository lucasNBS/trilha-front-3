import person from "public/icons/user.svg"
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
  ErrorMessage,
} from "./style"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import baseAxios from "src/lib/axios"
import { useContextSelector } from "use-context-selector"
import { UserContent } from "src/contexts/UserContext"

type DataType = {
  name: string
  email: string
  password: string
}

const subscribeFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Preencha o campo")
    .min(3, "Nome muito curto")
    .max(25, "Nome muito longo"),
  email: Yup.string()
    .trim()
    .email("Formato de E-mail inválido")
    .required("Preencha o campo")
    .min(3, "E-mail muito curto")
    .max(50, "E-mail muito longo"),
  password: Yup.string()
    .trim()
    .required("Preencha o campo")
    .min(3, "Senha muito curta")
    .max(20, "Senha muito longa"),
})

export default function SubscribeForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(subscribeFormSchema),
  })
  const { user, setUser } = useContextSelector(UserContent, (ctx) => {
    return {
      user: ctx.user,
      setUser: ctx.setUser,
    }
  })

  async function submit(data: DataType) {
    try {
      if (user.id != undefined) {
        alert("Você já está inscrito")
        return
      }

      const userData = await baseAxios.post("user", data)

      if (userData.data) {
        setUser(userData.data)
        reset()
      }
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <FormGroup>
        <FormLabel>Nome</FormLabel>
        <FormInputContainer>
          <FormInput {...register("name")} type="text" />
          <Icon src={person} alt="Ícone de  usuário" />
        </FormInputContainer>
        {errors.name?.message && (
          <ErrorMessage>{errors.name.message}</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel>E-mail</FormLabel>
        <FormInputContainer>
          <FormInput {...register("email")} type="email" />
          <Icon src={email} alt="Ícone de e-mail" />
        </FormInputContainer>
        {errors.email?.message && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <FormLabel>Senha</FormLabel>
        <FormInputContainer>
          <FormInput {...register("password")} type="password" />
          <Icon src={padlock} alt="Ícone de senha" />
        </FormInputContainer>
        {errors.password?.message && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </FormGroup>
      <FormButton>Inscrever-se</FormButton>
    </FormContainer>
  )
}
