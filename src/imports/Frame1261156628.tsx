import svgPaths from "./svg-wd1aekn3bs";
import imgEllipse2109 from "figma:asset/d0826acb050051da6aca25f4596e7712f74292ad.png";
import imgScreenshot20220714At12241 from "figma:asset/b70fb308e88a91a54ba62fadae5f47f1c7027b30.png";
import imgScreenshot20220714At12242 from "figma:asset/4684e20dbd49841aa276ef78a6a042465a16e190.png";
import imgScreenshot20220713At16491 from "figma:asset/01634bb42681bd21a7d1f9f13245e9725269bb0b.png";

function ArrowHead() {
  return (
    <button className="block cursor-pointer h-[14px] relative w-[20px]" data-name="Arrow Head">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g id="Arrow Head">
          <path d="M4 4L10 10L16 4" id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </button>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[20px] top-[81px]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[calc(50%-95px)] not-italic text-[20px] text-neutral-800 text-nowrap top-[81px] tracking-[0.3003px] whitespace-pre">Near by Dermalogists</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[20px] top-[84px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ArrowHead />
        </div>
      </div>
    </div>
  );
}

function IcnMap() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icnMap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icnMap">
          <path d={svgPaths.p31c93500} fill="var(--fill-0, #6C6C6C)" id="icnMap_2" />
        </g>
      </svg>
    </div>
  );
}

function Map() {
  return (
    <div className="bg-[#fbfbfb] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 size-[44px]" data-name="Map">
      <div aria-hidden="true" className="absolute border-[#b7b7b5] border-[0px_0px_0.3px] border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
      <IcnMap />
    </div>
  );
}

function Compas() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="COMPAS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="COMPAS">
          <path d={svgPaths.p1aff82f0} id="icnCompas" stroke="var(--stroke-0, #6C6C6C)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Compas1() {
  return (
    <div className="bg-[#fbfbfb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 size-[44px]" data-name="Compas">
      <Compas />
    </div>
  );
}

function TopNavigation() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[93px] items-center justify-center right-[12px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.13)] top-[180px] w-[50px]" data-name="TopNavigation">
      <Map />
      <Compas1 />
    </div>
  );
}

function Temperature() {
  return (
    <div className="absolute bg-[#f7f7f6] box-border content-stretch flex gap-[2px] h-[34px] items-center justify-center left-[calc(75%+32.5px)] p-[0.5px] rounded-[10px] top-[592px] w-[63px]" data-name="Temperature">
      <div aria-hidden="true" className="absolute border-[#e8eae8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀇂
      </p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6c6c6c] text-[0px] text-[18px] text-center text-nowrap whitespace-pre">16º</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-neutral-800 text-nowrap tracking-[0.3337px] whitespace-pre">Dr. Bellamy Nicholas</p>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="close">
          <rect fill="var(--fill-0, #E7E7E7)" height="30" rx="15" width="30" />
          <path d={svgPaths.p2c677e40} fill="var(--fill-0, #6C6C6C)" id="icnClose" />
        </g>
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[#f7f7f6] box-border content-stretch flex items-center justify-between left-[calc(50%+0.5px)] p-[16px] rounded-tl-[10px] rounded-tr-[10px] top-0 translate-x-[-50%] w-[375px]" data-name="topBar">
      <Frame2 />
      <Close />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[59px] not-italic text-[15px] text-center text-neutral-800 text-nowrap top-[51px] translate-x-[-50%] whitespace-pre">Dermalogist</p>
      <div className="absolute bg-[#bebfc0] h-[5px] left-[calc(50%-0.5px)] rounded-[4px] top-[7px] translate-x-[-50%] w-[36px]" data-name="SSS" />
    </div>
  );
}

function ByCarBttn() {
  return (
    <div className="basis-0 bg-[#0c79fe] grow h-[48px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="byCarBttn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center leading-[normal] p-[10px] relative text-[#f7f7f6] text-center text-nowrap w-full whitespace-pre">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            􀙙
          </p>
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] not-italic relative shrink-0 text-[17px]">7 minutes</p>
        </div>
      </div>
    </div>
  );
}

function More() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0 w-[46px]" data-name="More">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0c79fe] text-[22px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀍠
      </p>
    </div>
  );
}

function TopActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="topActions">
      <ByCarBttn />
      <More />
    </div>
  );
}

function Hours() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[276px] whitespace-pre" data-name="Hours">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#868782] text-[15px]">Hours</p>
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[17px] text-black">17:00 - 00:00</p>
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[#df563f] text-[17px]">Closed</p>
    </div>
  );
}

function IcnDrop() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icnDrop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icnDrop">
          <path d={svgPaths.p30885280} id="Vector 9" stroke="var(--stroke-0, #B7B7B5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cart() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Cart">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[82px] items-center p-[16px] relative w-full">
          <Hours />
          <IcnDrop />
        </div>
      </div>
    </div>
  );
}

function Hours1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-[10px] shrink-0 w-full" data-name="Hours">
      <Cart />
    </div>
  );
}

