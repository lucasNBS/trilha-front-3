import Image from "next/image"
import {
  ArticleFormContainer,
  ArticleFormSubcontainer,
  Button,
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

export default function ArticleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(articleFormSchema),
  })

  return (
    <ArticleFormContainer>
      <FormContainer>
        <ArticleFormSubcontainer flex="4 0 0">
          <FormGroup>
            <FormLabel>Capa</FormLabel>
            <ImageContainer>
              <FormInput {...register("cover")} className="image" />
              <Image
                src={addImage.src}
                layout="fill"
                alt="Adicione uma imagem"
              />
            </ImageContainer>
          </FormGroup>
        </ArticleFormSubcontainer>
        <ArticleFormSubcontainer flex="6 0 0">
          <FormGroup>
            <FormLabel>Título</FormLabel>
            <FormInput {...register("title")} type="text" />
          </FormGroup>
          <FormGroup type="content">
            <FormLabel>Conteúdo</FormLabel>
            <FormTextarea {...register("content")}></FormTextarea>
          </FormGroup>
        </ArticleFormSubcontainer>
      </FormContainer>
      <Button>Publicar</Button>
    </ArticleFormContainer>
  )
}
