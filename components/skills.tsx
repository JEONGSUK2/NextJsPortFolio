'use client'

import { useEffect, useState } from "react";


export default function Skills(){

    interface SkillItem{
        title: string;
        progressBofore: number;
        progressAfter : number;
        desc: string;
    }
    

    const [progressBar, setProgressBar] =useState<boolean>(false);
    const [itemList, setItemList] = useState<SkillItem[]>([]); // 어떠한 데이터의 배열을 담을때 useState 옆 <데이터[]>를 입력해준다.

    useEffect(() => {
        
      const fetchData = async () => {
        
        try {
          const res = await fetch("api/skill");
          const data = await res.json();
          setItemList(data.data);
       
          setTimeout(() => {
            setProgressBar(true)
          }, 500);

        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [])

     return(
         <>
           {
            itemList.map((e,i)=>{
                return(
                    <div className="w-full h-20" key={i}>
                        <div className="w-full h-5 bg-[#e0e0de] rounded-[50px]">
                            <div className="h-full bg-[#c5db61] duration-1000 ease-out rounded-[50px] text-right relative mb-3 first:mt-10" style={{width: !progressBar ? e.progressBofore : e.progressAfter+"%"}} >
                                <p className="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{e.title}</p>
                            </div>
                                <span className="text-sm">{e.desc}</span>
                        </div>
                    </div>
                )
            })
           }
         </>
     )           
}