function Contetn() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[237px]" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#868782] text-[15px] text-center text-nowrap whitespace-pre">Phone</p>
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">+375 (17) 327-10-45</p>
      <div className="absolute bg-neutral-800 h-[5px] left-[calc(50%+37.5px)] rounded-[100px] top-[31px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Cart1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[12px] relative shrink-0 w-[327px]" data-name="Cart">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_0.4px] border-solid inset-0 pointer-events-none" />
      <Contetn />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#868782] text-[15px] text-center text-nowrap whitespace-pre">Address</p>
    </div>
  );
}

function Contetn1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[269px]" data-name="Contetn">
      <Frame1 />
      <div className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">Октябрьская улица 16/24</p>
        <p className="mb-0">Minsk</p>
        <p className="mb-0">Minsk</p>
        <p className="mb-0">Belarus</p>
        <p>220030</p>
      </div>
    </div>
  );
}

function IcRoute() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀟸
      </p>
    </div>
  );
}

function Cart2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start pb-[16px] pl-0 pr-[16px] pt-[12px] relative shrink-0 w-[327px]" data-name="Cart">
      <Contetn1 />
      <IcRoute />
    </div>
  );
}

function Contetn2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-[10px] shrink-0 w-[343px]" data-name="contetn">
      <Cart1 />
      <Cart2 />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Details">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">Details</p>
      <Contetn2 />
    </div>
  );
}

function IcRoute1() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀌭
      </p>
    </div>
  );
}

function Contetn3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">Report an issue</p>
    </div>
  );
}

function Cart3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cart">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_0.4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[16px] relative w-full">
          <IcRoute1 />
          <Contetn3 />
        </div>
      </div>
    </div>
  );
}

function IcRoute2() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀋃
      </p>
    </div>
  );
}

function Contetn4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">Add to Favorites</p>
    </div>
  );
}

function Cart4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cart">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[16px] relative w-full">
          <IcRoute2 />
          <Contetn4 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end pl-[16px] pr-0 py-0 relative w-full">
          <Cart3 />
          <Cart4 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[calc(50%+0.5px)] top-[86px] translate-x-[-50%] w-[343px]" data-name="Content">
      <TopActions />
      <Hours1 />
      <Details />
      <Frame />
    </div>
  );
}

function Favorites() {
  return (
    <div className="absolute bg-[#f7f7f6] h-[341px] left-0 rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] top-[637px] w-[430px]" data-name="Favorites">
      <TopBar />
      <Content />
    </div>
  );
}

function SubwayLocation() {
  return (
    <div className="absolute left-[calc(25%+81.5px)] size-[24px] top-[465px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation1() {
  return (
    <div className="absolute left-[calc(50%+13px)] size-[24px] top-[332px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation2() {
  return (
    <div className="absolute left-[calc(25%+44.5px)] size-[24px] top-[326px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation3() {
  return (
    <div className="absolute left-[calc(25%+1.5px)] size-[24px] top-[230px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation4() {
  return (
    <div className="absolute left-[calc(25%+68.5px)] size-[24px] top-[345px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] text-neutral-800 tracking-[0.3337px] w-full">Dr. Bellamy Nicholas</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#969696] text-[12px] tracking-[0.2336px] w-full">1241 weber st, Kitchener, Ontario</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[11px] h-[76px] items-center justify-center left-[calc(25%+6.5px)] p-[18px] rounded-[8px] top-[150px] w-[238px]">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse2109} width="50" />
      </div>
      <Frame11 />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[13.886px] left-[64px] top-[21.87px] w-[328px]" data-name="status bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 14">
        <g id="status bar">
          <path d={svgPaths.p37855780} fill="var(--fill-0, black)" id="battery outline (35% opacity)" opacity="0.35" />
          <path d={svgPaths.pcb6bb00} fill="var(--fill-0, black)" id="status bar_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[430px]">
      <div className="absolute bg-white h-[60px] left-0 top-0 w-[430px]" />
      <div className="absolute bg-black h-[37px] left-[152px] rounded-[19px] top-[11px] w-[126px]" data-name="Dynamic Island" />
      <StatusBar />
    </div>
  );
}

function DermatologistLocations() {
  return (
    <div className="absolute bg-white h-[978px] left-[551px] overflow-clip rounded-[50px] shadow-[0px_60px_140px_0px_rgba(31,31,31,0.1)] top-0 w-[430px]" data-name="dermatologist locations 11">
      <Frame17 />
      <Group16 />
      <div className="absolute h-[854px] left-0 top-[123px] w-[430px]" data-name="Screenshot 2022-07-14 at 12.24 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20220714At12241} />
      </div>
      <TopNavigation />
      <Temperature />
      <Favorites />
      <SubwayLocation />
      <SubwayLocation1 />
      <SubwayLocation2 />
      <SubwayLocation3 />
      <SubwayLocation4 />
      <Frame12 />
    </div>
  );
}

function ArrowHead1() {
  return (
    <div className="h-[14px] relative w-[20px]" data-name="Arrow Head">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g id="Arrow Head">
          <path d="M4 4L10 10L16 4" id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[20px] top-[81px]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[calc(50%-95px)] not-italic text-[20px] text-neutral-800 text-nowrap top-[81px] tracking-[0.3003px] whitespace-pre">Near by Dermalogists</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[20px] top-[84px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ArrowHead1 />
        </div>
      </div>
    </div>
  );
}

function IcnMap1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icnMap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icnMap">
          <path d={svgPaths.p31c93500} fill="var(--fill-0, #6C6C6C)" id="icnMap_2" />
        </g>
      </svg>
    </div>
  );
}

function Map1() {
  return (
    <div className="bg-[#fbfbfb] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 size-[44px]" data-name="Map">
      <div aria-hidden="true" className="absolute border-[#b7b7b5] border-[0px_0px_0.3px] border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
      <IcnMap1 />
    </div>
  );
}

function Compas2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="COMPAS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="COMPAS">
          <path d={svgPaths.p1aff82f0} id="icnCompas" stroke="var(--stroke-0, #6C6C6C)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Compas3() {
  return (
    <div className="bg-[#fbfbfb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 size-[44px]" data-name="Compas">
      <Compas2 />
    </div>
  );
}

function TopNavigation1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[93px] items-center justify-center right-[12px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.13)] top-[180px] w-[50px]" data-name="TopNavigation">
      <Map1 />
      <Compas3 />
    </div>
  );
}

