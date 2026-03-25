import CursorFollower from "@/utils/CursorFollower";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export default function PublicLayout({ children }) {
  return <main className="w-full max-w-screen-2xl mx-auto">
    <CursorFollower/>
    <Header/>
    {children}
    <Footer/>
    </main>;
}
