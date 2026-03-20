import React from 'react';
import Logo from './Logo';
import Menu from './Menu';

const NavbarContainer = () => {
  return (
    <>
        <header className='h-[10vh] w-[100vw] bg-black text-white flex justify-center items-center'>
            <nav className='flex justify-between w-[100vw] px-3 text-2xl font-bold'>
                <section>
                    <Logo />
                </section>
                <section>
                    <Menu />
                </section>
            </nav>
        </header>
    </>
  )
}

export default NavbarContainer