function Temperature1() {
  return (
    <div className="absolute bg-[#f7f7f6] box-border content-stretch flex gap-[2px] h-[34px] items-center justify-center left-[calc(75%+32.5px)] p-[0.5px] rounded-[10px] top-[592px] w-[63px]" data-name="Temperature">
      <div aria-hidden="true" className="absolute border-[#e8eae8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀇂
      </p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6c6c6c] text-[0px] text-[18px] text-center text-nowrap whitespace-pre">16º</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-neutral-800 text-nowrap tracking-[0.3337px] whitespace-pre">Dr. Bellamy Nicholas</p>
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="close">
          <rect fill="var(--fill-0, #E7E7E7)" height="30" rx="15" width="30" />
          <path d={svgPaths.p2c677e40} fill="var(--fill-0, #6C6C6C)" id="icnClose" />
        </g>
      </svg>
    </div>
  );
}

function TopBar1() {
  return (
    <div className="absolute bg-[#f7f7f6] box-border content-stretch flex items-center justify-between left-[calc(50%+0.5px)] p-[16px] rounded-tl-[10px] rounded-tr-[10px] top-0 translate-x-[-50%] w-[375px]" data-name="topBar">
      <Frame3 />
      <Close1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[59px] not-italic text-[15px] text-center text-neutral-800 text-nowrap top-[51px] translate-x-[-50%] whitespace-pre">Dermalogist</p>
      <div className="absolute bg-[#bebfc0] h-[5px] left-[calc(50%-0.5px)] rounded-[4px] top-[7px] translate-x-[-50%] w-[36px]" data-name="SSS" />
    </div>
  );
}

function Hours2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[276px] whitespace-pre" data-name="Hours">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#868782] text-[15px]">Hours</p>
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[17px] text-black">17:00 - 00:00</p>
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[#df563f] text-[17px]">Closed</p>
    </div>
  );
}

function IcnDrop1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icnDrop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icnDrop">
          <path d={svgPaths.p30885280} id="Vector 9" stroke="var(--stroke-0, #B7B7B5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cart5() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Cart">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[82px] items-center p-[16px] relative w-full">
          <Hours2 />
          <IcnDrop1 />
        </div>
      </div>
    </div>
  );
}

function Hours3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-[10px] shrink-0 w-full" data-name="Hours">
      <Cart5 />
    </div>
  );
}

function Contetn5() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[237px] whitespace-pre" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#868782] text-[15px]">Phone</p>
      <p className="font-['SF_Pro_Display:Medium',sans-serif] relative shrink-0 text-[#0c79fe] text-[17px]">+375 (17) 327-10-45</p>
    </div>
  );
}

function Cart6() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[12px] relative shrink-0 w-[327px]" data-name="Cart">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_0.4px] border-solid inset-0 pointer-events-none" />
      <Contetn5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#868782] text-[15px] text-center text-nowrap whitespace-pre">Address</p>
    </div>
  );
}

function Contetn6() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[269px]" data-name="Contetn">
      <Frame4 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-neutral-800 tracking-[0.2336px] w-[213px]">1241 weber st, Kitchener, Ontario</p>
    </div>
  );
}

function IcRoute3() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀟸
      </p>
    </div>
  );
}

function Cart7() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start pb-[16px] pl-0 pr-[16px] pt-[12px] relative shrink-0 w-[327px]" data-name="Cart">
      <Contetn6 />
      <div className="absolute bg-neutral-800 h-[5px] left-[calc(50%+0.5px)] rounded-[100px] top-[46px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
      <IcRoute3 />
    </div>
  );
}

