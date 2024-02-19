import Admin from "src/components/molecules/Admin"
import baseAxios from "src/lib/axios"
import DefaultTemplate from "src/templates/DefaultTemplate"

type AdminData = {
  usersCount: number
  articlesCount: number
}

type PageProps = {
  adminData: AdminData
}

export default function Page({ adminData }: PageProps) {
  return (
    <DefaultTemplate>
      <Admin
        usersCount={adminData.usersCount}
        articlesCount={adminData.articlesCount}
      />
    </DefaultTemplate>
  )
}

export async function getServerSideProps() {
  const adminData = await baseAxios.get("admin").then((res) => res.data)

  return {
    props: {
      adminData,
    },
  }
}
