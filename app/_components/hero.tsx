import Image from "next/image"
import Link from "next/link"

export const Hero = () => {
        return (
                <section className='px-2 mt-16' id='home'>
                        {/* <Image src="" alt="Thélio-foto" /> */}

                        <div className="max-w-5xl mx-auto">
                                <h1 className='text-white font-sans font-extrabold text-3xl text-center lg:text-7xl'>
                                        Faço código e resolvo seus <span className='bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text'>problemas!</span>
                                </h1>
                                <p className='text-secondary-text font-sans font-light text-center mt-4 lg:text-lg lg:max-w-xl mx-auto'>
                                        Sou desenvolvedor web full-stack e estou preparado para criar soluções personalizadas para suas necessidades.
                                </p>

                                <div className='flex mt-8 space-x-5 justify-center'>
                                        <Link href="https://api.whatsapp.com/send?phone=5521997142252&text=Ol%C3%A1%2C%20gostaria%20de%20" target='_blank' className='bg-white px-4 py-3 rounded-full font-semibold text-background'>Entre em contato</Link>
                                        <Link href="" className='bg-transparent border-white border-2 px-4 py-3 rounded-full font-semibold'>Baixar cv</Link>
                                </div>

                                <h2 className='text-secondary-text font-sans font-semibold text-center mt-10'>
                                        Desenvolvo com
                                </h2>
                                <div className='flex space-x-5 mt-4 justify-center'>
                                        <Image src="/react.svg" alt="React Icon" width={48} height={48} className="w-10" />
                                        <Image src="/javascript.svg" alt="JavaScript Icon" width={48} height={48} className="w-10" />
                                        <Image src="/nextjs.svg" alt="NextJs Icon" width={48} height={48} className="w-10" />
                                </div>
                        </div>

                </section>
        )
}