function Contetn7() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-[10px] shrink-0 w-[343px]" data-name="contetn">
      <Cart6 />
      <Cart7 />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Details">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">Details</p>
      <Contetn7 />
    </div>
  );
}

function IcRoute4() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀌭
      </p>
    </div>
  );
}

function Contetn8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">Report an issue</p>
    </div>
  );
}

function Cart8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cart">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_0.4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[16px] relative w-full">
          <IcRoute4 />
          <Contetn8 />
        </div>
      </div>
    </div>
  );
}

function IcRoute5() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀋃
      </p>
    </div>
  );
}

function Contetn9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">Add to Favorites</p>
    </div>
  );
}

function Cart9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cart">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[16px] relative w-full">
          <IcRoute5 />
          <Contetn9 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end pl-[16px] pr-0 py-0 relative w-full">
          <Cart8 />
          <Cart9 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[calc(50%+0.5px)] top-[86px] translate-x-[-50%] w-[343px]" data-name="Content">
      <Hours3 />
      <Details1 />
      <Frame5 />
    </div>
  );
}

function Favorites1() {
  return (
    <div className="absolute bg-[#f7f7f6] h-[341px] left-0 rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] top-[637px] w-[430px]" data-name="Favorites">
      <TopBar1 />
      <Content1 />
    </div>
  );
}

