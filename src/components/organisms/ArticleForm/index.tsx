import Image from "next/image"
import {
  ArticleFormContainer,
  ArticleFormSubcontainer,
  Button,
  ErrorMessage,
  FormContainer,
  FormGroup,
  FormInput,
  FormLabel,
  FormTextarea,
  ImageContainer,
} from "./style"
import addImage from "public/icons/addImage.svg"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContextSelector } from "use-context-selector"
import { UserContent } from "src/contexts/UserContext"
import baseAxios from "src/lib/axios"
import { useRouter } from "next/navigation"

const articleFormSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Preencha o campo")
    .min(5, "Título muito curto")
    .max(50, "Título muito longo"),
  content: Yup.string().trim().required("Preencha o campo"),
  cover: Yup.mixed().test(
    "has file",
    "Selecione uma imagem para a capa",
    (val: any) => val.length > 0
  ),
})

function handleChangeImage(image: File | undefined) {
  if (!image) {
    return
  }

  const reader = new FileReader()

  reader.onloadend = () => {
    const value = reader.result

    if (value) {
      document
        .getElementById("image-cover")
        ?.setAttribute("src", value.toString())
    }
  }

  reader.readAsDataURL(image)
}

export default function ArticleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(articleFormSchema),
  })
  const { push } = useRouter()
  const { user } = useContextSelector(UserContent, (ctx) => {
    return {
      user: ctx.user,
    }
  })

  async function submit() {
    const formData = document.getElementById("form") as HTMLFormElement

    const data = new FormData(formData)

    data.append("user", user.id != undefined ? JSON.stringify(user) : "{}")

    try {
      const article = await baseAxios.post("article", data)
      push("/")
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <ArticleFormContainer
      id="form"
      encType="multipart/form-data"
      method="POST"
      onSubmit={handleSubmit(submit)}
    >
      <FormContainer>
        <ArticleFormSubcontainer flex="4 0 0">
          <FormGroup>
            <FormLabel>Capa</FormLabel>
            <ImageContainer>
              <FormInput
                {...register("cover")}
                type="file"
                className="image"
                onChange={(e) => {
                  e.target.files && handleChangeImage(e.target.files[0])
                }}
              />
              <Image
                id="image-cover"
                src={addImage.src}
                layout="fill"
                alt="Adicione uma imagem"
              />
            </ImageContainer>
            {errors.cover?.message && (
              <ErrorMessage>{errors.cover.message}</ErrorMessage>
            )}
          </FormGroup>
        </ArticleFormSubcontainer>
        <ArticleFormSubcontainer flex="6 0 0">
          <FormGroup>
            <FormLabel>Título</FormLabel>
            <FormInput {...register("title")} type="text" />
            {errors.title?.message && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup type="content">
            <FormLabel>Conteúdo</FormLabel>
            <FormTextarea {...register("content")}></FormTextarea>
            {errors.content?.message && (
              <ErrorMessage>{errors.content.message}</ErrorMessage>
            )}
          </FormGroup>
        </ArticleFormSubcontainer>
      </FormContainer>
      <Button>Publicar</Button>
    </ArticleFormContainer>
  )
}
