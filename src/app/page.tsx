import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FadeInBottom, KenBurnsBottom, TiltInBottom } from './components/animation';
//import { faBars, faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="font-sans bg-gray-100">
      <header className="z-50 p-4 w-full bg-white shadow text-gray-700 fixed">
        <div className="container flex justify-between sm:h-14 h-10 mx-auto">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">

            <Link href="/" className="flex">
              <Image src="/logo/TRETAR-logo-navbar.png" alt="SIMPLE" className="sm:h-10 w-auto h-8" width={960} height={540} priority />
            </Link>
          </a>
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
          <div className="items-center flex-shrink-0  lg:flex">
            <button className="self-center px-8 py-3 font-semibold rounded-full bg-indigo-800 text-gray-200 hover:bg-indigo-500">
              <Link href="https://select-type.com/rsv/?id=FTVX8LZK96s&c_id=314993" target="_blank">予約サイトへ</Link></button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='pt-16'>

        {/* Hero Section */}
          <section className="grid place-items-center aspect-[16/9] bg-cover bg-[url('/bg-img/img-play_02_blur_v2.png')] ">
            <FadeInBottom>
              <div className="text-center">
                {/* Content */}
                <h1 className="text-white lg:text-8xl sm:text-7xl text-4xl font-black pb-10">
                  Let&#39;s Play Boardgame!
                </h1>

                <p className="text-white sm:text-lg text-xs sm:font-normal font-light">
                  大人から子供まで誰でも気軽に遊べるボードゲームを多数取り揃えています<br />
                  心地よくて思わずついつい居てしまうリラックスボードゲームスペースにあなたも魅了されませんか？
                </p>
              </div>
            </FadeInBottom>
          </section>
        {/* End Hero Section */}


        {/* Concept Section */}
        <FadeInBottom>
          <section id="concept" className="bg-white py-20">
            {/* Container */}
            <div className="container mx-auto px-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-5xl text-3xl font-black mb-2 text-gray-900">
                  Concept
                </h1>
                <span className="w-28 h-[2px] my-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed sm:text-base text-sm text-gray-600">
                  世界有数の幸せな国スウェーデン、そんなのどかな土地には日本語にはない価値観の「TRETÅR」という言葉があります。
                  <br />
                  「TRETÅR」は「3杯目のおかわりのコーヒー」のことを意味する国特有の言葉で、
                  ”思わず3杯おかわりしてしまうほどゆっくり時間を過ごせる”という幸せな価値観に私たちは惚れ込みました。
                  <br />
                  ここTRETÅRでは、そんな価値観が味わえるような”ボードゲームをしながらゆったりとした時間が楽しめる空間”を目指しています。
                  <br />
                  あなたもTRETÅRで「3杯目のおかわり」をしたくなるほどの至福のボードゲーム体験を。
                </p>

              </div>
              <Image
                src="/bg-img/concept_02_wide.png"
                alt="SIMPLE"
                className="w-auto"
                width={1735}
                height={785}
                priority
              />
            </div>
            {/* End Container */}

          </section>
        </FadeInBottom>
        {/* End Concept Section */}

        {/* Service Section */}
        <FadeInBottom>
          <section id="service" className="bg-gray-50 py-20">
            {/* Container */}
            <div className="container mx-auto px-6 text-center  animate-tilt-in-bottom-1">
              <div className="flex flex-col w-full mb-12">
                <h1 className="sm:text-5xl text-3xl font-black mb-2 text-gray-900">Service</h1>
                <span className="w-28 h-[2px] my-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-base text-gray-600">サービスと料金</p>
              </div>