function SubwayLocation5() {
  return (
    <div className="absolute left-[calc(25%+81.5px)] size-[24px] top-[465px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation6() {
  return (
    <div className="absolute left-[calc(50%+13px)] size-[24px] top-[332px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation7() {
  return (
    <div className="absolute left-[calc(25%+44.5px)] size-[24px] top-[326px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation8() {
  return (
    <div className="absolute left-[calc(25%+1.5px)] size-[24px] top-[230px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation9() {
  return (
    <div className="absolute left-[calc(25%+68.5px)] size-[24px] top-[345px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] text-neutral-800 tracking-[0.3337px] w-full">Dr. Bellamy Nicholas</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#969696] text-[12px] tracking-[0.2336px] w-full">1241 weber st, Kitchener, Ontario</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[11px] h-[76px] items-center justify-center left-[4px] p-[18px] rounded-[8px] top-[288px] w-[227px]">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse2109} width="50" />
      </div>
      <Frame13 />
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute h-[13.886px] left-[64px] top-[21.87px] w-[328px]" data-name="status bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 14">
        <g id="status bar">
          <path d={svgPaths.p3db73b00} fill="var(--fill-0, black)" id="battery outline (35% opacity)" opacity="0.35" />
          <path d={svgPaths.p13a01380} fill="var(--fill-0, black)" id="status bar_2" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[64px] top-[11px]">
      <div className="absolute bg-black h-[37px] left-[calc(25%+44.5px)] rounded-[19px] top-[11px] w-[126px]" data-name="Dynamic Island" />
      <StatusBar1 />
    </div>
  );
}

function DermatologistLocations1() {
  return (
    <div className="absolute bg-white h-[978px] left-[1102px] overflow-clip rounded-[50px] shadow-[0px_60px_140px_0px_rgba(31,31,31,0.1)] top-0 w-[430px]" data-name="dermatologist locations 12">
      <Group2 />
      <Group17 />
      <div className="absolute h-[854px] left-0 top-[123px] w-[430px]" data-name="Screenshot 2022-07-14 at 12.24 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-16.44%] max-w-none top-0 w-[132.89%]" src={imgScreenshot20220714At12242} />
        </div>
      </div>
      <TopNavigation1 />
      <Temperature1 />
      <Favorites1 />
      <SubwayLocation5 />
      <SubwayLocation6 />
      <SubwayLocation7 />
      <SubwayLocation8 />
      <SubwayLocation9 />
      <Frame14 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[59.61%_65.81%_27.55%_22.56%]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light inset-[59.61%_65.81%_27.55%_22.56%] leading-[normal] not-italic text-[12px] text-neutral-800">Products</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[3.57%]" data-name="Group">
      <div className="absolute inset-[-3.59%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="Group">
            <path d={svgPaths.p38d52880} id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p19900880} id="Vector_2" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p39685180} id="Vector_3" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pdcbbf80} id="Vector_4" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhoto() {
  return (
    <div className="absolute left-[114px] overflow-clip size-[15px] top-[44px]" data-name="image-photo-four--photos-camera-picture-photography-pictures-four-photo">
      <Group />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[97px] top-[44px]">
      <Group4 />
      <ImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhoto />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[59.61%_86.74%_27.55%_5.12%]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light inset-[59.61%_86.74%_27.55%_5.12%] leading-[normal] not-italic text-[12px] text-neutral-800">Home</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[59.61%_86.74%_27.55%_5.12%]">
      <Group5 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute inset-[38.52%_88.84%_44.97%_6.98%]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="home">
          <path d={svgPaths.p291ace80} id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[38.52%_86.74%_27.55%_5.12%]">
      <Group7 />
      <Home />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6px] inset-[49.52%_42.56%_15.62%_43.49%] items-center justify-center">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[12px] text-neutral-800 text-nowrap whitespace-pre">AI Scanner</p>
    </div>
  );
}

function ScanFace() {
  return (
    <div className="absolute left-[205px] size-[24px] top-[15px]" data-name="scan-face">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="scan-face">
          <path d={svgPaths.p1b518840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[187px] top-0">
      <Frame9 />
      <div className="absolute left-[191px] size-[53px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
          <circle cx="26.5" cy="26.5" fill="url(#paint0_linear_112_1462)" id="Ellipse 1971" r="26.5" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_112_1462" x1="26.5" x2="26.5" y1="0" y2="53">
              <stop offset="0.73" stopColor="#F5F5F5" />
              <stop offset="1" stopOpacity="0.09" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[193px] size-[49px] top-[2px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <circle cx="24.5" cy="24.5" fill="var(--fill-0, #262626)" id="Ellipse 1970" r="24.5" />
        </svg>
      </div>
      <ScanFace />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[59.61%_22.79%_27.55%_66.74%]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light inset-[59.61%_22.79%_27.55%_66.74%] leading-[normal] not-italic text-[12px] text-neutral-800">My Cart</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[59.61%_22.79%_27.55%_66.74%]">
      <Group3 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute inset-[-3.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="Group 355500">
            <path d={svgPaths.p112e4e00} id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            <path d={svgPaths.p2e4a0d00} fill="var(--fill-0, #262626)" id="Vector_2" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            <g id="Vector_3">
              <path clipRule="evenodd" d="M9.94552 7.24785H9.95245Z" fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d="M9.94552 7.24785H9.95245" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g id="Vector_4">
              <path clipRule="evenodd" d="M4.54464 7.24785H4.55157Z" fill="var(--fill-0, white)" fillRule="evenodd" />
              <path d="M4.54464 7.24785H4.55157" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute left-[calc(50%+94px)] size-[18px] top-[calc(50%-1.52px)] translate-x-[-50%] translate-y-[-50%]">
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[287px] top-[44px]">
      <Group8 />
      <Frame10 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[59.61%_5.12%_27.55%_86.51%]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light inset-[59.61%_5.12%_27.55%_86.51%] leading-[normal] not-italic text-[12px] text-neutral-800">Profile</p>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[59.61%_5.12%_27.55%_86.51%]">
      <Group1 />
    </div>
  );
}

function UserRound() {
  return (
    <div className="absolute left-[381px] size-[18px] top-[45px]" data-name="user-round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="user-round">
          <path d={svgPaths.pc669618} id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[372px] top-[45px]">
      <Group10 />
      <UserRound />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-1/2 top-0 translate-x-[-50%]">
      <Group6 />
      <Group13 />
      <Group9 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Navigationbar() {
  return (
    <div className="absolute contents left-0 top-0" data-name="navigationbar">
      <div className="absolute h-[91.037px] left-0 top-[18px] w-[430px]">
        <div className="absolute inset-[-21.97%_-5.58%_-30.76%_-5.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 140">
            <g filter="url(#filter0_d_112_1485)" id="Vector 7390">
              <path d={svgPaths.p31d20100} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="139.037" id="filter0_d_112_1485" width="478" x="0" y="-4.76559e-09">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_112_1485" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_112_1485" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group11 />
      <div className="absolute h-[4px] left-[290px] top-[18px] w-[39px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 4">
          <path d={svgPaths.p1d2413b0} fill="var(--fill-0, #262626)" id="Rectangle 4740" />
        </svg>
      </div>
    </div>
  );
}

function NavigationBarComponent() {
  return (
    <div className="absolute h-[109.037px] left-0 top-[869px] w-[430px]" data-name="Navigation Bar Component">
      <Navigationbar />
    </div>
  );
}

function ArrowHead2() {
  return (
    <div className="h-[14px] relative w-[20px]" data-name="Arrow Head">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g id="Arrow Head">
          <path d="M4 4L10 10L16 4" id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[20px] top-[81px]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[calc(50%-95px)] not-italic text-[20px] text-neutral-800 text-nowrap top-[81px] tracking-[0.3003px] whitespace-pre">Near by Dermalogists</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[20px] top-[84px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ArrowHead2 />
        </div>
      </div>
    </div>
  );
}

function IcnMap2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icnMap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icnMap">
          <path d={svgPaths.p31c93500} fill="var(--fill-0, #6C6C6C)" id="icnMap_2" />
        </g>
      </svg>
    </div>
  );
}

function Map2() {
  return (
    <div className="bg-[#f7f7f6] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 size-[44px]" data-name="Map">
      <div aria-hidden="true" className="absolute border-[#b7b7b5] border-[0px_0px_0.3px] border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
      <IcnMap2 />
    </div>
  );
}

function Compas4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="COMPAS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="COMPAS">
          <path d={svgPaths.p1aff82f0} id="icnCompas" stroke="var(--stroke-0, #6C6C6C)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Compas5() {
  return (
    <div className="bg-[#f7f7f6] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 size-[44px]" data-name="Compas">
      <Compas4 />
    </div>
  );
}

function TopNavigation2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center justify-center right-[20px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.13)] top-[155px]" data-name="TopNavigation">
      <Map2 />
      <Compas5 />
    </div>
  );
}

function SubwayLocation10() {
  return (
    <div className="absolute left-[calc(50%+32px)] size-[24px] top-[402px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation11() {
  return (
    <div className="absolute left-[calc(50%+66px)] size-[24px] top-[470px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation12() {
  return (
    <div className="absolute left-[calc(75%+31.5px)] size-[24px] top-[477px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation13() {
  return (
    <div className="absolute left-[calc(75%-10.5px)] size-[24px] top-[562px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation14() {
  return (
    <div className="absolute left-[calc(25%+36.5px)] size-[24px] top-[367px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation15() {
  return (
    <div className="absolute left-[calc(25%+17.5px)] size-[24px] top-[334px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation16() {
  return (
    <div className="absolute left-[99px] size-[24px] top-[316px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Temperature2() {
  return (
    <div className="absolute bg-[#f7f7f6] box-border content-stretch flex gap-[2px] h-[34px] items-center justify-center left-[calc(75%+26.5px)] p-[0.5px] rounded-[10px] top-[625px] w-[63px]" data-name="Temperature">
      <div aria-hidden="true" className="absolute border-[#e8eae8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀇂
      </p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6c6c6c] text-[0px] text-[18px] text-center text-nowrap whitespace-pre">16º</p>
    </div>
  );
}

function StatusBar2() {
  return (
    <div className="absolute h-[13.886px] left-[64px] top-[21.87px] w-[328px]" data-name="status bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 14">
        <g id="status bar">
          <path d={svgPaths.p319f3700} fill="var(--fill-0, black)" id="battery outline (35% opacity)" opacity="0.35" />
          <path d={svgPaths.p224f5af0} fill="var(--fill-0, black)" id="status bar_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[430px]">
      <div className="absolute bg-white h-[60px] left-0 top-0 w-[430px]" />
      <div className="absolute bg-black h-[37px] left-[152px] rounded-[19px] top-[11px] w-[126px]" data-name="Dynamic Island" />
      <StatusBar2 />
    </div>
  );
}

function DermatologistLocations2() {
  return (
    <div className="absolute bg-white h-[978px] left-0 overflow-clip rounded-[50px] shadow-[0px_60px_140px_0px_rgba(31,31,31,0.1)] top-[2px] w-[430px]" data-name="dermatologist locations 16">
      <NavigationBarComponent />
      <Group18 />
      <div className="absolute h-[859px] left-0 rounded-bl-[50px] rounded-br-[50px] top-[119px] w-[430px]" data-name="Screenshot 2022-07-13 at 16.49 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[50px] rounded-br-[50px]">
          <img alt="" className="absolute h-[110.2%] left-[-42.13%] max-w-none top-[-10.2%] w-[148.53%]" src={imgScreenshot20220713At16491} />
        </div>
      </div>
      <TopNavigation2 />
      <SubwayLocation10 />
      <SubwayLocation11 />
      <SubwayLocation12 />
      <SubwayLocation13 />
      <SubwayLocation14 />
      <SubwayLocation15 />
      <SubwayLocation16 />
      <Temperature2 />
      <div className="absolute bg-neutral-800 h-[5px] left-1/2 rounded-[100px] top-[970px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
      <Frame18 />
    </div>
  );
}

function ArrowHead3() {
  return (
    <button className="block cursor-pointer h-[14px] relative w-[20px]" data-name="Arrow Head">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
        <g id="Arrow Head">
          <path d="M4 4L10 10L16 4" id="Vector" stroke="var(--stroke-0, #262626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </button>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[20px] top-[81px]">
      <p className="absolute font-['Inter:Light',sans-serif] font-light leading-[normal] left-[calc(50%-95px)] not-italic text-[20px] text-neutral-800 text-nowrap top-[81px] tracking-[0.3003px] whitespace-pre">Near by Dermalogists</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[20px] top-[84px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "14" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ArrowHead3 />
        </div>
      </div>
    </div>
  );
}

function IcnMap3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icnMap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icnMap">
          <path d={svgPaths.p31c93500} fill="var(--fill-0, #6C6C6C)" id="icnMap_2" />
        </g>
      </svg>
    </div>
  );
}

function Map3() {
  return (
    <div className="bg-[#fbfbfb] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 size-[44px]" data-name="Map">
      <div aria-hidden="true" className="absolute border-[#b7b7b5] border-[0px_0px_0.3px] border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
      <IcnMap3 />
    </div>
  );
}

function Compas6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="COMPAS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="COMPAS">
          <path d={svgPaths.p1aff82f0} id="icnCompas" stroke="var(--stroke-0, #6C6C6C)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Compas7() {
  return (
    <div className="bg-[#fbfbfb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-bl-[10px] rounded-br-[10px] shrink-0 size-[44px]" data-name="Compas">
      <Compas6 />
    </div>
  );
}

function TopNavigation3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[93px] items-center justify-center right-[12px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.13)] top-[180px] w-[50px]" data-name="TopNavigation">
      <Map3 />
      <Compas7 />
    </div>
  );
}

function Temperature3() {
  return (
    <div className="absolute bg-[#f7f7f6] box-border content-stretch flex gap-[2px] h-[34px] items-center justify-center left-[calc(75%+32.5px)] p-[0.5px] rounded-[10px] top-[592px] w-[63px]" data-name="Temperature">
      <div aria-hidden="true" className="absolute border-[#e8eae8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[15px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀇂
      </p>
      <p className="font-['SF_Pro_Display:Regular',sans-serif] font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6c6c6c] text-[0px] text-[18px] text-center text-nowrap whitespace-pre">16º</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start justify-center relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-neutral-800 text-nowrap tracking-[0.3337px] whitespace-pre">Dr. Bellamy Nicholas</p>
    </div>
  );
}

function Close2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="close">
          <rect fill="var(--fill-0, #E7E7E7)" height="30" rx="15" width="30" />
          <path d={svgPaths.p2c677e40} fill="var(--fill-0, #6C6C6C)" id="icnClose" />
        </g>
      </svg>
    </div>
  );
}

