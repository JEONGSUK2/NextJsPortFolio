

import Works from "@/components/works"



export default function Work(){          //function옆에 변수명의 시작은 무조건 대문자로 작성해줄 것

    
    return (
        <>
            <div className="w-full pt-12 mt-16 px-[2%] pb-8">
            <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
                    <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl">포트폴리오</h3>
                </div>
                <Works />
            </div>
        </>
    )
}

//컴포넌트 하나 만들어서 출력해보기 