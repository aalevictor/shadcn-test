import Breadcrumbs from "@/components/breadcrumbs"
import { CardEx } from "@/components/card"
import Navbar from "@/components/navbar"

export default function DashboardPage() {
  return (<>
    <Navbar />
    <div className="container mt-20 space-y-4">
      <CardEx />
      <CardEx />
      <CardEx />
      <CardEx />
      <CardEx />
      <CardEx />
      <CardEx />
      <CardEx />
    </div>
  </>)
}