function TopBar2() {
  return (
    <div className="absolute bg-[#f7f7f6] box-border content-stretch flex items-center justify-between left-[calc(50%+0.5px)] p-[16px] rounded-tl-[10px] rounded-tr-[10px] top-0 translate-x-[-50%] w-[375px]" data-name="topBar">
      <Frame6 />
      <Close2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[59px] not-italic text-[15px] text-center text-neutral-800 text-nowrap top-[51px] translate-x-[-50%] whitespace-pre">Dermalogist</p>
      <div className="absolute bg-[#bebfc0] h-[5px] left-[calc(50%-0.5px)] rounded-[4px] top-[7px] translate-x-[-50%] w-[36px]" data-name="SSS" />
    </div>
  );
}

function ByCarBttn1() {
  return (
    <div className="basis-0 bg-[#0c79fe] grow h-[48px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="byCarBttn">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center leading-[normal] p-[10px] relative text-[#f7f7f6] text-center text-nowrap w-full whitespace-pre">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            􀙙
          </p>
          <p className="font-['SF_Pro_Display:Semibold',sans-serif] not-italic relative shrink-0 text-[17px]">7 minutes</p>
        </div>
      </div>
    </div>
  );
}

function More1() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex gap-[4px] h-[48px] items-center justify-center p-[10px] relative rounded-[10px] shrink-0 w-[46px]" data-name="More">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[normal] relative shrink-0 text-[#0c79fe] text-[22px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀍠
      </p>
    </div>
  );
}

