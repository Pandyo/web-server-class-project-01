'use client'
import ClientOnly from './components/ClientOnly'
import { motion } from 'framer-motion'

export default function PortfolioPage() {
  return (
    <main className="relative flex flex-col min-h-screen pt-24 md:pt-28 bg-white dark:bg-[#0b1020] text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden">
        <ClientOnly>
        <motion.div
          initial={{ scale: 1, opacity: 0.15 }}
          animate={{ rotate: 360, scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[45vw] h-[45vw] max-w-[900px] max-h-[900px] bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl left-[-10%] top-[-20%]"
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.12 }}
          animate={{ rotate: -360, scale: 1.05, opacity: 0.16 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[35vw] h-[35vw] max-w-[700px] max-h-[700px] bg-gradient-to-br from-amber-300 via-red-300 to-pink-300 opacity-20 rounded-full blur-2xl right-[-10%] bottom-[10%]"
        />
      <section className="flex-grow flex items-center justify-center relative translate-y-10 md:translate-y-1">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:col-span-1"
            >
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight font-pacifico">
                Hyesu Portfolio 🐼
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 pl-2"></span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl pt-5 font-hyesu italic" >
                Hello. I am Park Hye-su, class of 24, currently studying Information Security at Joongbu University
            </p>

            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl font-hyesu italic">
                안녕하세요. 중부대학교 정보보호학과에 재학 중인 24학번 박혜수 입니다.
            </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="w-full md:col-span-2"
            >
              <div className="max-w-full md:max-w-[1100px] w-full mx-auto bg-indigo-100 from-white to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl shadow-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-60 bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl overflow-hidden rounded-xl">
                    <img src="/hyesu.JPG" alt="Hyesoo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center pt-8">
                    <div className="font-semibold text-4xl md:text-4xl px-3">박 혜 수</div>
                    <hr className="ml-3 border-t border-gray-400 mt-2 w-[400px]" />
                    <div className="text-sm text-slate-500 dark:text-slate-300 px-3 pt-2">중부대학교 정보보호학과</div>
                    <div className="text-sm text-slate-500 dark:text-slate-300 px-3">경기도 고양시 덕양구 대자동 동헌로 305</div>

                    <div className="mt-4 text-sm text-slate-600 dark:text-slate-300 pt-18">
                      <ul className="space-y-2 max-w-6xl mx-auto px-3 py-4">
                        <li className="whitespace-nowrap">📞 010-1234-5678</li>
                        <li className="whitespace-nowrap">✉️ keshupark0113@gmail.com</li>
                        <li className="flex items-center gap-1 whitespace-nowrap">
                          <img src="/instar.png" className="w-4 h-4 object-contain" alt="insta" />
                          <span>hs_050113</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    <footer className="mt-auto mx-auto px-6 py-5 text-center text-sm text-slate-500 w-full">
      <hr className="mb-4" />
        <div className="flex justify-center gap-3">
          <a href="https://github.com/Pandyo">
            <img src="/github.png" width="40" alt="github" />
          </a>
          <a href="https://pandyo.tistory.com/">
            <img src="/tistory.png" width="40" alt="tistory" />
          </a>
          <a href="https://www.linkedin.com/in/%ED%98%9C%EC%88%98-%EB%B0%95-48506b35a/">
            <img src="/linkedin.png" width="40" alt="linkedin" />
          </a>
        </div>
        <p className="mt-2">
          Copyright © 2025 pandyo
          <br />
          Contact: keshupark0113@gmail.com | 010-1234-5678 
        </p>     
      </footer>
      </ClientOnly>
    </main>
  )
}
