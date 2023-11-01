import { NextResponse } from "next/server";


interface MainItem{
    International: string;
    Code: string;
    Name: string;
}

interface MainData{
    data: MainItem[];
}

export async function GET() : Promise<NextResponse>{

    const data :MainItem[] = [
            {
                "International": "false",
                "Code": "04",
                "Name": "CJ대한통운"
            },
            {
                "International": "false",
                "Code": "05",
                "Name": "한진택배"
            },
            {
                "International": "false",
                "Code": "08",
                "Name": "롯데택배"
            },
            {
                "International": "false",
                "Code": "01",
                "Name": "우체국택배"
            },
            {
                "International": "false",
                "Code": "06",
                "Name": "로젠택배"
            },
            {
                "International": "false",
                "Code": "11",
                "Name": "일양로지스"
            },
            {
                "International": "true",
                "Code": "12",
                "Name": "EMS"
            },
            {
                "International": "true",
                "Code": "13",
                "Name": "DHL"
            },
            {
                "International": "false",
                "Code": "20",
                "Name": "한덱스"
            },
            {
                "International": "true",
                "Code": "21",
                "Name": "FedEx"
            },
            {
                "International": "true",
                "Code": "14",
                "Name": "UPS"
            },
            {
                "International": "true",
                "Code": "26",
                "Name": "USPS"
            },
            {
                "International": "false",
                "Code": "22",
                "Name": "대신택배"
            },
            {
                "International": "false",
                "Code": "23",
                "Name": "경동택배"
            },
            {
                "International": "false",
                "Code": "32",
                "Name": "합동택배"
            },
            {
                "International": "false",
                "Code": "46",
                "Name": "CU 편의점택배"
            },
            {
                "International": "false",
                "Code": "24",
                "Name": "GS Postbox 택배"
            },
            {
                "International": "true",
                "Code": "25",
                "Name": "TNT Express"
            },
            {
                "International": "false",
                "Code": "16",
                "Name": "한의사랑택배"
            },
            {
                "International": "false",
                "Code": "17",
                "Name": "천일택배"
            },
            {
                "International": "false",
                "Code": "18",
                "Name": "건영택배"
            },
            {
                "International": "true",
                "Code": "28",
                "Name": "GSMNtoN"
            },
            {
                "International": "true",
                "Code": "30",
                "Name": "KGL네트웍스"
            },
            {
                "International": "true",
                "Code": "33",
                "Name": "DHL Global Mail"
            },
            {
                "International": "true",
                "Code": "34",
                "Name": "i-Parcel"
            },
            {
                "International": "true",
                "Code": "37",
                "Name": "LX판토스"
            },
            {
                "International": "true",
                "Code": "38",
                "Name": "ECMS Express"
            },
            {
                "International": "false",
                "Code": "40",
                "Name": "굿투럭"
            },
            {
                "International": "true",
                "Code": "41",
                "Name": "GSI Express"
            },
            {
                "International": "true",
                "Code": "42",
                "Name": "CJ대한통운 국제특송"
            },
            {
                "International": "false",
                "Code": "43",
                "Name": "애니트랙"
            },
            {
                "International": "false",
                "Code": "44",
                "Name": "SLX택배"
            },
            {
                "International": "false",
                "Code": "45",
                "Name": "우리택배(구호남택배)"
            },
            {
                "International": "false",
                "Code": "47",
                "Name": "우리한방택배"
            },
            {
                "International": "true",
                "Code": "48",
                "Name": "ACI Express"
            },
            {
                "International": "true",
                "Code": "49",
                "Name": "A.C.E EXPRESS INC"
            },
            {
                "International": "true",
                "Code": "50",
                "Name": "GPS Logix"
            },
            {
                "International": "true",
                "Code": "51",
                "Name": "성원글로벌카고"
            },
            {
                "International": "false",
                "Code": "53",
                "Name": "농협택배"
            },
            {
                "International": "false",
                "Code": "54",
                "Name": "홈픽택배"
            },
            {
                "International": "true",
                "Code": "55",
                "Name": "EuroParcel"
            },
            {
                "International": "true",
                "Code": "57",
                "Name": "Cway Express"
            },
            {
                "International": "true",
                "Code": "60",
                "Name": "YJS글로벌(영국)"
            },
            {
                "International": "true",
                "Code": "63",
                "Name": "은하쉬핑"
            },
            {
                "International": "true",
                "Code": "65",
                "Name": "YJS글로벌(월드)"
            },
            {
                "International": "true",
                "Code": "66",
                "Name": "Giant Network Group"
            },
            {
                "International": "true",
                "Code": "67",
                "Name": "디디로지스"
            },
            {
                "International": "true",
                "Code": "69",
                "Name": "대림통운"
            },
            {
                "International": "true",
                "Code": "70",
                "Name": "LOTOS CORPORATION"
            },
            {
                "International": "false",
                "Code": "71",
                "Name": "IK물류"
            },
            {
                "International": "false",
                "Code": "72",
                "Name": "성훈물류"
            },
            {
                "International": "true",
                "Code": "73",
                "Name": "CR로지텍"
            },
            {
                "International": "false",
                "Code": "74",
                "Name": "용마로지스"
            },
            {
                "International": "false",
                "Code": "75",
                "Name": "원더스퀵"
            },
            {
                "International": "true",
                "Code": "77",
                "Name": "LineExpress"
            },
            {
                "International": "false",
                "Code": "79",
                "Name": "로지스밸리택배"
            },
            {
                "International": "true",
                "Code": "81",
                "Name": "제니엘시스템"
            },
            {
                "International": "false",
                "Code": "82",
                "Name": "컬리넥스트마일"
            },
            {
                "International": "true",
                "Code": "84",
                "Name": "스마트로지스"
            },
            {
                "International": "false",
                "Code": "85",
                "Name": "풀앳홈"
            },
            {
                "International": "false",
                "Code": "86",
                "Name": "삼성전자물류"
            },
            {
                "International": "true",
                "Code": "87",
                "Name": "이투마스(ETOMARS)"
            },
            {
                "International": "false",
                "Code": "88",
                "Name": "큐런택배"
            },
            {
                "International": "false",
                "Code": "89",
                "Name": "두발히어로"
            },
            {
                "International": "false",
                "Code": "90",
                "Name": "위니아딤채"
            },
            {
                "International": "true",
                "Code": "91",
                "Name": "하이브시티"
            },
            {
                "International": "false",
                "Code": "92",
                "Name": "지니고 당일배송"
            },
            {
                "International": "true",
                "Code": "93",
                "Name": "팬스타국제특송(PIEX)"
            },
            {
                "International": "false",
                "Code": "94",
                "Name": "오늘의픽업"
            },
            {
                "International": "true",
                "Code": "95",
                "Name": "큐익스프레스"
            },
            {
                "International": "false",
                "Code": "96",
                "Name": "로지스밸리"
            },
            {
                "International": "true",
                "Code": "97",
                "Name": "에이씨티앤코아물류"
            },
            {
                "International": "true",
                "Code": "99",
                "Name": "롯데택배 해외특송"
            },
            {
                "International": "true",
                "Code": "100",
                "Name": "나은물류"
            },
            {
                "International": "false",
                "Code": "101",
                "Name": "한샘서비스원 택배"
            },
            {
                "International": "true",
                "Code": "102",
                "Name": "배송하기좋은날(SHIPNERGY)"
            },
            {
                "International": "false",
                "Code": "103",
                "Name": "NDEX KOREA"
            },
            {
                "International": "false",
                "Code": "104",
                "Name": "도도플렉스(dodoflex)"
            },
            {
                "International": "true",
                "Code": "105",
                "Name": "BRIDGE LOGIS"
            },
            {
                "International": "true",
                "Code": "106",
                "Name": "허브넷로지스틱스"
            },
            {
                "International": "false",
                "Code": "107",
                "Name": "LG전자(판토스)"
            },
            {
                "International": "true",
                "Code": "108",
                "Name": "MEXGLOBAL"
            },
            {
                "International": "true",
                "Code": "109",
                "Name": "파테크해운항공"
            },
            {
                "International": "false",
                "Code": "110",
                "Name": "부릉"
            },
            {
                "International": "true",
                "Code": "111",
                "Name": "SBGLS"
            },
            {
                "International": "false",
                "Code": "112",
                "Name": "1004홈"
            },
            {
                "International": "false",
                "Code": "113",
                "Name": "썬더히어로"
            },
            {
                "International": "true",
                "Code": "114",
                "Name": "캐나다쉬핑"
            },
            {
                "International": "false",
                "Code": "116",
                "Name": "(주)팀프레시"
            },
            {
                "International": "true",
                "Code": "117",
                "Name": "YUNDA EXPRESS"
            },
            {
                "International": "false",
                "Code": "118",
                "Name": "롯데칠성"
            },
            {
                "International": "false",
                "Code": "119",
                "Name": "핑퐁"
            },
            {
                "International": "false",
                "Code": "120",
                "Name": "발렉스 특수물류"
            },
            {
                "International": "true",
                "Code": "121",
                "Name": "바바바(bababa)"
            },
            {
                "International": "true",
                "Code": "122",
                "Name": "BAIMA EXPRESS"
            },
            {
                "International": "false",
                "Code": "123",
                "Name": "엔티엘피스"
            },
            {
                "International": "true",
                "Code": "124",
                "Name": "LTL"
            },
            {
                "International": "false",
                "Code": "125",
                "Name": "GTS로지스"
            },
            {
                "International": "true",
                "Code": "126",
                "Name": "㈜올타코리아"
            },
            {
                "International": "false",
                "Code": "127",
                "Name": "로지스팟"
            },
            {
                "International": "true",
                "Code": "128",
                "Name": "판월드로지스틱㈜"
            },
            {
                "International": "false",
                "Code": "129",
                "Name": "홈픽 오늘도착"
            },
            {
                "International": "false",
                "Code": "130",
                "Name": "로지스파트너"
            },
            {
                "International": "false",
                "Code": "131",
                "Name": "딜리래빗"
            },
            {
                "International": "false",
                "Code": "132",
                "Name": "지오피"
            },
            {
                "International": "false",
                "Code": "134",
                "Name": "에이치케이홀딩스"
            },
            {
                "International": "false",
                "Code": "135",
                "Name": "HTNS"
            },
            {
                "International": "false",
                "Code": "136",
                "Name": "케이제이티"
            },
            {
                "International": "false",
                "Code": "137",
                "Name": "더바오"
            },
            {
                "International": "false",
                "Code": "138",
                "Name": "라스트마일"
            },
            {
                "International": "false",
                "Code": "139",
                "Name": "오늘회 러쉬"
            },
            {
                "International": "true",
                "Code": "140",
                "Name": "직구문"
            },
            {
                "International": "true",
                "Code": "141",
                "Name": "인터로지스"
            },
            {
                "International": "false",
                "Code": "142",
                "Name": "탱고앤고"
            },
            {
                "International": "false",
                "Code": "143",
                "Name": "투데이"
            },
            {
                "International": "true",
                "Code": "144",
                "Name": "큐브플로우(CUBEFLOW)"
            },
            {
                "International": "false",
                "Code": "145",
                "Name": "현대글로비스"
            },
            {
                "International": "true",
                "Code": "146",
                "Name": "국제로지스틱(KSE)"
            },
            {
                "International": "true",
                "Code": "147",
                "Name": "에스더쉬핑"
            },
            {
                "International": "false",
                "Code": "148",
                "Name": "ARGO"
            },
            {
                "International": "true",
                "Code": "149",
                "Name": "골드스넵스"
            },
            {
                "International": "false",
                "Code": "151",
                "Name": "자이언트"
            },
            {
                "International": "true",
                "Code": "152",
                "Name": "(주)엠티인터내셔널"
            },
            {
                "International": "true",
                "Code": "153",
                "Name": "(주)이지로지스틱"
            },
            {
                "International": "true",
                "Code": "154",
                "Name": "KT EXPRESS(케이티익스프레스)"
            },
            {
                "International": "false",
                "Code": "155",
                "Name": "HY"
            },
            {
                "International": "false",
                "Code": "156",
                "Name": "유피로지스"
            },
            {
                "International": "false",
                "Code": "157",
                "Name": "우진인터로지스"
            },
            {
                "International": "true",
                "Code": "158",
                "Name": "Auspost"
            },
            {
                "International": "false",
                "Code": "159",
                "Name": "삼다수 가정배송"
            },
            {
                "International": "false",
                "Code": "160",
                "Name": "와이드테크"
            },
            {
                "International": "true",
                "Code": "161",
                "Name": "SBP"
            },
            {
                "International": "true",
                "Code": "162",
                "Name": "SAP EXPRESS"
            },
            {
                "International": "false",
                "Code": "163",
                "Name": "위니온로지스"
            },
            {
                "International": "true",
                "Code": "164",
                "Name": "ICS LOGISTICS(아이씨에스 로지스틱스)"
            },
            {
                "International": "true",
                "Code": "165",
                "Name": "서림특송"
            },
            {
                "International": "true",
                "Code": "166",
                "Name": "Rincos"
            },
            {
                "International": "false",
                "Code": "167",
                "Name": "딜리박스"
            },
            {
                "International": "false",
                "Code": "168",
                "Name": "이스트라"
            }
        ]
        
    
    return NextResponse.json({data} as MainData);
}

