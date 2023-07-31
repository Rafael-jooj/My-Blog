import Image from "next/image"

export function Post(){
    return(
        <div className="bg-white p-10 mt-10 rounded-lg">
            <div className="flex flex-col mb-5">
                <h2 className="text-2xl">8 dicas fundamentais para quem está começando na programação</h2>
                <div>
                    <p>18 de janeiro de 2022, CodeNinja Dicas, Programação</p>
                </div>
            </div>
            <div>
                <Image src="/THUMB.png" alt="thumb" height={720} width={1280}/>
            </div>
            <div className="mt-5 text-md">
                <p>Fala turma, hoje vamos falar 8 dicas fundamentais para quem está começando na programação, dicas que eu queria muito ter escutado quando comecei minha jornada na programação. Vamos começar: Você não precisa ter faculdade para começar, ou para entrar pro…</p>
                <button className="bg-blue-300 py-3 px-5 mt-5 rounded-lg">Ler Mais...</button>
            </div>
        </div>
    )
}