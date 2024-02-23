"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
    return (
        <section className='flex flex-col container'>
            <h1 className='text-5xl text-center font-bold text-gray-800 my-16'>
                Ops, ocorreu um erro ao exibir esse pais!
            </h1>
            <Link className='flex items-center py-2 ' href="/">
                <Image 
                src={"arrow-back.svg"}
                alt='icon de seta de voltar'
                width={24}
                height={24}
                />
                Voltar
            </Link>
        </section>
    );
}