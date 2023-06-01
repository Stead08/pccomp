import ComputerComponentCardView from "@/app/components/ComputerComponentCardView";
import StickyFooter from "@/app/components/StickyFooter";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <>
        <div className="scroll-mb-5">
          <h2 className="flex justify-start m-5">お問い合わせはTwitter: @Stead08_ まで。</h2>
          <ComputerComponentCardView/>
          <StickyFooter/>
        </div>

      </>
  );
}
