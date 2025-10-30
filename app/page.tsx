import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import TIps from "@/components/TIps";

export default function Home() {
  return (
    <div className="space-y-10">
      <div>
        <Header />
      </div>
      <div>
        <TIps />
      </div>
      <div>
        <Main />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
