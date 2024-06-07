import Image from "next/image";

const ExperienceItem = ({
        logo,
        alt,
        role,
        period,
        responsibilities,
}: {
        logo: string;
        alt: string;
        role: string;
        period: string;
        responsibilities: string[];
}) => (
        <div className="mt-8 lg:max-w-3xl">
                <div className="flex items-center gap-4">
                        <Image
                                src={logo}
                                alt={alt}
                                width={48}
                                height={48}
                                className="w-12 h-12 rounded-full"
                        />
                        <div>
                                <h3 className="font-bold">{role}</h3>
                                <span className="text-sm text-gray-500">{period}</span>
                        </div>
                </div>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
                        {responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                        ))}
                </ul>
        </div>
);

export const Experience = () => {
        const experiences = [
                {
                        logo: "/voudoarai.png",
                        alt: "VouDoarAi Logo",
                        role: "Desenvolvedor backend na VouDoarAi",
                        period: "Maio 2024 - Presente",
                        responsibilities: [
                                "Implementei integrações da OpenAI com o WhatsApp, desenvolvendo chatbots inteligentes capazes de fornecer respostas precisas e contextualizadas.",
                                "Construí a camada backend dessa solução utilizando o framework Adonis, garantindo uma estrutura robusta, escalável e de alto desempenho.",
                        ],
                },
        ];

        return (
                <section className="mt-16 px-2 flex flex-col items-center" id="experience">
                        <h2 className="font-sans font-extrabold text-center text-2xl bg-gradient-to-r from-[#7d60ff] to-[#33ffff] text-transparent bg-clip-text lg:text-3xl">
                                Experiência
                        </h2>
                        {experiences.map((experience, index) => (
                                <ExperienceItem key={index} {...experience} />
                        ))}
                </section>
        );
};