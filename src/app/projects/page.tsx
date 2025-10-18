'use client'
import ClientOnly from '../components/ClientOnly'
import { motion } from 'framer-motion'

const CloudProjects: { title: string; desc: string; tags: string[]; date:string; href: string }[] = [
  {
    title: 'Security에 집중한 DevOps CI / CD 파이프라인 구축',
    desc: 'AWS 환경에서 CI/CD 파이프라인을 구축하고 SAST, SCA, DAST 등의 도구와 모니터링을 통해 Security에 집중한 DevOps 파이프라인을 구축하였습니다.',
    tags: ['AWS', 'Security', 'PM'],
    date: '2024.12 ~ 2025.02',
    href: '#',
  },
  {
    title: 'IaC(Infrastructure as Code) 자동화 및 Drift 관리',
    desc: 'AWS 인프라가 Terraform으로 관리되는 과정을 Git Pull Request를 기반의 Atlantis로 자동화 하였습니다. 또한 IaC 환경에서 발생하는 Drift를 효과적으로 관리할 수 있는 승인 및 롤백을 구현했습니다.',
    tags: ['Terraform', 'Atlantis', 'PM'],
    date: '2025.03 ~ 06',
    href: '#',
  },
  {
    title: 'OCSF 기반 보안 로그 통합 및 분석 프로젝트',
    desc: '이기종 시스템에서 발생하는 각각 다른 종류와 형태의 보안 로그를 OCSF라는 Format으로 정규화하여 로그 분석의 효율성을 향상시켰습니다. 또한 ELK를 통한 실시간 모니터링 구축과 Sigma Rules, 패턴 기반 탐지를 통해 공격 시나리오를 탐지할 수 있는 인프라를 구성하였습니다.',
    tags: ['Log', 'ELK', 'Sigma Rules'],
    date: '2025.05 ~ 08',
    href: '#',
  },
]

const WebProjects: { title: string; desc: string; tags: string[]; date:string; href: string }[] = [
  {
    title: '-',
    desc: '-',
    tags: ['-'],
    date: '-',
    href: '#',
  },
  {
    title: '- ',
    desc: '- ',
    tags: ['- '],
    date: '- ',
    href: '#',
  },
  {
    title: '-  ',
    desc: '-  ',
    tags: ['-  '],
    date: '-  ',
    href: '#',
  },
]

export default function ProjectsPage() {
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
        <h2 className="text-6xl font-bold mb-4 flex items-center justify-center">Projects</h2>
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={() => scrollToId('cloud')}
            className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            #Cloud Projects
          </button>
          <button
            onClick={() => scrollToId('web')}
            className="text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            #Web Projects
          </button>
        </div>
        <div className="items-start py-10">
          <div className="flex items-center justify-between mb-8">
            <h2 id="cloud" className="text-4xl font-bold mb-4">Cloud Projects</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400"></p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {CloudProjects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow transition h-full flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold">{p.title}</div>
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{p.date}</p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 flex-1">{p.desc}</p>

                <div className="flex items-center gap-2 mt-10 overflow-x-auto whitespace-nowrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 inline-block">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>


        <div className="flex items-center justify-between mb-8 pt-12">
            <h2 id="web" className="text-4xl font-bold mb-4 pt-15">Web Project</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400"></p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {WebProjects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow transition h-full flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold">{p.title}</div>
                </div>

                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{p.date}</p>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 flex-1">{p.desc}</p>

                <div className="flex items-center gap-2 mt-10 overflow-x-auto whitespace-nowrap">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700/50 inline-block">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
          </div>
        </section>
        </ClientOnly>
    </main>
    )
}