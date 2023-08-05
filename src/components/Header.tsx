import Logo from './Logo'
import { useState } from 'react';
import Link from 'next/link';

export function Header(){

    const [keyword, setKeyword] = useState('');

    const handleChangeKeyword = (event: any) => {
        setKeyword(event.target.value);
    };

    // const handleSearch = () => {
    //     router.push(`/search/${keyword}`);
    // };

    return(
        <header className='py-10 pl-[10%] pr-[10%] bg-white'>
            <div className='w-full max-w-[1120px] flex mx-auto flex-row justify-between'>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <div className='w-90 border rounded-lg border-black'>
                    <form method='get' action={`search/${keyword}`}>
                        <input className='p-2 w-80 rounded-lg outline-0' type="text" placeholder='Pesquisar' value={keyword} onChange={handleChangeKeyword}/>
                        <button className='w-10'>🔍</button>
                    </form>
                </div>
            </div>
        </header>
    )

}