function TopActions1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="topActions">
      <ByCarBttn1 />
      <More1 />
    </div>
  );
}

function Hours4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-center text-nowrap w-[276px] whitespace-pre" data-name="Hours">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[#868782] text-[15px]">Hours</p>
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[17px] text-black">17:00 - 00:00</p>
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] relative shrink-0 text-[#df563f] text-[17px]">Closed</p>
    </div>
  );
}

function IcnDrop2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="icnDrop">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="icnDrop">
          <path d={svgPaths.p30885280} id="Vector 9" stroke="var(--stroke-0, #B7B7B5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Cart10() {
  return (
    <div className="h-[82px] relative shrink-0 w-full" data-name="Cart">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[82px] items-center p-[16px] relative w-full">
          <Hours4 />
          <IcnDrop2 />
        </div>
      </div>
    </div>
  );
}

function Hours5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-[10px] shrink-0 w-full" data-name="Hours">
      <Cart10 />
    </div>
  );
}

function Contetn10() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[237px]" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#868782] text-[15px] text-center text-nowrap whitespace-pre">Phone</p>
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">+375 (17) 327-10-45</p>
      <div className="absolute bg-neutral-800 h-[5px] left-[calc(50%+37.5px)] rounded-[100px] top-[31px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Cart11() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[12px] relative shrink-0 w-[327px]" data-name="Cart">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_0.4px] border-solid inset-0 pointer-events-none" />
      <Contetn10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#868782] text-[15px] text-center text-nowrap whitespace-pre">Address</p>
    </div>
  );
}

function Contetn11() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[269px]" data-name="Contetn">
      <Frame7 />
      <div className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">Октябрьская улица 16/24</p>
        <p className="mb-0">Minsk</p>
        <p className="mb-0">Minsk</p>
        <p className="mb-0">Belarus</p>
        <p>220030</p>
      </div>
    </div>
  );
}

function IcRoute6() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀟸
      </p>
    </div>
  );
}

