import { NextRequest ,NextResponse } from "next/server";


interface AbootItem{
    title: string;
    desc?: string;
    desc2?: string;
    date?: string[];
    dateDesc?: string[]
}

interface NavItem{
    name: string,
    link: string
}

interface SkillItem{
    title: string;
    progressBofore: number;
    progressAfter : number;
    desc: string;
}

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


export const GET =  async (req: NextRequest ) : Promise<NextResponse>=>{

    const type = req.nextUrl.searchParams.get("type")
    
    switch(type){
        case 'about': 
        const dataAbout :AbootItem[] = [
            {
                title: "◆ MIND",
                desc: "혼자 부딪혀봐야 온전히 내 것이 된다.",
                desc2: "는 마인드를 가지고 있어, 혼자 찾아보고 고민하여 문제 해결하는 것을 좋아합니다.",
            },
            {
                title: "◆ Education",
                date : [
                    "2023.06.29 ~ 2023.11.30",
                    "2023.01.01 ~ 2023.12.31",
                    "2023.01.01 ~ 2023.12.31",
                    "2023.01.01 ~ 2023.12.31"
                ],
                dateDesc: [
                    "(혼합+디지털컨버젼스) React를 활용한 프론트엔드 개발자 양성(SPA 프로젝트 개발) A",
                    "설명2",
                    "설명3",
                    "설명4"
                ]
            },
            {
                title: "◆ LICENSE",
                date:[
                    "2023.06",
                    "2023.05",
                    "2023.04"
                ],
                dateDesc: [
                    "자격증 이름1",
                    "자격증 이름2",
                    "자격증 이름3"
                ]
            }
        ]
        return NextResponse.json({dataAbout});

        case 'nav':  
        const dataNav :NavItem[] = [
            {
                name: "소개",
                link: "/about"
            },
            {
                name: "스킬",
                link: "/skill"
            },
            {
                name: "포트폴리오",
                link: "/work"
            },
        ]
        return NextResponse.json({dataNav});

        case 'skill':

        const dataSkill :SkillItem[] = [
            {
                title: "html",
                progressBofore: 0,
                progressAfter : 90,
                desc: "웹 표준에 준수하여, 마크업을 할 수 있으며, flex or grid를 활용하여 레이아웃을 구성을 할 수 있다."
            },
            {
                title: "css",
                progressBofore: 0,
                progressAfter : 80,
                desc: "마크업에 작성된 CLASS를 토대로, 디자인을 할 수 있다."
            },
            {
                title: "JS",
                progressBofore: 0,
                progressAfter : 70,
                desc: "웹 페이지 내 동적인 기능을 구현 , 서버의 데이터를 수신해 가공 할 수 있다."
            },
            {
                title: "REACT",
                progressBofore: 0,
                progressAfter : 40,
                desc: "REACT를 활용하여, SPA 사이트 제작을 할 수 있다. REDUX, ROUTER DOM등 다양한 라이브러리를 활용할 수 있다."
            },
            {
                title: "NEXTJS",
                progressBofore: 0,
                progressAfter : 60,
                desc: "REACT 프레임워크 NEXTJS를 활용하여 SSR 사이트 제작을 할 수 있다."
            },
        ]
        return NextResponse.json({dataSkill});



        case 'work' :
        const Workdata :workItem[] = [
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
             return NextResponse.json({Workdata});

        default :
        return NextResponse.json({error: "파라미터가 에러 발생"})
    }

    
}


//ssr, csr 로딩속도의 차이가 나는데 ssr은 로딩된 상태로 출력되기때문에 초기속도가 훨씬빠르다
// csr은 로딩되면서 출력된다.
// ssr은 이벤트가 먹지 않기 때문에 제일 상단에 useClient를 사용한다. (한계 : 클라이언트서버 랜더링으로 변경되기 때문에 데이터가 많아질 경우 속도가 감소한다.)
// 그렇기 때문에 component파일을 생성하여 api데이터를 출력시켜줘야한다. 