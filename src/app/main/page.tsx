import Footer from "@/components/ui/Footer";
import MainContents from "@/components/main/MainContents";
import Header from "@/components/ui/Header";
import RnbMenu from "@/components/ui/RnbMenu";

export default function MainPage() {
  return (
    <div className="wrap">
      <Header />
      <RnbMenu />
      <MainContents />
      <Footer />
    </div>
  );
}
