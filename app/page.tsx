import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import TIps from "@/components/TIps";
import Script from "next/script";

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
      <Script type='text/javascript' src='//pl27963750.effectivegatecpm.com/79/92/dd/7992dd6f82a2fcd3f7d7e5ccfb9d2eee.js'/>
    </div>
  );
}
