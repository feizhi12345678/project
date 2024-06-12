import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <>
    <Header />
    <main className="grow flex justify-center items-center h-screen">

      <SignUp />

    </main>

    <Footer />
  </>;
}