'use client'
import ClientOnly from '../components/ClientOnly'
import { motion } from 'framer-motion'

export default function AboutPage() {
    const scrollToId = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        const header = document.querySelector('header')
        const headerHeight = header ? header.getBoundingClientRect().height : 0
        const offset = 12
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - offset
        window.scrollTo({ top, behavior: 'smooth' })
    }
  return (
    <main className="relative flex flex-col min-h-screen pt-24 md:pt-28 bg-white dark:bg-[#0b1020] text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden">
        <ClientOnly>
        <motion.div
          initial={{ scale: 1, opacity: 0.15 }}
          animate={{ rotate: 360, scale: 1.2, opacity: 0.2 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          initial={{ scale: 1, opacity: 0.12 }}
          animate={{ rotate: -360, scale: 1.05, opacity: 0.16 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />

        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-6xl font-bold mb-4 flex items-center justify-center">About Me</h2>

        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => scrollToId('experience')}
            className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            #Experience
          </button>
          <button
            onClick={() => scrollToId('tech-stacks')}
            className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            #Tech Stacks
          </button>
          <button
            onClick={() => scrollToId('interest')}
            className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            #Interest
          </button>
          <button
            onClick={() => scrollToId('blog')}
            className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            #Blog
          </button>
        </div>
            <div className="items-start py-10">
                <h2 id="experience" className="text-4xl font-bold mb-4">Experience</h2>

                <div className="md:col-span-2">
                    <div className='flex items-center gap-3 pt-3 pl-2'>
                        <img src="JBU.png" className="w-20">
                        </img> 
                        <div>
                            <p className='text-lg text-slate-400'>2024.03 ~</p> <p className='text-xl'>중부대학교 정보보호학과</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 pt-7 pl-2'>
                        <img src="scp.png" className="w-20">
                        </img> 
                        <div>
                            <p className='text-lg text-slate-400'>2024.03 ~</p> <p className='text-xl'>중부대학교 정보보안 동아리 S.C.P</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 pt-7 pl-1'>
                        <img src="whitehat_school.png" className="w-20">
                        </img> 
                        <div>
                            <p className='text-lg text-slate-400'>2025.03 ~ 09</p> <p className='text-xl'>WhiteHat School 3rd</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 pt-7 pl-1'>
                        <img src="beaver_dam.png" className="w-20">
                        </img> 
                        <div>
                            <p className='text-lg text-slate-400'>2025.09 ~</p> <p className='text-xl'>Offensive Cloud Security Team - Beaver Dam</p>
                        </div>
                    </div>
                </div>
            </div>


          <div id="tech-stacks" className="items-start py-10">
              <h2 className="text-4xl font-bold mb-4">Tech Stacks</h2>
              <p className='pt-2'>다양한 프로젝트와 개인 공부로 Cloud, Web에 대한 기술 스택을 넓혀나가고 있습니다.</p>

            <div className="md:col-span-2 pt-7">
              <div className="grid sm:grid-cols-4 gap-4">
                <MotionCard title="Amazon AWS" body="aws.png" />
                <MotionCard title="Terraform" body="terraform.png" />
                <MotionCard title="Python" body="python.png" />
                <MotionCard title="PHP" body="php.png" />
                <MotionCard title="MySQL" body="mysql.png" />
                <MotionCard title="MongoDB" body="mongodb.png" />
                <MotionCard title="Docker" body="docker.png" />
                <MotionCard title="Elasticsearch" body="elasticsearch.png" />
                <MotionCard title="Logstash" body="logstash.png" />
                <MotionCard title="Kibana" body="kibana.png" />
                <MotionCard title="Sigma Rules" body="sigma.png" />
                <MotionCard title="GraphQL" body="graphql.png" />
                </div>
            </div>
          </div>

          <div className="items-start pt-9">
              <h2 id="interest" className="text-4xl font-bold mb-4">Interest</h2>
              <p className='pt-2'>현재 정보보안에 대하여 학습해가며 관심을 갖고 있는 분야는 다음과 같습니다.</p>
            <div className="md:col-span-2 pt-7">
              <h2 className="text-3xl">Cloud</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5">
                    <p className="p-4 bg-slate-100 rounded-lg shadow transition-shadow cursor-pointer">DevSecOps</p>
                    <p className="p-4 bg-slate-100 rounded-lg shadow transition-shadow cursor-pointer">IaC Security</p>
                    <p className="p-4 bg-slate-100 rounded-lg shadow transition-shadow cursor-pointer">Cloud Offensive Security</p>
                </div>
              <h2 className="text-3xl pt-5">WEB</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5">
                    <p className="p-4 bg-slate-100 rounded-lg shadow transition-shadow cursor-pointer">Web Hacking</p>
                </div>
            </div>
          </div>

          <div id="blog" className="items-start py-10">
              <h2 className="text-4xl font-bold mb-4 pt-10">Blog</h2>
              <p className='pt-2'>학습 기록 및 프로젝트에 대한 기록이 블로그 Github와 Tistroy에 작성되어 있습니다.</p>
            <div className="md:col-span-2 flex items-center gap-3 pt-10">
                <div>
                    <h2 className='flex items-center justify-center text-xl font-bold'>GitHub - Pandyo</h2>
                    <a href="https://github.com/Pandyo"><img src="git_pandyo.png"></img></a>
                </div>
                <div>
                    <h2 className='flex items-center justify-center text-xl font-bold'>Tistroy - Pandyo</h2>
                    <a href="https://pandyo.tistory.com"><img src="tistroy.png"></img></a>
                </div>
            </div>
          </div>
          </section>
        </ClientOnly>
    </main>
  )
}

function MotionCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.article

      className="rounded-lg p-5 bg-white dark:bg-slate-800 shadow"
    >
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex-1 flex items-center justify-center">
        <img src={body} className="w-40 h-20 object-contain"></img>
      </div>
    </motion.article>
  )
}