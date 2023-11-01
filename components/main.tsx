'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import Logo from '/public/images/120x50.png';
import Image from "next/image";
import { faUser, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface MainItem{
    International: string;
    Code: string;
    Name: string;
}

export default function Main(){

    const [menuList, setMenuList] = useState<MainItem[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch("/api/main");
                const data = await res.json();
                setMenuList(data.data)
    
            }catch(error){
                console.log(error)
            }
        };
        fetchData();
      }, []);

      return(
        <>
        <ul>
        {
            menuList.map((e,i)=>{
                return(
                    <li>{e.Name}</li>
                )
            })
        }
        </ul>
        </>
      )


}