import { Mail, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export const Contato = () => {
        return (
                <footer className="px-2 mt-16 pb-16" id='contact'>
                        <h2 className="font-sans font-extrabold text-center text-2xl bg-gradient-to-r from-[#ff3333] to-[#ff33c2] text-transparent bg-clip-text lg:text-3xl">
                                Contato
                        </h2>
                        <div className="flex flex-col items-center mt-4">
                                <Link
                                        href="mailto:theliomt@gmail.com"
                                        className="flex items-center text-sm text-secondary-text mb-4"
                                >
                                        <Mail size={20} className="mr-2" />
                                        theliomt@gmail.com
                                </Link>
                                <div className="flex">
                                        <Link href="https://github.com/OtrisX" target='_blank' className="mr-4 text-secondary-text hover:text-gray-800 transition-colors">
                                                <Github size={20} />
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/matheusferreirabr" target='_blank' className="text-secondary-text hover:text-gray-800 transition-colors">
                                                <Linkedin size={20} />
                                        </Link>
                                </div>
                        </div>
                </footer>
        )
}