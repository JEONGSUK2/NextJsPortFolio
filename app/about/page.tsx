import Image from "next/image"
import AboutCom from "@/components/about"


export default function About(){    //function옆에 변수명의 시작은 무조건 대문자로 작성해줄 것
    return (
        <>
            <div className="w-full pt-12 mt-16 px-[2%] pb-8">
                <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
                    <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl">프로필</h3>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="h-auto flex overflow-hidden mt-8 flex-wrap justify-between">
                        <div className="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md dark:bg-[#272929] dark:text-[#ebf4f1] text-center border">
                            <Image src="https://via.placeholder.com/300" alt="300x300" className= "rounded-full mx-auto" width={300} height={300}/>
                            <ul>
                                <li className="pl-5 box-border pt-6">홍길동 / Hong Gil Dong</li>
                                <li className="pl-5 box-border pt-6"><a href="mailto:dlw3088@naver.com">dlw3088@naver.com</a></li>
                            </ul>
                        </div>
                        <div className="basis-full md:basis-[67.5%] mt-8 md:mt-0">
                            <AboutCom />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// 내부에서 링크를 이동할 때는 Link 태그를 사용하고 외부 링크를 이동할 때는 a href 태그를 사용한다.
// REACT의 경우 NavLink to 를 사용