"use client";

import { useEffect, useState } from "react";
import  React  from "react";


export default function About() {
  interface AbootItem {
    title: string;
    desc?: string;
    desc2?: string;
    date?: string[];
    dateDesc?: string[];
  }
  const [itemList, setItemList] = useState<AbootItem[]>([]); // 어떠한 데이터의 배열을 담을때 useState 옆 <데이터[]>를 입력해준다.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/about");
        const data = await res.json();
        setItemList(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {itemList.map((e, i) => {
        return (
          <React.Fragment key={i}>
            <div className="bg-white rounded-t-md border dark:bg-[#272929] dark:text-[#ebf4f1] p-5 mb-8 last:mb-0">
              <h3 className="text-base md:text-xl mb-4">{e.title}</h3>
              {e.desc && (
                <p className="mb-2 last:mb-0 text-sm md:text-base">
                  <span className="font-bolod">{e.desc}</span>
                  {e.desc2}
                </p>
              )}
              {e.date &&
                e.date.map((el, idx) => {
                  return (
                    <p key={idx} className="mb-2 last:mb-0 text-sm md:text-base"> {el} : {e.dateDesc && e.dateDesc[idx]}</p>
                  );
                })}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}
