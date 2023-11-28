import { NextResponse } from "next/server";


interface AbootItem{
    title: string;
    desc?: string;
    desc2?: string;
    date?: string[];
    dateDesc?: string[]
}

interface AbootData{
    data: AbootItem[];
}

export async function GET() :  Promise<NextResponse>{

    const data :AbootItem[] = [
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
    return NextResponse.json({data} as AbootData);
}


//ssr, csr 로딩속도의 차이가 나는데 ssr은 로딩된 상태로 출력되기때문에 초기속도가 훨씬빠르다
// csr은 로딩되면서 출력된다.
// ssr은 이벤트가 먹지 않기 때문에 제일 상단에 useClient를 사용한다. (한계 : 클라이언트서버 랜더링으로 변경되기 때문에 데이터가 많아질 경우 속도가 감소한다.)
// 그렇기 때문에 component파일을 생성하여 api데이터를 출력시켜줘야한다. 