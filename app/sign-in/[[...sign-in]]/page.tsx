import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <>
    <Header />
    <main className="grow flex justify-center items-center h-screen">

      <SignIn />

    </main>

    <Footer />
  </>;
}