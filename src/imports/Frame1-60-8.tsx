import imgAdsizTasarimP1 from "figma:asset/9e7f67ad5028f8ead3afa9d47b25d44ca1d06489.png";

/**
 * @figmaAssetKey 7ca7c3fce6309f986671d52348a838ef3ea43b5a
 */
function Frame1({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative shrink-0 size-[1563px]" data-name="Adsız tasarım p 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAdsizTasarimP1} />
      </div>
    </div>
  );
}

export default function Frame2() {
  return <Frame1 className="bg-white content-stretch flex gap-[10px] items-center relative size-full" />;
}