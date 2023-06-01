import ComputerComponentCardView from "@/app/components/ComputerComponentCardView";
import StickyFooter from "@/app/components/StickyFooter";

export default function Home() {
  return (
      <>
        <div className="scroll-mb-5">
          <h2 className="flex justify-start m-5">お問い合わせはTwitter: @Stead08_
            まで。
            現在開発中のため、予期しない不具合が発生する可能性があります。</h2>
          <ComputerComponentCardView/>
          <StickyFooter/>
        </div>

      </>
  );
}
