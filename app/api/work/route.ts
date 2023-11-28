import { NextResponse } from "next/server";

interface workItem{
   img: string;
   descTitle: string;
   desc: string;
   keyword: string[];
   color: string[];
   font: string;
   tools: string[];
   date: string;
   contribution: string;
   type: string;
   orginal ?: string;
   create: string;
   git: string
}

interface workData{
    data: workItem[];
}


export async function GET() : Promise<NextResponse>{

    const data :workItem[] = [
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "15일",
   contribution: "100%",
   type: "Clone",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "15일",
   contribution: "100%",
   type: "Clone",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Clone",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Project",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Project",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Project",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Project",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Webapp",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Webapp",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    },
   {
    img: "https://via.placeholder.com/500",
   descTitle: "xxxx 사이트 클론 코딩",
   desc: "xxxx 사이트 클론코딩",
   keyword: ["#심플", "#깔끔", "반응형"],
   color: ["orange", "orangered", "darkorange"],
   font: "Noto Sans KR",
   tools: ["Figma", "VS CODE", "GIT"],
   date: "5일",
   contribution: "100%",
   type: "Webapp",
   orginal: "https://www.subway.co.kr" ,
   create: "https://www.naver.com",
   git: "http://www.github.com"
    }
    ]
    return NextResponse.json({data} as workData);
}