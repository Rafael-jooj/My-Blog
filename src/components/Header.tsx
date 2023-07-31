import Logo from './Logo'

export function Header(){
    return(
        <header className='py-10 pl-[10%] pr-[10%] bg-white'>
            <div className='w-full max-w-[1120px] flex mx-auto flex-row justify-between'>
                <Logo/>
                <div className='w-90 border rounded-lg border-black'>
                    <input className='p-2 w-80 rounded-lg outline-0' type="text" placeholder='Pesquisar'/>
                    <button className='w-10'>🔍</button>
                </div>
            </div>
        </header>
    )
}