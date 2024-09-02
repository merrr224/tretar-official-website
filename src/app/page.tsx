import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope, faAngleRight, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FadeInBottom, KenBurnsBottom, TiltInBottom } from './components/animation';
//import { faBars, faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-solid-svg-icons';

interface ImageData {
  src: string;
  alt: string;
}
const images: ImageData[] = [
  { src: '/gallery/IMG_5012.jpeg', alt: '店内には多種多様なボードゲームをご用意しています' },
  { src: '/gallery/DSC05059.JPG', alt: '店内には多種多様なボードゲームをご用意しています' },
  { src: '/gallery/DSC05047.JPG', alt: '落ち着いた雰囲気の店内でゆったりお過ごしいただけます' },
  { src: '/gallery/DSC05038.JPG', alt: 'JR上野駅から徒歩3分でアクセスしやすい立地です' },
  { src: '/gallery/DSC05044.JPG', alt: '店舗は階段を登って2階にございます。TRETÅRのプレートが目印です' },
  { src: '/gallery/IMG_5013.jpeg', alt: 'ボードゲーム初心者でも楽しめる空間づくりを目指しています' },
  // 追加の画像をここに追加
];

const ImageGrid: FC = () => {
  return (
    <div className="columns-2 md:columns-3 lg:mx-12">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-40 xs:h-48 sm:h-64 lg:h-72 xl:h-96 mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

{/*
interface ImageData {
  src: string;
  alt: string;
  w: number;
  h: number;
}
const images: ImageData[] = [
  { src: '/gallery/IMG_5012.jpeg', alt: '店内には多種多様なボードゲームをご用意しています', w:4032, h:3024 },
  { src: '/gallery/DSC05059.JPG', alt: '店内には多種多様なボードゲームをご用意しています', w:1616, h:1080 },
  { src: '/gallery/DSC05047.JPG', alt: '落ち着いた雰囲気の店内でゆったりお過ごしいただけます', w:1616, h:1080 },
  { src: '/gallery/DSC05038.JPG', alt: 'JR上野駅から徒歩3分でアクセスしやすい立地です', w:1080, h:1616 },
  { src: '/gallery/DSC05044.JPG', alt: '店舗は階段を登って2階にございます。TRETÅRのプレートが目印です', w:1616, h:1080 },
  { src: '/gallery/IMG_5013.jpeg', alt: 'ボードゲーム初心者でも楽しめる空間づくりを目指しています', w:3024, h:4032 },
  // 追加の画像をここに追加
];

const ImageGrid: FC = () => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4">
      {images.map((image, index) => (
        <div key={index} className="relative mb-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.w}
            height={image.h}
            className="rounded-md"
          />
        </div>
      ))}
    </div>

  );
};
*/}


export default function Home() {
  return (
    <div className="bg-gray-100">
      <header className="z-50 p-4 w-full bg-white shadow text-gray-700 fixed">
        <div className="container flex justify-between items-center h-8 xs:h-10 sm:h-14 mx-auto">
          <div rel="noopener noreferrer" className="flex items-center p-2">
            <Link href="/" className="flex">
              <Image src="/logo/TRETAR-logo-navbar.png" alt="TRETÅR logo" className="h-6 xs:h-7 sm:h-10 w-auto" width={960} height={540} priority />
            </Link>
          </div>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400 hover:border-yellow-400">News</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#concept" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400 hover:border-yellow-400">Concept</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#service" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400 hover:border-yellow-400">Service</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#gallary" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400 hover:border-yellow-400">Gallary</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#access" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400 hover:border-yellow-400">Access</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#faq" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400 hover:border-yellow-400">FAQ</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#contact" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:text-yellow-400 hover:border-yellow-400">Contact</a>
            </li>
          </ul>
          <div className="flex-shrink-0 lg:flex">
            <button className="self-center px-[1.3rem] xs:px-6 sm:px-8 xl:px-10 py-[0.60rem] sm:py-3 text-xs xs:text-sm md:text-base xl:text-lg font-medium rounded-full bg-indigo-800 text-gray-200 hover:bg-indigo-600">
              <Link href="https://select-type.com/rsv/?id=FTVX8LZK96s&c_id=314993" target="_blank">予約サイトへ</Link></button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='pt-16 sm:pt-20'>

        {/* Hero Section */}
        {/* grid text-center place-items-center  */}
        <section className="flex flex-col justify-center text-center gap-[0.4rem] xs:gap-3 sm:gap-6 md:gap-10 lg:gap-14 xl:gap-20 pt-14 xs:pt-[4.8rem] sm:pt-28 md:pt-36 lg:pt-44 xl:pt-56 aspect-[16/9] bg-cover bg-[url('/bg-img/top-bg.jpg')]">
        {/* Overlay */}
        <div className="absolute inset-0 aspect-[16/9] mt-16 sm:mt-20 bg-black opacity-35"></div>
          <FadeInBottom>
              {/* Content */}
              <div className="relative z-10 text-white text-[1.95rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold md:font-extrabold lg:black">
                Let&#39;s Play Boardgame!
              </div>

              {/* mx-11 xs:mx-14  text-[0.6rem]*/}
              <div className="relative z-10 mx-4 xs:mt-1 text-white text-[0.65rem] xs:text-xs sm:txt-sm md:text-base lg:text-lg xl:text-xl font-medium sm:font-semibold">
                大人も子供も誰でも気軽に遊べるボードゲームを多数取り揃えています<br />
                心地よくてついつい居てしまうリラックスボードゲームスペースにあなたも魅了されませんか？
              </div>
              <div className="relative z-10 font-bold text-xs xs:text-sm sm:text-lg lg:text-xl xl:text-2xl text-yellow-400">2024年9月1日OPEN</div>
            
          </FadeInBottom>
        </section>
        {/* End Hero Section */}


        {/* Concept Section */}
        <section id="concept" className="bg-gray-50 py-10 xs:py-12 sm:py-20">
          {/* Container */}
          <div className="container mx-auto px-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <FadeInBottom>
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-semibold xs:font-bold mb-2 text-gray-900">
                  Concept
                </h1>
              </FadeInBottom>
              <FadeInBottom>
                <span className="w-24 xs:w-28 md:w-36 lg:w-40 h-[2px] mb-4 mt-1 xs:mt-4 md:mt-5 rounded-full bg-yellow-300 mx-auto"></span>
              </FadeInBottom>
              <FadeInBottom>
                <p className="mt-4 mx-11 xs:mx-12 sm:mx-18 lg:mx-auto leading-relaxed text-xs xs:text-sm sm:text-base text-gray-600">
                  「TRETÅR（トレートール）」とは「3杯目のおかわりのコーヒー」を意味するスウェーデン独自の言葉です
                  <br /><br />
                  ”思わず3杯おかわりしてしまうほどゆったりとした時間を過ごせる”
                  <br /><br />
                  ここTRETÅRでは、そんな幸せな価値観を感じられるような居心地の良い空間をご用意しています
                  <br /><br />
                  あなたもTRETÅRで「3杯目のおかわり」をしたくなるほどの至福のボードゲーム体験をしてみませんか？
                </p>
              </FadeInBottom>
            </div>
          </div>
          {/* End Container */}
        </section>
        {/* End Concept Section */}

        {/* Service Section */}
        <FadeInBottom>
          <section id="service" className="bg-gray-100 sm:py-20 py-12">
            {/* Container */}
            <div className="container mx-auto px-6 text-center  animate-tilt-in-bottom-1">
              <div className="flex flex-col w-full mb-12">
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-semibold xs:font-bold mb-2 text-gray-900">Service</h1>
                <span className="w-24 xs:w-28 md:w-36 lg:w-40 h-[2px] mb-4 mt-1 xs:mt-4 md:mt-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-xs xs:text-sm md:text-base text-gray-600">サービスと料金</p>
              </div>

              <FadeInBottom>
                <p className="px-5 pb-8 ml-4 font-semibold text-red-400 text-xs xs:text-sm sm:text-base md:text-lg">
                  ★OPEN記念キャンペーン中★<br />
                  全プラン割引価格にてご利用いただけます！<br />
                  （キャンペーン期間：2024年10月30日まで）
                </p>
              </FadeInBottom>

              <div className="container px-12 mx-auto">
                <div className="flex flex-wrap items-stretch mb-8">

                <FadeInBottom>
                  <div className="w-full md:w-1/2 xl:w-1/4 px-px sm:px-4 xl:px-2 mb-6 xs:mb-8 xl:mb-0">
                    <div className="bg-gray-600 text-white text-center rounded-t-sm">
                      <div className="py-2 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold">デイプラン</div>
                      <div className="pb-2 text-sm sm:text-base xl:text-lg tracking-tight">13:00〜18:00 遊び放題</div>
                    </div>
                    <div className="inline-flex w-full justify-center bg-white text-black py-5 xs:py-6 border rounded-b-sm border-gray-600">
                      <span className="text-xl sm:text-2xl font-semibold line-through">¥2,000</span>
                      <span><FontAwesomeIcon icon={faAngleRight} className="h-4 mx-3 my-[0.4rem]" /></span>
                      <span className="text-xl sm:text-2xl font-bold text-red-400">¥1,500</span>
                    </div>
                  </div>
                  </FadeInBottom>

                  <FadeInBottom>
                  <div className="w-full md:w-1/2 xl:w-1/4 px-px sm:px-4 xl:px-2 mb-6 xs:mb-8 xl:mb-0">
                    <div className="bg-gray-600 text-white text-center rounded-t-sm">
                      <div className="py-2 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold">ナイトプラン</div>
                      <div className="pb-2 text-sm sm:text-base xl:text-lg tracking-tight">18:00〜21:00 遊び放題</div>
                    </div>
                    <div className="inline-flex w-full justify-center bg-white text-black py-5 xs:py-6 border rounded-b-sm border-gray-600">
                      <span className="text-xl sm:text-2xl font-semibold line-through">¥1,500</span>
                      <span><FontAwesomeIcon icon={faAngleRight} className="h-4 mx-3 my-2" /></span>
                      <span className="text-xl sm:text-2xl font-bold text-red-400">¥1,000</span>
                    </div>
                  </div>
                  </FadeInBottom>

                  <FadeInBottom>
                  <div className="w-full md:w-1/2 xl:w-1/4 px-px sm:px-4 xl:px-2 mb-6 xs:mb-8 xl:mb-0">
                    <div className="bg-gray-600 text-white text-center rounded-t-sm">
                      <div className="py-2 flex items-center justify-center">
                        <span className="text-base sm:text-lg md:text-xl xl:text-2xl font-semibold">フリープラン</span>
                        <span className="ml-1 text-base font-medium text-yellow-400">★おすすめ</span>
                      </div>
                      <div className="pb-2 text-sm sm:text-base xl:text-lg tracking-tight">13:00〜21:00 遊び放題</div>
                    </div>
                    <div className="inline-flex w-full justify-center bg-white text-black py-5 xs:py-6 border rounded-b-sm border-gray-600">
                      <span className="text-xl sm:text-2xl font-semibold line-through">¥2,500</span>
                      <span><FontAwesomeIcon icon={faAngleRight} className="h-4 mx-3 my-2" /></span>
                      <span className="text-xl sm:text-2xl font-bold text-red-400">¥2,000</span>
                    </div>
                  </div>
                  </FadeInBottom>

                  <FadeInBottom>
                  <div className="w-full md:w-1/2 xl:w-1/4 px-px sm:px-4 xl:px-2 mb-6 xs:mb-8 xl:mb-0">
                    <div className="bg-gray-600 text-white text-center rounded-t-sm">
                      <div className="py-2 text-base sm:text-lg md:text-xl xl:text-2xl font-semibold">ショートプラン</div>
                      <div className="pb-2 text-sm sm:text-base xl:text-lg tracking-tight">いつでも2時間</div>
                    </div>
                    <div className="inline-flex w-full justify-center bg-white text-black py-5 xs:py-6 border rounded-b-sm border-gray-600">
                      <span className="text-xl sm:text-2xl font-semibold line-through">¥1,500</span>
                      <span><FontAwesomeIcon icon={faAngleRight} className="h-4 mx-3 my-2" /></span>
                      <span className="text-xl sm:text-2xl font-bold text-red-400">¥1,000</span>
                    </div>
                  </div>
                  </FadeInBottom>

                  <FadeInBottom>
                    <p className="px-0 lg:px-5 py-0 lg:py-5 text-xs xs:text-sm lg:text-base text-gray-900">
                      ※9名様以上でのご利用や当日のご予約、貸切利用のご相談は、予約サイトではなく
                      <a rel="noopener noreferrer" href="https://x.com/TRETARboardgame" target="_blank"><span className='hover:text-yellow-400 underline'>公式Ｘ</span></a>や
                      <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank"><span className='hover:text-yellow-400 underline'>Instagram</span></a>のDM、または
                      <a rel="noopener noreferrer" href="mailto:tretar.info@gmail.com?subject=お問い合わせ" target="_blank"><span className='hover:text-yellow-400 underline'>メール</span></a>でご連絡ください。
                    </p>
                  </FadeInBottom>

                </div>

                <FadeInBottom>
                  <button type="button" className="px-10 xs:px-12 py-3 my-1 xs:my-8 text-sm xs:text-base sm:text-lg rounded-full bg-indigo-800 text-gray-200 hover:bg-indigo-600">
                    <Link href="https://select-type.com/rsv/?id=FTVX8LZK96s&c_id=314993" target="_blank">予約サイトへ</Link>
                  </button>
                </FadeInBottom>

              </div>

              {/* End Container */}
            </div>
          </section>
        </FadeInBottom>
        {/* End Service Section */}


        {/* Lineup Section */}
        <FadeInBottom>
          <section id="access" className=" bg-gray-50 sm:py-20 py-12">
            {/* Container */}
            <div className="container mx-auto px-6">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-semibold xs:font-bold mb-2 text-gray-900">Lineup</h1>
                <span className="w-24 xs:w-28 md:w-36 lg:w-40 h-[2px] mb-4 mt-1 xs:mt-4 md:mt-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-xs xs:text-sm md:text-base text-gray-600">多種多様なボードゲームをご用意しています</p>

                <div className="mt-4 sm:px-6 lg:px-10">
                  <iframe
                    className="h-[70vh] w-full min-w-full bg-transparent p-2.5 border border-gray-300 mx-auto overflow-auto box-border"
                    src="https://bodoge.hoobby.net/spaces/tretar/embedded/games?q[order_type]=players_by_four_favorite_desc&image_size=small&font_size=small&icon_recommend=show&icon_new=show&name_en=show&myboardgame=show&staff_text=show&user_id=135189"
                  >
                    <Link href="https://bodoge.hoobby.net/spaces/tretar/games" target="_blank">ボドゲーマで見る</Link>
                  </iframe>

                </div>
                
              </div>
            </div>
          </section>
        </FadeInBottom>
        {/* End Gallary Section */}


        {/* Gallary Section */}
        <FadeInBottom>
          <section id="gallary" className="bg-gray-100 sm:py-20 py-12">
            {/* Container */}
            <div className="container mx-auto px-6 text-center">
              <div className="flex flex-col w-full mb-12">
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-semibold xs:font-bold mb-2 text-gray-900">Gallary</h1>
                <span className="w-24 xs:w-28 md:w-36 lg:w-40 h-[2px] mb-4 mt-1 xs:mt-4 md:mt-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-xs xs:text-sm md:text-base text-gray-600">ボードゲームをしながらゆったりとした時間が楽しめる空間をご用意しています</p>

                <div className='pt-6'>
                  <ImageGrid />
                </div>

              </div>
              {/* End Container */}
            </div>
          </section>
        </FadeInBottom>
        {/* End Gallary Section */}


        {/* Access Section */}
        <FadeInBottom>
          <section id="access" className=" bg-gray-50 sm:py-20 py-12">
            {/* Container */}
            <div className="container mx-auto px-6">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-semibold xs:font-bold mb-2 text-gray-900">Access</h1>
                <span className="w-24 xs:w-28 md:w-36 lg:w-40 h-[2px] mb-4 mt-1 xs:mt-4 md:mt-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-xs xs:text-sm md:text-base text-gray-600">2024年9月1日OPENの1号店は上野駅近くの好立地です</p>
              </div>

              <div className="max-w-[85rem] px-4 py-0 lg:py-6 mx-auto">
                {/* Grid */}
                <div className="grid md:grid-cols-2 justify-items-center gap-8 md:gap-4">
                  <div className="relative w-full pb-[80%]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d729.8963655998609!2d139.77961714995345!3d35.71434353746335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188fd2a2403c27%3A0x603a0c4ec02369a4!2zVFJFVMOFUiDjg4jjg6zjg7zjg4jjg7zjg6sgLyDkuIrph44g44Oc44O844OJ44Ky44O844Og44K544Oa44O844K5!5e0!3m2!1sja!2sjp!4v1724682986500!5m2!1sja!2sjp"
                      className="absolute top-0 left-0 w-full h-full border-0" 
                      loading="lazy" 
                    />
                  </div>
                  {/* End Col */}

                  <div className="sm:order-1 text-gray-800">
                    <ul className="list-none pl-5 md:pl-1 text-sm xs:text-base lg:text-xl space-y-2">
                      <li className='font-semibold'>営業時間</li>
                      <li>土曜／日曜／祝日　13:00～21:00</li>
                    </ul>
                    <ul className="list-none pl-5 md:pl-1 text-sm xs:text-base lg:text-xl py-8 xs:py-10 sm:py-12">
                      <li className='font-semibold'>住所</li>
                      <li>東京都台東区東上野４丁目１０−８　川崎ビル２階</li>
                    </ul>
                    <ul className="list-none pl-5 md:pl-1 text-sm xs:text-base lg:text-xl space-y-2">
                      <li className='font-semibold'>交通アクセス</li>
                      <li>JR山手線他／上野駅　入谷口徒歩3分</li>
                      <li>東京メトロ日比谷線／上野駅　1番出口徒歩5分</li>
                    </ul>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
              </div>

            </div>
            {/* End Container */}
          </section>
        </FadeInBottom>
        {/* End Menu Section */}


        {/* FAQ Section */}
        <FadeInBottom>
          <section id="faq" className="bg-gray-100 sm:py-20 py-12">
            {/* Container */}
            <div className="container mx-auto px-6">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-semibold xs:font-bold mb-2 text-gray-900">FAQ</h1>
                <span className="w-24 xs:w-28 md:w-36 lg:w-40 h-[2px] mb-4 mt-1 xs:mt-4 md:mt-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-xs xs:text-sm md:text-base text-gray-600">よくある質問</p>

                <div className="container flex flex-col justify-center text-left px-0 lg:px-4 pt-8 pb-0 lg:pb-8 mx-auto text-gray-900">
                  <div className="space-y-4 text-xs xs:text-sm lg:text-base">
                    <details className="w-full border rounded-lg bg-white">
                      <summary className="px-4 py-6 focus:outline-none focus-visible:ri">ボードゲームは初心者なのですが、大丈夫ですか？</summary>
                      <p className="px-4 py-6 pt-0 ml-3 -mt-2 font-semibold text-gray-900">
                        大丈夫です！初心者にもおすすめのボードゲームを多数ご用意しております！</p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                      <summary className="px-4 py-6 focus:outline-none focus-visible:ri">ボードゲームを持ち込んでもいいですか？</summary>
                      <p className="px-4 py-6 pt-0 ml-3 -mt-2 font-semibold text-gray-900">
                        持ち込みもOKです。 ただし、ギャンブルをイメージさせるような麻雀・ポーカートランプなどはご遠慮いただいております。あらかじめご了承ください。
                      </p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                      <summary className="px-4 py-6 focus:outline-none focus-visible:ri">飲食物の持ち込みルールはありますか？</summary>
                      <p className="px-4 py-6 pt-0 ml-3 -mt-2 font-semibold text-gray-900">
                        お菓子や飲み物の持ち込みはOKです。ただしアルコール類やボードゲームが汚れやすい食べ物の持ち込みは禁止です。また、ゴミは各自でお持ち帰りいただきますようお願いいたします。</p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                      <summary className="px-4 py-6 focus:outline-none focus-visible:ri">料金の支払方法は？</summary>
                      <p className="px-4 py-6 pt-0 ml-3 -mt-2 font-semibold text-gray-900">
                        ご予約当日のご来店時に、現金またはPayPayでお支払いください。
                      </p>
                    </details>
                    <details className="w-full border rounded-lg bg-white">
                      <summary className="px-4 py-6 focus:outline-none focus-visible:ri">その他注意事項</summary>
                      <p className="px-4 py-6 pt-0 ml-3 -mt-2 font-semibold text-gray-900">
                        9名様以上でのご利用や当日のご予約、貸し切り利用のご相談は、予約サイトからではなく
                        <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank"><span className='hover:text-yellow-300'>Instagram</span>のDMにご連絡ください。</a></p>
                    </details>
                  </div>
                </div>

              </div>
              {/* End Container */}
            </div>
          </section>
        </FadeInBottom>
        {/* End FAQ Section */}


        {/* Contact Section */}
        <FadeInBottom>
          <section id="contact" className="bg-white sm:py-20 py-12">
            {/* Container */}
            <div className="container mx-auto px-6 text-center">
              <div className="flex flex-col w-full">
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-semibold xs:font-bold mb-2 text-gray-900">Contact</h1>
                <span className="w-24 xs:w-28 md:w-36 lg:w-40 h-[2px] mb-4 mt-1 xs:mt-4 md:mt-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-xs xs:text-sm md:text-base text-gray-600">お問い合わせやSNSアカウントはこちら</p>

                <div className="container flex flex-col justify-center mx-auto mt-8 text-gray-900">

                  <div className="flex flex-col items-center mx-auto pb-3 mb-3 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full">
                      <a rel="noopener noreferrer" href="mailto:tretar.info@gmail.com?subject=お問い合わせ" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className="h-8 lg:h-10 text-gray-800 hover:text-yellow-300" />
                      </a>
                    </div>
                    <div className="flex-grow prose text-center sm:text-left prose-md text-xs xs:text-sm lg:text-base text-gray-800 hover:text-yellow-300">
                      <p><a rel="noopener noreferrer" href="mailto:tretar.info@gmail.com?subject=お問い合わせ" target="_blank">　tretar.info@gmail.com　</a></p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center mx-auto pb-3 mb-3 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full sm:mr-1">
                      <a rel="noopener noreferrer" href="https://x.com/TRETARboardgame" target="_blank">
                        <FontAwesomeIcon icon={faXTwitter} className="h-8 lg:h-10 text-gray-800 hover:text-yellow-300" />
                      </a>
                    </div>
                    <div className="flex-grow prose text-center sm:text-left prose-md text-xs xs:text-sm lg:text-base text-gray-800 hover:text-yellow-300">
                      <p><a rel="noopener noreferrer" href="https://x.com/TRETARboardgame" target="_blank">　@TRETARboardgame　</a></p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center mx-auto pb-3 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full sm:mr-3">
                      <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="h-8 lg:h-10 text-gray-800 hover:text-yellow-300" />
                      </a>
                    </div>
                    <div className="flex-grow prose text-center sm:text-left prose-md text-xs xs:text-sm lg:text-base text-gray-800 hover:text-yellow-300">
                      <p><a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank">　tretar_boardgame　　</a></p>
                    </div>
                  </div>

                </div>
              </div>
              {/* End Container */}
            </div>
          </section>
        </FadeInBottom>
        {/* End Contact Section */}


      </main>
      {/* End Main Content */}


      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-300 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <div rel="noopener noreferrer" className="flex justify-center space-x-3 md:justify-start">
                <div className="flex items-center justify-center ">
                  <Link href="/" className="flex">
                    <Image
                      src="/logo/TRETAR-logo.png"
                      alt="TRETÅR logo"
                      className="h-8 sm:h-12 w-auto"
                      width={456}
                      height={155}
                      priority
                    />
                  </Link>
                </div>
                <button type="button" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg rounded-full bg-indigo-800 text-gray-200 hover:bg-indigo-600">
                  <Link href="https://select-type.com/rsv/?id=FTVX8LZK96s&c_id=314993" target="_blank">予約サイトへ</Link>
                </button>
              </div>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-base xs:text-lg font-semibold">Category</p>
              <ul className="text-xs xs:text-sm font-light">
                <li>
                  <a rel="noopener noreferrer" href="#" className="hover:text-yellow-300">NEWS</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#concept" className="hover:text-yellow-300">CONCEPT</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#service" className="hover:text-yellow-300">SERVICE</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#gallary" className="hover:text-yellow-300">GALLARY</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#access" className="hover:text-yellow-300">ACCESS</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#faq" className="hover:text-yellow-300">FAQ</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#contact" className="hover:text-yellow-300">CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3 items-center">
              <p className="pb-3 text-base xs:text-lg font-semibold">Social</p>
              <ul className="grid justify-items-center md:justify-items-start">
                <li className="pb-3">
                  <a rel="noopener noreferrer" href="https://x.com/TRETARboardgame" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} className="h-8 sm:h-10 text-gray-300 hover:text-yellow-300" />
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="h-8 sm:h-10 text-gray-300 hover:text-yellow-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-4">
            <div className="py-2 xs:py-6 text-xs xs:text-sm text-center text-gray-300">© 2024 TRETÅR. All rights reserved.</div>
          </div>
        </div>
      </footer>
      {/* End Footer */}

    </div>
  )
}
