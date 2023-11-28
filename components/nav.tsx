'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import Logo from '/public/images/120x50.png';
import Image from "next/image";
import { faUser, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItem {
    name : string,
    link: string
}


export default function Nav(){

    const icons = [faUser, faCode, faWindowMaximize];
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [menuList, setMenuList] = useState<NavItem[]>([])

    useEffect(()=>{
        const fetchData = async () =>{

        try{
            const res = await fetch("/api/nav");
            const data = await res.json();
            setMenuList(data.data)

        }catch(error){
            console.log(error)
        }

        }
        fetchData() //함수 실행 
    },[]) // [] 빈칸이기 때문에 최초 한번만 실행

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    return(
        <>
        <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1>
                        <Image width={120} height={50} src ={Logo} alt="로고" title="로고"></Image>
                </h1>
                <Link href="/about"></Link>
                <Link href="/">
                </Link>
                <div className="basis-3/4 hidden md:block">
                    <ul className="flex justify-around">
                        {
                            menuList.map((e,i)=>{  //map은 새로운 배열을 반복문 돌리는 것
                                return(
                                   <li className="relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-black
                                   after:bottom-0 after:left-0 after:transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100 " key={i}><Link href={e.link}>{e.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>


        <div className="fixed right-5 top-5 transition-all duration-500 z-[51] cursor-pointer md:hidden " onClick={toggleMenu}>
            <div className={`w-[90px] h-[10px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500 ${menuActive && 'rotate-45 translate-y-[13px] bg-slate-50'}` }></div>
            <div className={`w-[90px] h-[5px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500  ${menuActive && 'opacity-0 -translate-x-8 rotate-[360deg] ' }`}></div>
            <div className={`w-[90px] h-[10px] bg-black dark:bg-[#ebf4f1] rounded m-[5px] transition-all duration-500  ${menuActive && '-rotate-45 -translate-y-[13px] bg-red-600'}`}></div>
        </div>
        
        
        <div className={`w-72 h-full fixed -right-72 top-0 bg-gray-100 z-50 p-12 box-border transition-all duration-500 md:hidden  ${menuActive ? 'right-[0px] bg-[#FA8072]' :''}`}>
           <div className="text-center mt-6">
       
            <Image src = "https://via.placeholder.com/100" alt="100x100" title="100x100" width={100} height={100} className="mx-auto rounded-full mb-4"></Image>
            <p>프론트엔드 개발자 이정석</p>
           </div>
           <ul className="mt-12">   
                {
                    menuList.map((e,i)=>{
                        return(
                            <li className="pt-5 pb-2 border-b hover:font-bold hover:text-blue-950" key={i}><FontAwesomeIcon icon={icons[i]}/><Link href={e.link}>{e.name}</Link></li>
                            )
                    })
                }
            </ul>
        </div>
        </>
    )
}

// 넥스트 js에는 이벤트를 사용하지 못한다 . ssr에서는 useState나 event를 사용하지못한다. 
// 상단에 'use client' 사용하면 오류가 나지 않는다. 

//rotate-45 transition-y-[7px] opacity-0 -translate-x-8 -rotate-45 -translate-y-7px