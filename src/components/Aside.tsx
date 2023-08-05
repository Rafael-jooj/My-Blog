export default function Aside(){
    return(
        <div className="bg-white p-10 rounded-lg mt-10">
            <h2 className="text-2xl mb-5">Posts recentes</h2>
            <div className="w-20 h-1 bg-blue-400 border-r-[40px] border-orange-500"></div>
            <div className="flex flex-col mt-5 gap-5">
                <p className="border-b-2 p-2 cursor-pointer">Soft skills essenciais que todo desenvolvedor precisa ter!</p>
                <p className="border-b-2 p-2 cursor-pointer">Roadmap Completo para se Tornar um Desenvolvedor Frontend do Zero</p>
                <p className="border-b-2 p-2 cursor-pointer">O Guia Definitivo para conseguir sua primeira vaga como programador</p>
                <p className="border-b-2 p-2 cursor-pointer">Desenvolvedor Júnior, Pleno e Sênior entenda a diferença</p>
                <p className="border-b-2 p-2 cursor-pointer">Como se tornar um Desenvolvedor Full Stack</p>
            </div>
        </div>
    )
}