function Cart12() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start pb-[16px] pl-0 pr-[16px] pt-[12px] relative shrink-0 w-[327px]" data-name="Cart">
      <Contetn11 />
      <IcRoute6 />
    </div>
  );
}

function Contetn12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-[10px] shrink-0 w-[343px]" data-name="contetn">
      <Cart11 />
      <Cart12 />
    </div>
  );
}

function Details2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Details">
      <p className="font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">Details</p>
      <Contetn12 />
    </div>
  );
}

function IcRoute7() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀌭
      </p>
    </div>
  );
}

function Contetn13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">Report an issue</p>
    </div>
  );
}

function Cart13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cart">
      <div aria-hidden="true" className="absolute border-[#bdbdbd] border-[0px_0px_0.4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[16px] relative w-full">
          <IcRoute7 />
          <Contetn13 />
        </div>
      </div>
    </div>
  );
}

function IcRoute8() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[2px] py-[4px] relative rounded-[15px] shrink-0 size-[30px]" data-name="icRoute">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] h-[14px] leading-[normal] relative shrink-0 text-[#0c79fe] text-[15px] text-center w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀋃
      </p>
    </div>
  );
}

function Contetn14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Contetn">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0c79fe] text-[17px] text-center text-nowrap whitespace-pre">Add to Favorites</p>
    </div>
  );
}

function Cart14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Cart">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center pl-0 pr-[16px] py-[16px] relative w-full">
          <IcRoute8 />
          <Contetn14 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col items-end pl-[16px] pr-0 py-0 relative w-full">
          <Cart13 />
          <Cart14 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-[calc(50%+0.5px)] top-[86px] translate-x-[-50%] w-[343px]" data-name="Content">
      <TopActions1 />
      <Hours5 />
      <Details2 />
      <Frame8 />
    </div>
  );
}

function Favorites2() {
  return (
    <div className="absolute bg-[#f7f7f6] h-[341px] left-0 rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.13)] top-[637px] w-[430px]" data-name="Favorites">
      <TopBar2 />
      <Content2 />
    </div>
  );
}

function SubwayLocation17() {
  return (
    <div className="absolute left-[calc(25%+81.5px)] size-[24px] top-[465px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation18() {
  return (
    <div className="absolute left-[calc(50%+13px)] size-[24px] top-[332px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation19() {
  return (
    <div className="absolute left-[calc(25%+44.5px)] size-[24px] top-[326px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation20() {
  return (
    <div className="absolute left-[calc(25%+1.5px)] size-[24px] top-[230px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SubwayLocation21() {
  return (
    <div className="absolute left-[calc(25%+68.5px)] size-[24px] top-[345px]" data-name="subway:location-1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="subway:location-1">
          <path d={svgPaths.pc700080} fill="var(--fill-0, #FF453A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[14px] text-neutral-800 tracking-[0.3337px] w-full">Dr. Bellamy Nicholas</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#969696] text-[12px] tracking-[0.2336px] w-full">1241 weber st, Kitchener, Ontario</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[11px] h-[76px] items-center justify-center left-[calc(25%+6.5px)] p-[18px] rounded-[8px] top-[150px] w-[238px]">
      <div className="relative shrink-0 size-[50px]">
        <img alt="" className="block max-w-none size-full" height="50" src={imgEllipse2109} width="50" />
      </div>
      <Frame15 />
    </div>
  );
}

function StatusBar3() {
  return (
    <div className="absolute h-[13.886px] left-[64px] top-[21.87px] w-[328px]" data-name="status bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 14">
        <g id="status bar">
          <path d={svgPaths.p319f3700} fill="var(--fill-0, black)" id="battery outline (35% opacity)" opacity="0.35" />
          <path d={svgPaths.p224f5af0} fill="var(--fill-0, black)" id="status bar_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[430px]">
      <div className="absolute bg-white h-[60px] left-0 top-0 w-[430px]" />
      <div className="absolute bg-black h-[37px] left-[152px] rounded-[19px] top-[11px] w-[126px]" data-name="Dynamic Island" />
      <StatusBar3 />
    </div>
  );
}

function DermatologistLocations3() {
  return (
    <div className="absolute bg-white h-[978px] left-[551px] overflow-clip rounded-[50px] shadow-[0px_60px_140px_0px_rgba(31,31,31,0.1)] top-0 w-[430px]" data-name="dermatologist locations 17">
      <Frame19 />
      <Group19 />
      <div className="absolute h-[854px] left-0 top-[123px] w-[430px]" data-name="Screenshot 2022-07-14 at 12.24 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20220714At12241} />
      </div>
      <TopNavigation3 />
      <Temperature3 />
      <Favorites2 />
      <SubwayLocation17 />
      <SubwayLocation18 />
      <SubwayLocation19 />
      <SubwayLocation20 />
      <SubwayLocation21 />
      <Frame16 />
    </div>
  );
}

export default function Frame20() {
  return (
    <div className="relative size-full">
      <DermatologistLocations />
      <DermatologistLocations1 />
      <DermatologistLocations2 />
      <DermatologistLocations3 />
    </div>
  );
}