{/*
              <div className="grid justify-items-center">
                <Link href="/" className="flex">
                  <Image
                    src="/img/service_01.png"
                    alt="SIMPLE"
                    className="h-auto w-full md:px-72 mb-12"
                    width={1415}
                    height={2000}
                    priority
                  />
                </Link>
                <button type="button" className="px-8 py-3 text-lg rounded-full bg-indigo-800 text-gray-200">予約サイトへ</button>
              </div>
*/}

              <div className="container px-12 mx-auto">

                <div className="flex flex-wrap items-stretch -mx-4">
                  <div className="flex w-full mb-8 sm:px-4 md:w-1/3 lg:w-1/3 lg:mb-0">
                    <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-zinc-200">
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-gray-800">デイパック</h4>
                        <p className="mt-3 leadi text-lg text-gray-800">13:00 ～ 18:00</p>
                        <span className="text-5xl font-bold text-gray-800">￥2,000</span>
                      </div>
                      <ul className="flex-1 mb-6 text-gray-800">
                        <li className="flex mb-2 space-x-2">
                        </li>
                      </ul>
                      {/*<button type="button" className="inline-block px-5 py-3 font-semibold tracki text-center rounded bg-gray-400 text-gray-900">Get Started</button>*/}
                    </div>
                  </div>


                  <div className="flex w-full mb-8 sm:px-4 md:w-1/3 lg:w-1/3 lg:mb-0">
                    <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-slate-800 text-gray-100">
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold">ナイトパック</h4>
                          <p className="text-lg tracki">18:00 ～ 21:00</p>
                        <span className="text-5xl font-bold">￥1,500</span>
                      </div>
                      <ul className="flex-1 space-y-2">
                        <li className="flex items-center space-x-2">
                        </li>
                      </ul>
                      {/*<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracki text-center rounded bg-slate-950 text-gray-100">Get Started</a>*/}
                    </div>
                  </div>


                  <div className="flex w-full mb-8 sm:px-4 md:w-1/3 lg:w-1/3 lg:mb-0">
                    <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-zinc-100">
                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-gray-800">フリータイム</h4>
                        <p className="text-lg tracki text-gray-800">13:00 ～ 21:00</p>
                        <span className="text-5xl font-bold text-gray-800">￥2,500</span>
                      </div>
                      <ul className="space-y-2 text-gray-800">
                        <li className="flex space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-zinc-800">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                          </svg>
                          <span>おすすめ</span>
                        </li>
                      </ul>
                      {/*<a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracki text-center rounded bg-gray-400 text-gray-900">Get Started</a>*/}
                    </div>
                  </div>
                </div>
                
                <button type="button" className="px-12 py-3 m-8 text-lg rounded-full bg-indigo-800 text-gray-200">予約サイトへ</button>
  
              </div>


              {/*
                <div className={styles.sectionDescription}>
                  <table className={styles.feeTable}>
                    <thead></thead>
                    <tbody>
                      <tr>
                        <th>昼の部</th>
                        <th>夜の部</th>
                        <th className={styles.popular}><span className={styles.inner}><span className={styles.no1}>おすすめ</span>フリータイム</span></th>
                      </tr>
                      <tr className={styles.businessHours}>
                        <td>10:00～18:00</td>
                        <td>18:00～21:00</td>
                        <td className={styles.popular}>10:00～21:00</td>
                      </tr>
                      <tr className={styles.feeValue}>
                        <td>¥1,500</td>
                        <td>¥1,000</td>
                        <td className={styles.popular}>¥2,000</td>
                      </tr>
                      <tr>
                        <td><a href="#">予約する</a></td>
                        <td><a href="#">予約する</a></td>
                        <td><a href="#">予約する</a></td>
                      </tr>
                    </tbody>
                  </table>
                  <Image
                    className={styles.parallaxImg}
                    src="/service_bg_02.png"
                    alt=""
                    
                    width={1792}
                    height={1024}
                  />
                </div>
                */}
              {/* End Container */}
            </div>
          </section>
        </FadeInBottom>
        {/* End Service Section */}


        {/* Gallary Section */}
        <FadeInBottom>
          <section id="gallary" className="bg-white py-20">
            {/* Container */}
            <div className="container mx-auto px-6 text-center">
              <div className="flex flex-col w-full mb-12">
                <h1 className="sm:text-5xl text-3xl font-black mb-2 text-gray-900">Gallary</h1>
                <span className="w-28 h-[2px] my-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-base text-gray-600">ボードゲームをしながらゆったりとした時間が楽しめる空間をご用意しています（Comming soon...）</p>

                <div className="relative flex items-center justify-center w-full text-gray-50">
                  <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ri focus:ri focus:ri bg-gray-900">
                    <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                      <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                  <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                      <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?1" alt="Image 1" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                      <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?2" alt="Image 2" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                      <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?3" alt="Image 3" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                      <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?4" alt="Image 4" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                      <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?5" alt="Image 5" />
                    </div>
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                      <img className="object-cover object-center bg-gray-500 h-96 aspect-square" src="https://source.unsplash.com/random/240x360/?6" alt="Image 6" />
                    </div>
                  </div>
                  <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ri focus:ri focus:ri bg-gray-900">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                      <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>

              </div>
              {/* End Container */}
            </div>
          </section>
        </FadeInBottom>
        {/* End Gallary Section */}


        {/* Access Section */}
        <FadeInBottom>
          <section id="access" className=" bg-gray-50 py-20">
            {/* Container */}
            <div className="container mx-auto px-6">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-5xl text-3xl font-black mb-2 text-gray-900">Access</h1>
                <span className="w-28 h-[2px] my-5 rounded-full bg-yellow-300 mx-auto"></span>
                <p className="mx-auto leading-relaxed text-sm text-gray-600">駅徒歩3分の好立地に1号店がOPEN予定です</p>
              </div>

              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="grid sm:grid-cols-2 sm:items-center gap-8">
                  <div className="sm:order-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4852050567706!2d139.77735831282322!3d35.71428387246221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188e997cc92239%3A0x7490aab200e57b44!2z44CSMTEwLTAwMTUg5p2x5Lqs6YO95Y-w5p2x5Yy65p2x5LiK6YeO77yU5LiB55uu77yR77yQ4oiS77yY!5e0!3m2!1sja!2sjp!4v1720010883338!5m2!1sja!2sjp"
                      width="340" height="340" loading="lazy"></iframe>
                  </div>
                  {/* End Col */}

                  <div className="sm:order-1 text-gray-800">
                    <h2
                      className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800">
                      <a className="hover:text-blue-600" href="#">
                      </a>
                    </h2>
                    <ul className="list-none pl-5 text-xl py-12">
                      <li className='font-bold'>住所</li>
                      <li>東京都台東区東上野４丁目１０−８　川崎ビル２階</li>
                    </ul>
                    <ul className="list-none pl-5 text-xl space-y-2">
                    <li className='font-bold'>交通アクセス</li>
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
        <section id="faq" className="bg-white py-20">
          {/* Container */}
          <div className="container mx-auto px-6">
            <div className="flex flex-col w-full mb-12">
              <h1 className="sm:text-5xl text-3xl font-black mb-2 text-gray-900 text-center">FAQ</h1>
              <span className="w-28 h-[2px] my-5 rounded-full bg-yellow-300 mx-auto"></span>
              <p className="mx-auto leading-relaxed text-bas text-gray-600">よくある質問</p>

              <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 text-gray-900">
                <div className="space-y-4">
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ri">ボードゲームは初心者なのですが、大丈夫ですか？</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                      大丈夫です！ おすすめのボードゲームを人数や所要時間、難易度ごとに丁寧にご紹介していますので、初心者の方でも楽しめるゲームがすぐに見つけられます！</p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ri">ボードゲームを持ち込んでもいいですか？</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                      持ち込みもOKです。 ただし、ギャンブルをイメージさせるような麻雀・ポーカートランプなどはご遠慮いただいております。あらかじめご了承ください。 
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ri">飲食物の持ち込みルールはありますか？</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                      基本的にはお菓子や飲み物の持ち込みはOKです。ただしアルコール類やボードゲームが汚れやすい食べ物の持ち込みは禁止です。</p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ri">支払方法は？</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                      料金はご予約当日のご来店時に、現金またはPayPayでお支払いください。 
                    </p>
                  </details>
                  <details className="w-full border rounded-lg">
                    <summary className="px-4 py-6 focus:outline-none focus-visible:ri">その他注意事項</summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-900">
                    9名様以上でのご利用や当日のご予約は、予約サイトからではなく
                    <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank">InstagramのDMにご連絡ください。</a></p>
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
        <section id="contact" className="bg-gray-50 py-20">
          {/* Container */}
          <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col w-full mb-12">
              <h1 className="sm:text-5xl text-3xl font-black mb-2 text-gray-900">Contact</h1>
              <span className="w-28 h-[2px] my-5 rounded-full bg-yellow-300 mx-auto"></span>
              <p className="mx-auto leading-relaxed text-base text-gray-600">お問い合わせやSNSアカウントはこちら</p>
              <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 text-gray-900">

                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                    <a rel="noopener noreferrer" href="mailto:tretar.info@gmail.com?subject=お問い合わせ" target="_blank">
                      <FontAwesomeIcon icon={faEnvelope} className="h-10 text-gray-800 hover:text-yellow-300" />
                    </a>
                  </div>
                  <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md  text-gray-800 hover:text-yellow-300">
                    <p><a rel="noopener noreferrer" href="mailto:tretar.info@gmail.com?subject=お問い合わせ" target="_blank">　tretar.info@gmail.com　</a></p>
                  </div>
                </div>

                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                    <a rel="noopener noreferrer" href="https://x.com/TRETARboardgame" target="_blank">
                      <FontAwesomeIcon icon={faXTwitter} className="h-10 text-gray-800 hover:text-yellow-300" />
                    </a>
                  </div>
                  <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md  text-gray-800 hover:text-yellow-300">
                    <p><a rel="noopener noreferrer" href="https://x.com/TRETARboardgame" target="_blank">　@TRETARboardgame　</a></p>
                  </div>
                </div>

                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                  <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} className="h-10 text-gray-800 hover:text-yellow-300" />
                </a>
                  </div>
                  <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md  text-gray-800 hover:text-yellow-300">
                    <p><a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank">　tretar_boardgame　　</a></p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Container */}
          </div>
        </section>
        {/* End Contact Section */}


      </main>
      {/* End Main Content */}


      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-300 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                <div className="flex items-center justify-center ">
                  <Link href="/" className="flex">
                    <Image
                      src="/logo/TRETAR-logo.png"
                      alt="TRETÅR logo"
                      className="h-12 w-auto"
                      width={456}
                      height={155}
                      priority
                    />
                  </Link>
                </div>
                <button type="button" className="px-8 py-3 text-lg rounded-full bg-indigo-800 text-gray-200">予約サイトへ</button>
              </a>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul className="text-sm">
                <li>
                  <a rel="noopener noreferrer" href="#" className="hover:text-yellow-300">NEWS</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#" className="hover:text-yellow-300">CONCEPT</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#" className="hover:text-yellow-300">SERVICE</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#" className="hover:text-yellow-300">GALLARY</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#" className="hover:text-yellow-300">ACCESS</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#" className="hover:text-yellow-300">CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3 items-center">
              <p className="pb-3 text-lg font-medium">Social</p>
              <ul className="grid justify-center md:justify-start">
                <li className="pb-3">
                  {/*
                  <a rel="noopener noreferrer" href="https://twitter.com/TRETAR_info" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} className="h-10 text-gray-300 hover:text-yellow-300" />
                  </a>
                  */}
                  <a rel="noopener noreferrer" href="https://x.com/TRETARboardgame" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} className="h-10 text-gray-300 hover:text-yellow-300" />
                  </a>
                </li>
                <li>
                  {/*
                  <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_info/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="h-10 text-gray-300 hover:text-yellow-300" />
                  </a>
                  */}
                  <a rel="noopener noreferrer" href="https://www.instagram.com/tretar_boardgame/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className="h-10 text-gray-300 hover:text-yellow-300" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-4">
            <div className="py-6 text-sm text-center text-gray-300">© 2024 TRETÅR. All rights reserved.</div>
          </div>
        </div>
      </footer>
      {/* End Footer */}

    </div>
  )
}
