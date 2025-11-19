import imgOzelGunGonderisi from "figma:asset/2c40e74d52418a8f5b302fdb11828ab9ddc8289f.png";
import imgProductHighlight from "figma:asset/19f295188f232c704f706fc3a8ece60fea8db4da.png";
import imgVizyonVeKultur1 from "figma:asset/3b1f3bf95921500a4665dd2aa7af348fa6d50ac1.png";
import imgNewsItem1 from "figma:asset/2cf802b615871add56d8fd573998231b3dee24ab.png";
import img41 from "figma:asset/873aea65a7dff20ff181f94e644fae8a56c4815f.png";
import imgFrame710 from "figma:asset/3a3e6aded230297225ffb394610e364de2bd0304.png";
import imgFoodMore11 from "figma:asset/3dda67aad3a5809f3bbfc6fefd1249236da7ec7b.png";
import imgAaaaaa1 from "figma:asset/99f0be81ce0d09d83a0a3845ba99b685d7f84ef5.png";

function Frame({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute left-0 size-[1000px] top-[1064px]" data-name="Özel Gün Gönderisi">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOzelGunGonderisi} />
      </div>
      <div className="absolute left-[1065px] size-[1000px] top-[1064px]" data-name="Product Highlight">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProductHighlight} />
      </div>
      <div className="absolute left-[2161px] size-[1000px] top-0" data-name="Vizyon ve Kültür 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVizyonVeKultur1} />
      </div>
      <div className="absolute left-[1065px] size-[1000px] top-0" data-name="News Item 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNewsItem1} />
      </div>
      <div className="absolute left-0 size-[1000px] top-0" data-name="4 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img41} />
      </div>
      <div className="absolute h-[969px] left-[1801px] top-[2128px] w-[1398px]">
        <div className="absolute bg-[#1e1e1e] h-[969px] left-0 top-0 w-[1398px]" data-name="Frame 7 9" />
        <div className="absolute h-[969px] left-0 top-0 w-[1398px]" data-name="Frame 7 10">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame710} />
        </div>
      </div>
      <div className="absolute h-[969px] left-0 top-[2128px] w-[1722px]" data-name="Food & more 1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFoodMore11} />
        </div>
      </div>
      <div className="absolute left-[2161px] size-[1000px] top-[1064px]" data-name="aaaaaa 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAaaaaa1} />
      </div>
    </div>
  );
}

export default function Frame1() {
  return <Frame className="relative size-full" />;
}