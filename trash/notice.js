var notice = [
  // {
  //   type: "notice",
  //   content:
  //     "제보와 피드백은 하단의 이메일로 보내주시면 감사드리겠습니다. 제보시 기사,지자체 공식링크와 자세한 주소를 같이 보내주시면 정말 많은 도움이 될것 같습니다.감사드립니다."
  // },
  // {
  //   // date: new Date(2020, 1, 23, 15, 28),
  //   type: "notice",
  //   content:
  //     "제보시 빠른 분류를 위해 <span style='color:rgba(216, 90, 52, 0.925);'>이메일 제목에 [코로나 서울],[코로나 경기도],[코로나 충청도],[코로나 강원도] 등과 같이 코로나 키워드와 지역명을 붙여주시면</span>(ex.[코로나 서울] 서울 확진자 제보합니다.) 저희가 작업할때 좀 더 빠르게 업데이트가 가능할 것 같습니다!! 정말 감사드립니다."
  // },
  // {
  //   // date: new Date(2020, 2, 02, 01, 10),
  //   type: "notice",
  //   content:
  //     "I made an English version of corona map for foreign residents in Korea. It's still a prototype, so there's a lot of room for improvement, but please use it a lot. The English version button is located in the upper right corner. 국내 외국인주민분들을 위해 코로나맵 영어버전을 만들었습니다. 아직 프로토타입이라 부족한 점이 많지만 많은 사용 부탁드립니다. 영어버전 버튼은 우측 상단에 있습니다.",
  //   content_english:
  //     "I made an English version of corona map for foreign residents in Korea. It's still a prototype, so there's a lot of room for improvement, but please use it a lot. The English version button is located in the upper right corner."
  // },
  // {
  //   // date: new Date(2020, 2, 01, 08, 50),
  //   type: "notice",
  //   content:
  //     "내 주변 확진자 동선 정보를 <span style='font-weight:bolder;'>클릭한번</span>으로 확인해보세요!!!<br> 링크 : <a href='https://coroname.me'>코로나미</a>",
  // },
  {
    // date: new Date(2020, 2, 01, 08, 50),
    type: "notice",
    content: "피드백 및 오류제보, 기타 제안은 ehdgns1766@naver.com",
  },
  // {
  //   // date: new Date(2020, 2, 01, 08, 50),
  //   type: "notice",
  //   content:
  //     "코로나19가 장기화되고, 최근 집단 감염이 발생하여 코로나맵의 접속자가 점차 늘어나고 있습니다. 지금까지 지원받은 금액은 곧있으면 소진될 것 같아, 앞으로의 운영비용에 대해 고민하다가 후원을 통해 충당하기로 결정하였습니다. 이용해주셔서 항상 감사드립니다.<br><span style='color:rgb(11,41,211);font-weight:bolder'>코로나맵 후원 : 신한 110-384-660974 이동훈</span>",
  // },
  {
    // date: new Date(2020, 2, 01, 08, 50),
    type: "notice",
    content:
      "최근 집단 감염이 발생하여 하루 세자리에 달하는 확진자가 발생하여 업데이트 속도가 다소 느릴 수 있습니다ㅜㅜ 지원자분들과 함께 열심히 업뎃중이니 양해부탁드립니다.",
  },
  {
    date: new Date(2020, 8, 19, 16, 56),
    type: "notice",
    content:
      "현재 코로나맵 리뉴얼 작업중에 있어 당분간 확진자 업데이트가 최신화되지 않을 수 있습니다. 빠른 시일내에 돌아오도록 하겠습니다.",
    // content_english:
    //   "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 13, 14, 37),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 12, 12, 29),
    type: "notice",
    content: "전국 확진자 방문지 24곳 추가 업데이트 완료하였습니다.",
    content_english:
      "24 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 11, 13, 47),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 10, 15, 55),
    type: "notice",
    content: "전국 확진자 방문지 12곳 추가 업데이트 완료하였습니다.",
    content_english:
      "12 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 9, 16, 23),
    type: "notice",
    content: "전국 확진자 방문지 28곳 추가 업데이트 완료하였습니다.",
    content_english:
      "28 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 8, 17, 59),
    type: "notice",
    content: "전국 확진자 방문지 31곳 추가 업데이트 완료하였습니다.",
    content_english:
      "31 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 7, 16, 37),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 6, 16, 38),
    type: "notice",
    content: "전국 확진자 방문지 27곳 추가 업데이트 완료하였습니다.",
    content_english:
      "27 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 5, 17, 03),
    type: "notice",
    content: "전국 확진자 방문지 36곳 추가 업데이트 완료하였습니다.",
    content_english:
      "36 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 4, 11, 03),
    type: "notice",
    content: "전국 확진자 방문지 21곳 추가 업데이트 완료하였습니다.",
    content_english:
      "21 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 3, 12, 11),
    type: "notice",
    content: "전국 확진자 방문지 23곳 추가 업데이트 완료하였습니다.",
    content_english:
      "23 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 2, 17, 37),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 8, 1, 21, 22),
    type: "notice",
    content: "전국 확진자 방문지 115곳 추가 업데이트 완료하였습니다.",
    content_english:
      "115 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 31, 12, 45),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 30, 16, 55),
    type: "notice",
    content: "전국 확진자 방문지 32곳 추가 업데이트 완료하였습니다.",
    content_english:
      "32 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 29, 16, 22),
    type: "notice",
    content: "전국 확진자 방문지 36곳 추가 업데이트 완료하였습니다.",
    content_english:
      "36 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 28, 14, 49),
    type: "notice",
    content: "전국 확진자 방문지44곳 추가 업데이트 완료하였습니다.",
    content_english:
      "44 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 27, 15, 05),
    type: "notice",
    content: "전국 확진자 방문지 32곳 추가 업데이트 완료하였습니다.",
    content_english:
      "32 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 26, 17, 58),
    type: "notice",
    content: "전국 확진자 방문지 78곳 추가 업데이트 완료하였습니다.",
    content_english:
      "78 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 24, 16, 28),
    type: "notice",
    content: "전국 확진자 방문지 32곳 추가 업데이트 완료하였습니다.",
    content_english:
      "32 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 24, 16, 28),
    type: "notice",
    content: "전국 확진자 방문지 85곳 추가 업데이트 완료하였습니다.",
    content_english:
      "85 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 23, 15, 50),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 22, 19, 02),
    type: "notice",
    content: "전국 확진자 방문지 76곳 추가 업데이트 완료하였습니다.",
    content_english:
      "76 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 21, 15, 16),
    type: "notice",
    content: "전국 확진자 방문지 88곳 추가 업데이트 완료하였습니다.",
    content_english:
      "88 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 20, 13, 22),
    type: "notice",
    content: "전국 확진자 방문지 96곳 추가 업데이트 완료하였습니다.",
    content_english:
      "96 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 19, 11, 21),
    type: "notice",
    content: "전국 확진자 방문지 59곳 추가 업데이트 완료하였습니다.",
    content_english:
      "59 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 18, 14, 25),
    type: "notice",
    content: "전국 확진자 방문지 118곳 추가 업데이트 완료하였습니다.",
    content_english:
      "118 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 17, 16, 37),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 17, 14, 33),
    type: "notice",
    content:
      "확진자 수가 기하급수적으로 늘어나 빠르게 업데이트를 하지 못하는점 죄송합니다 ㅠㅠ 현재 지원자분들께서 도와주시는 중이며, 빠르게 업데이트 하도록 노력하겠습니다. 감사합니다.",
  },
  {
    date: new Date(2020, 7, 17, 12, 51),
    type: "notice",
    content: "전국 확진자 방문지 33곳 추가 업데이트 완료하였습니다.",
    content_english:
      "33 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 16, 11, 33),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 15, 14, 41),
    type: "notice",
    content: "전국 확진자 방문지 12곳 추가 업데이트 완료하였습니다.",
    content_english:
      "12 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 15, 11, 14),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 14, 12, 06),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 12, 22, 13),
    type: "notice",
    content: "전국 확진자 방문지 8곳 추가 업데이트 완료하였습니다.",
    content_english:
      "8 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 11, 09, 03),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 10, 19, 03),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 7, 20, 47),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 5, 19, 16),
    type: "notice",
    content: "전국 확진자 방문지 9곳 추가 업데이트 완료하였습니다.",
    content_english:
      "9 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 5, 14, 44),
    type: "notice",
    content: "전국 확진자 방문지 7곳 추가 업데이트 완료하였습니다.",
    content_english:
      "7 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 3, 21, 49),
    type: "notice",
    content: "전국 확진자 방문지 2곳 추가 업데이트 완료하였습니다.",
    content_english:
      "2 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 7, 1, 12, 27),
    type: "notice",
    content: "전국 확진자 방문지 7곳 추가 업데이트 완료하였습니다.",
    content_english:
      "7 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 31, 15, 05),
    type: "notice",
    content: "전국 확진자 방문지 14곳 추가 업데이트 완료하였습니다.",
    content_english:
      "14 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 28, 11, 14),
    type: "notice",
    content: "전국 확진자 방문지 8곳 추가 업데이트 완료하였습니다.",
    content_english:
      "8 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 27, 12, 38),
    type: "notice",
    content: "전국 확진자 방문지 10곳 추가 업데이트 완료하였습니다.",
    content_english:
      "10 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 24, 16, 59),
    type: "notice",
    content: "전국 확진자 방문지 19곳 추가 업데이트 완료하였습니다.",
    content_english:
      "19 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 23, 13, 40),
    type: "notice",
    content: "전국 확진자 방문지 21곳 추가 업데이트 완료하였습니다.",
    content_english:
      "21 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 22, 16, 32),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 20, 12, 06),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 18, 15, 20),
    type: "notice",
    content: "전국 확진자 방문지 18곳 추가 업데이트 완료하였습니다.",
    content_english:
      "18 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 17, 13, 36),
    type: "notice",
    content: "전국 확진자 방문지 23곳 추가 업데이트 완료하였습니다.",
    content_english:
      "23 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 15, 12, 29),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 13, 17, 42),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 12, 22, 46),
    type: "notice",
    content: "전국 확진자 방문지 19곳 추가 업데이트 완료하였습니다.",
    content_english:
      "19 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 11, 18, 41),
    type: "notice",
    content: "전국 확진자 방문지 14곳 추가 업데이트 완료하였습니다.",
    content_english:
      "14 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 10, 11, 53),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 9, 11, 23),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 8, 12, 34),
    type: "notice",
    content: "전국 확진자 방문지 33곳 추가 업데이트 완료하였습니다.",
    content_english:
      "33 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 6, 12, 15),
    type: "notice",
    content: "전국 확진자 방문지 25곳 추가 업데이트 완료하였습니다.",
    content_english:
      "29 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 5, 11, 46),
    type: "notice",
    content: "전국 확진자 방문지 25곳 추가 업데이트 완료하였습니다.",
    content_english:
      "25 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 4, 12, 20),
    type: "notice",
    content: "전국 확진자 방문지 37곳 추가 업데이트 완료하였습니다.",
    content_english:
      "37 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 3, 11, 26),
    type: "notice",
    content: "전국 확진자 방문지 31곳 추가 업데이트 완료하였습니다.",
    content_english:
      "31 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 2, 11, 40),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 6, 1, 11, 43),
    type: "notice",
    content: "전국 확진자 방문지 19곳 추가 업데이트 완료하였습니다.",
    content_english:
      "19 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 30, 12, 17),
    type: "notice",
    content: "전국 확진자 방문지 26곳 추가 업데이트 완료하였습니다.",
    content_english:
      "26 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 28, 12, 21),
    type: "notice",
    content: "전국 확진자 방문지 30곳 추가 업데이트 완료하였습니다.",
    content_english:
      "30 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 27, 15, 10),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 26, 15, 25),
    type: "notice",
    content: "전국 확진자 방문지 27곳 추가 업데이트 완료하였습니다.",
    content_english:
      "27 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 25, 12, 57),
    type: "notice",
    content: "전국 확진자 방문지 14곳 추가 업데이트 완료하였습니다.",
    content_english:
      "14 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 24, 12, 25),
    type: "notice",
    content: "전국 확진자 방문지 21곳 추가 업데이트 완료하였습니다.",
    content_english:
      "21 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 22, 13, 28),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 21, 18, 07),
    type: "notice",
    content: "전국 확진자 방문지 18곳 추가 업데이트 완료하였습니다.",
    content_english:
      "18 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 21, 10, 26),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 20, 16, 50),
    type: "notice",
    content: "전국 확진자 방문지 25곳 추가 업데이트 완료하였습니다.",
    content_english:
      "25 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 19, 16, 59),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 18, 18, 34),
    type: "notice",
    content: "전국 확진자 방문지 13곳 추가 업데이트 완료하였습니다.",
    content_english:
      "13 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 17, 11, 56),
    type: "notice",
    content: "전국 확진자 방문지 25곳 추가 업데이트 완료하였습니다.",
    content_english:
      "25 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 16, 16, 22),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 15, 16, 48),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 15, 12, 01),
    type: "notice",
    content: "전국 확진자 방문지 12곳 추가 업데이트 완료하였습니다.",
    content_english:
      "12 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 13, 16, 06),
    type: "notice",
    content: "전국 확진자 방문지 33곳 추가 업데이트 완료하였습니다.",
    content_english:
      "33 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 12, 12, 35),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 11, 16, 07),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 10, 15, 19),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 9, 17, 25),
    type: "notice",
    content: "전국 확진자 방문지 25곳 추가 업데이트 완료하였습니다.",
    content_english:
      "25 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 8, 17, 23),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 7, 14, 48),
    type: "notice",
    content: "전국 확진자 방문지 28곳 추가 업데이트 완료하였습니다.",
    content_english:
      "28 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 6, 15, 29),
    type: "notice",
    content: "전국 확진자 방문지 30곳 추가 업데이트 완료하였습니다.",
    content_english:
      "30 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 5, 14, 39),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 4, 15, 04),
    type: "notice",
    content: "전국 확진자 방문지 27곳 추가 업데이트 완료하였습니다.",
    content_english:
      "27 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 3, 15, 55),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 2, 13, 56),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 5, 1, 11, 23),
    type: "notice",
    content: "전국 확진자 방문지 30곳 추가 업데이트 완료하였습니다.",
    content_english:
      "30 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 31, 11, 33),
    type: "notice",
    content: "전국 확진자 방문지 23곳 추가 업데이트 완료하였습니다.",
    content_english:
      "23 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 30, 11, 02),
    type: "notice",
    content: "전국 확진자 방문지 26곳 추가 업데이트 완료하였습니다.",
    content_english:
      "31 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 29, 11, 02),
    type: "notice",
    content: "전국 확진자 방문지 31곳 추가 업데이트 완료하였습니다.",
    content_english:
      "26 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 28, 10, 52),
    type: "notice",
    content: "전국 확진자 방문지 40곳 추가 업데이트 완료하였습니다.",
    content_english:
      "40 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 27, 11, 52),
    type: "notice",
    content: "전국 확진자 방문지 33곳 추가 업데이트 완료하였습니다.",
    content_english:
      "33 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 26, 11, 00),
    type: "notice",
    content: "전국 확진자 방문지 28곳 추가 업데이트 완료하였습니다.",
    content_english:
      "28 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 25, 11, 33),
    type: "notice",
    content: "전국 확진자 방문지 21곳 추가 업데이트 완료하였습니다.",
    content_english:
      "21 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 24, 12, 31),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 23, 18, 09),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 23, 12, 45),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 22, 10, 40),
    type: "notice",
    content: "전국 확진자 방문지 31곳 추가 업데이트 완료하였습니다.",
    content_english:
      "31 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 21, 17, 24),
    type: "notice",
    content: "전국 확진자 방문지 25곳 추가 업데이트 완료하였습니다.",
    content_english:
      "25 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 21, 11, 05),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 20, 10, 41),
    type: "notice",
    content: "전국 확진자 방문지 27곳 추가 업데이트 완료하였습니다.",
    content_english:
      "27 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 19, 10, 43),
    type: "notice",
    content: "전국 확진자 방문지 13곳 추가 업데이트 완료하였습니다.",
    content_english:
      "13 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 18, 11, 03),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 17, 10, 17),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 16, 11, 16),
    type: "notice",
    content: "전국 확진자 방문지 27곳 추가 업데이트 완료하였습니다.",
    content_english:
      "27 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 15, 11, 01),
    type: "notice",
    content: "전국 확진자 방문지 41곳 추가 업데이트 완료하였습니다.",
    content_english:
      "41 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 14, 10, 59),
    type: "notice",
    content: "전국 확진자 방문지 34곳 추가 업데이트 완료하였습니다.",
    content_english:
      "34 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 13, 17, 43),
    type: "notice",
    content: "전국 확진자 방문지 19곳 추가 업데이트 완료하였습니다.",
    content_english:
      "19 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 13, 11, 29),
    type: "notice",
    content: "전국 확진자 방문지 48곳 추가 업데이트 완료하였습니다.",
    content_english:
      "48 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 12, 10, 50),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 11, 11, 01),
    type: "notice",
    content: "전국 확진자 방문지 47곳 추가 업데이트 완료하였습니다.",
    content_english:
      "47 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 10, 14, 16),
    type: "notice",
    content: "전국 확진자 방문지 4곳 추가 업데이트 완료하였습니다.",
    content_english:
      "4 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 10, 10, 32),
    type: "notice",
    content: "전국 확진자 방문지 10곳 추가 업데이트 완료하였습니다.",
    content_english:
      "10 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 9, 21, 48),
    type: "notice",
    content: "전국 확진자 방문지 37곳 추가 업데이트 완료하였습니다.",
    content_english:
      "37 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 9, 18, 24),
    type: "notice",
    content: "전국 확진자 방문지 13곳 추가 업데이트 완료하였습니다.",
    content_english:
      "13 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 9, 15, 53),
    type: "notice",
    content: "이태원 관련 확진자 동선을 업데이트 하였습니다.",
  },
  {
    date: new Date(2020, 4, 9, 15, 52),
    type: "notice",
    content: "전국 확진자 방문지 4곳 추가 업데이트 완료하였습니다.",
    content_english:
      "4 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 9, 15, 39),
    type: "notice",
    content: "전국 확진자 방문지 9곳 추가 업데이트 완료하였습니다.",
    content_english:
      "9 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 9, 12, 11),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 9, 10, 40),
    type: "notice",
    content: "전국 확진자 방문지 31곳 추가 업데이트 완료하였습니다.",
    content_english:
      "31 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 8, 12, 49),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 7, 10, 42),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 6, 14, 07),
    type: "notice",
    content: "전국 확진자 방문지 2곳 추가 업데이트 완료하였습니다.",
    content_english:
      "2 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 5, 10, 42),
    type: "notice",
    content: "전국 확진자 방문지 3곳 추가 업데이트 완료하였습니다.",
    content_english:
      "3 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 3, 12, 18),
    type: "notice",
    content: "전국 확진자 방문지 12곳 추가 업데이트 완료하였습니다.",
    content_english:
      "12 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 3, 10, 52),
    type: "notice",
    content: "전국 확진자 방문지 4곳 추가 업데이트 완료하였습니다.",
    content_english:
      "4 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 2, 11, 36),
    type: "notice",
    content: "전국 확진자 방문지 9곳 추가 업데이트 완료하였습니다.",
    content_english:
      "9 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 4, 1, 10, 36),
    type: "notice",
    content: "전국 확진자 방문지 5곳 추가 업데이트 완료하였습니다.",
    content_english:
      "5 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 30, 10, 16),
    type: "notice",
    content: "전국 확진자 방문지 4곳 추가 업데이트 완료하였습니다.",
    content_english:
      "4 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 29, 19, 35),
    type: "notice",
    content: "전국 확진자 방문지 3곳 추가 업데이트 완료하였습니다.",
    content_english:
      "3 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 29, 11, 50),
    type: "notice",
    content: "전국 확진자 방문지 14곳 추가 업데이트 완료하였습니다.",
    content_english:
      "14 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 28, 17, 23),
    type: "notice",
    content: "전국 확진자 방문지 5곳 추가 업데이트 완료하였습니다.",
    content_english:
      "5 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 28, 10, 32),
    type: "notice",
    content: "전국 확진자 방문지 9곳 추가 업데이트 완료하였습니다.",
    content_english:
      "9 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 27, 10, 26),
    type: "notice",
    content: "전국 확진자 방문지 28곳 추가 업데이트 완료하였습니다.",
    content_english:
      "28 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 26, 11, 51),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 25, 17, 04),
    type: "notice",
    content: "전국 확진자 방문지 2곳 추가 업데이트 완료하였습니다.",
    content_english:
      "2 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 25, 11, 20),
    type: "notice",
    content: "전국 확진자 방문지 7곳 추가 업데이트 완료하였습니다.",
    content_english:
      "7 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 24, 17, 27),
    type: "notice",
    content: "전국 확진자 방문지 3곳 추가 업데이트 완료하였습니다.",
    content_english:
      "3 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 24, 10, 20),
    type: "notice",
    content: "전국 확진자 방문지 8곳 추가 업데이트 완료하였습니다.",
    content_english:
      "8 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 23, 18, 31),
    type: "notice",
    content: "전국 확진자 방문지 4곳 추가 업데이트 완료하였습니다.",
    content_english:
      "4 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 23, 10, 28),
    type: "notice",
    content: "전국 확진자 방문지 10곳 추가 업데이트 완료하였습니다.",
    content_english:
      "10 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 22, 17, 40),
    type: "notice",
    content: "전국 확진자 방문지 4곳 추가 업데이트 완료하였습니다.",
    content_english:
      "4 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 22, 10, 41),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 21, 17, 10),
    type: "notice",
    content: "전국 확진자 방문지 9곳 추가 업데이트 완료하였습니다.",
    content_english:
      "9 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 21, 10, 36),
    type: "notice",
    content: "전국 확진자 방문지 5곳 추가 업데이트 완료하였습니다.",
    content_english:
      "5 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 20, 17, 31),
    type: "notice",
    content: "전국 확진자 방문지 6곳 추가 업데이트 완료하였습니다.",
    content_english:
      "6 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 20, 12, 42),
    type: "notice",
    content: "전국 확진자 방문지 25곳 추가 업데이트 완료하였습니다.",
    content_english:
      "25 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 19, 16, 01),
    type: "notice",
    content: "전국 확진자 방문지 4곳 추가 업데이트 완료하였습니다.",
    content_english:
      "4 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 19, 11, 06),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 18, 17, 35),
    type: "notice",
    content: "전국 확진자 방문지 10곳 추가 업데이트 완료하였습니다.",
    content_english:
      "10 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 18, 10, 52),
    type: "notice",
    content: "전국 확진자 방문지 14곳 추가 업데이트 완료하였습니다.",
    content_english:
      "14 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 17, 17, 11),
    type: "notice",
    content: "전국 확진자 방문지 9곳 추가 업데이트 완료하였습니다.",
    content_english:
      "9 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 17, 12, 42),
    type: "notice",
    content: "전국 확진자 방문지 38곳 추가 업데이트 완료하였습니다.",
    content_english:
      "38 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 17, 10, 47),
    type: "notice",
    content:
      "오전에 병원에 다녀와야해서 확진자 정보는 1시 이후에 업데이트될 예정입니다. 양해부탁드립니다.",
    // content_english:
    //   "13 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 16, 18, 10),
    type: "notice",
    content: "전국 확진자 방문지 13곳 추가 업데이트 완료하였습니다.",
    content_english:
      "13 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 16, 10, 52),
    type: "notice",
    content: "전국 확진자 방문지 26곳 추가 업데이트 완료하였습니다.",
    content_english:
      "26 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 15, 17, 50),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 15, 10, 48),
    type: "notice",
    content: "전국 확진자 방문지 34곳 추가 업데이트 완료하였습니다.",
    content_english:
      "34 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 14, 16, 53),
    type: "notice",
    content: "전국 확진자 방문지 11곳 추가 업데이트 완료하였습니다.",
    content_english:
      "11 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 14, 11, 10),
    type: "notice",
    content: "전국 확진자 방문지 40곳 추가 업데이트 완료하였습니다.",
    content_english:
      "40 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 13, 17, 04),
    type: "notice",
    content: "전국 확진자 방문지 13곳 추가 업데이트 완료하였습니다.",
    content_english:
      "13 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 13, 11, 00),
    type: "notice",
    content: "전국 확진자 방문지 15곳 추가 업데이트 완료하였습니다.",
    content_english:
      "15 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 12, 17, 52),
    type: "notice",
    content: "전국 확진자 방문지 22곳 추가 업데이트 완료하였습니다.",
    content_english:
      "22 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 12, 11, 41),
    type: "notice",
    content: "전국 확진자 방문지 29곳 추가 업데이트 완료하였습니다.",
    content_english:
      "29 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 11, 16, 49),
    type: "notice",
    content: "전국 확진자 방문지 8곳 추가 업데이트 완료하였습니다.",
    content_english:
      "8 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 11, 11, 38),
    type: "notice",
    content: "전국 확진자 방문지 46곳 추가 업데이트 완료하였습니다.",
    content_english:
      "46 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 10, 17, 32),
    type: "notice",
    content: "전국 확진자 방문지 21곳 추가 업데이트 완료하였습니다.",
    content_english:
      "21 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 10, 11, 07),
    type: "notice",
    content: "전국 확진자 방문지 68곳 추가 업데이트 완료하였습니다.",
    content_english:
      "68 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 9, 17, 58),
    type: "notice",
    content: "전국 확진자 방문지 16곳 추가 업데이트 완료하였습니다.",
    content_english:
      "16 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 9, 11, 35),
    type: "notice",
    content: "전국 확진자 방문지 36곳 추가 업데이트 완료하였습니다.",
    content_english:
      "36 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 8, 17, 19),
    type: "notice",
    content: "전국 확진자 방문지 38곳 추가 업데이트 완료하였습니다.",
    content_english:
      "38 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 8, 11, 27),
    type: "notice",
    content: "전국 확진자 방문지 40곳 추가 업데이트 완료하였습니다.",
    content_english:
      "40 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 7, 16, 13),
    type: "notice",
    content: "전국 확진자 방문지 76곳 추가 업데이트 완료하였습니다.",
    content_english:
      "76 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 7, 11, 49),
    type: "notice",
    content:
      "전국 확진자 방문지 49곳 추가 업데이트 완료하였습니다.수도권은 오후 5시에 업데이트 하도록 하겠습니다",
    content_english:
      "49 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 6, 17, 21),
    type: "notice",
    content: "전국 확진자 방문지 12곳 추가 업데이트 완료하였습니다.",
    content_english:
      "12 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 6, 11, 15),
    type: "notice",
    content: "전국 확진자 방문지 80곳 추가 업데이트 완료하였습니다.",
    content_english:
      "80 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 5, 17, 13),
    type: "notice",
    content: "전국 확진자 방문지 53곳 추가 업데이트 완료하였습니다.",
    content_english:
      "53 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 5, 11, 39),
    type: "notice",
    content:
      "전국 확진자 방문지 46곳 추가 업데이트 완료하였습니다.수도권은 오후 6시에 업데이트 하도록 하겠습니다.",
    content_english:
      "46 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 4, 17, 12),
    type: "notice",
    content: "전국 확진자 방문지 40곳 추가 업데이트 완료하였습니다.",
    content_english:
      "40 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 4, 10, 25),
    type: "notice",
    content:
      "전국 확진자 방문지 68곳 추가 업데이트 완료하였습니다. 수도권은 오후 6시에 업데이트 하도록 하겠습니다.",
    content_english:
      "68 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 3, 16, 51),
    type: "notice",
    content: "전국 확진자 방문지 26곳 추가 업데이트 완료하였습니다.",
    content_english:
      "26 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 3, 11, 14),
    type: "notice",
    content: "전국 확진자 방문지 77곳 추가 업데이트 완료하였습니다.",
    content_english:
      "77 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 2, 16, 18),
    type: "notice",
    content: "전국 확진자 방문지 81곳 추가 업데이트 완료하였습니다.",
    content_english:
      "81 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 2, 10, 49),
    type: "notice",
    content: "전국 확진자 방문지 59곳 추가 업데이트 완료하였습니다.",
    content_english:
      "59 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 1, 16, 57),
    type: "notice",
    content: "전국 확진자 방문지 27곳 추가 업데이트 완료하였습니다.",
    content_english:
      "27 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 1, 12, 16),
    type: "notice",
    content: "전국 확진자 방문지 85곳 추가 업데이트 완료하였습니다.",
    content_english:
      "85 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 3, 1, 10, 17),
    type: "notice",
    content:
      "방문지 색상이 잘못 표시되는 사항을 수정하였습니다. 이용에 혼란을 드려 죄송합니다.",
    content_english:
      "The destination color was displayed incorrectly. apologize for the inconvenience.",
  },
  {
    date: new Date(2020, 2, 31, 17, 24),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 31, 15, 13),
    type: "notice",
    content:
      "지역 검색 기능 UI를 개선하였습니다. 현재 지속적으로 변경중입니다.",
    content_english:
      "Improved local search function UI. It is currently changing to efficiency.",
  },
  {
    date: new Date(2020, 2, 31, 11, 27),
    type: "notice",
    content: "전국 확진자 방문지 84곳 추가 업데이트 완료하였습니다.",
    content_english:
      "84 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 30, 16, 54),
    type: "notice",
    content: "전국 확진자 방문지 45곳 추가 업데이트 완료하였습니다.",
    content_english:
      "45 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 30, 11, 36),
    type: "notice",
    content: "전국 확진자 방문지 73곳 추가 업데이트 완료하였습니다.",
    content_english:
      "73 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 29, 16, 42),
    type: "notice",
    content: "전국 확진자 방문지 36곳 추가 업데이트 완료하였습니다.",
    content_english:
      "36 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 29, 12, 58),
    type: "notice",
    content: "전국 확진자 방문지 77곳 추가 업데이트 완료하였습니다.",
    content_english:
      "77 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 28, 17, 11),
    type: "notice",
    content: "전국 확진자 방문지 42곳 추가 업데이트 완료하였습니다.",
    content_english:
      "42 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 28, 11, 20),
    type: "notice",
    content: "전국 확진자 방문지 60곳 추가 업데이트 완료하였습니다.",
    content_english:
      "60 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 27, 17, 17),
    type: "notice",
    content: "전국 확진자 방문지 17곳 추가 업데이트 완료하였습니다.",
    content_english:
      "17 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 27, 11, 02),
    type: "notice",
    content: "전국 확진자 방문지 75곳 추가 업데이트 완료하였습니다.",
    content_english:
      "75 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 26, 17, 30),
    type: "notice",
    content: "전국 확진자 방문지 20곳 추가 업데이트 완료하였습니다.",
    content_english:
      "20 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 26, 11, 28),
    type: "notice",
    content: "전국 확진자 방문지 63곳 추가 업데이트 완료하였습니다.",
    content_english:
      "63 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 25, 17, 37),
    type: "notice",
    content: "전국 확진자 방문지 115곳 추가 업데이트 완료하였습니다.",
    content_english:
      "115 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 25, 14, 00),
    type: "notice",
    content: "전국 확진자 방문지 98곳 추가 업데이트 완료하였습니다.",
    content_english:
      "98 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 25, 11, 35),
    type: "notice",
    content:
      "오전 중에 병원 다녀온 후에 업데이트 하도록 하겠습니다. 양해부탁드립니다.",
    content_english:
      "I'll update it after I get back from the hospital in the morning.",
  },
  {
    date: new Date(2020, 2, 24, 17, 55),
    type: "notice",
    content: "전국 확진자 방문지 24곳 추가 업데이트 완료하였습니다.",
    content_english:
      "24 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 24, 11, 31),
    type: "notice",
    content: "전국 확진자 방문지 50곳 추가 업데이트 완료하였습니다.",
    content_english:
      "50 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 23, 17, 44),
    type: "notice",
    content: "전국 확진자 방문지 21곳 추가 업데이트 완료하였습니다.",
    content_english:
      "21 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 23, 11, 35),
    type: "notice",
    content: "전국 확진자 방문지 46곳 추가 업데이트 완료하였습니다.",
    content_english:
      "46 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 22, 17, 45),
    type: "notice",
    content: "전국 확진자 방문지 52곳 추가 업데이트 완료하였습니다.",
    content_english:
      "52 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 22, 12, 03),
    type: "notice",
    content: "전국 확진자 방문지 95곳 추가 업데이트 완료하였습니다.",
    content_english:
      "95 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 21, 16, 21),
    type: "notice",
    content: "전국 확진자 방문지 30곳 추가 업데이트 완료하였습니다.",
    content_english:
      "30 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 21, 11, 27),
    type: "notice",
    content: "전국 확진자 방문지 66곳 추가 업데이트 완료하였습니다.",
    content_english:
      "66 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 20, 20, 21),
    type: "notice",
    content: "목적지 검색기능을 업데이트하였습니다.",
    // content_english:
    //   "32 additional nationwide confirmed visitor sites have been updated."
  },
  {
    date: new Date(2020, 2, 20, 17, 50),
    type: "notice",
    content: "전국 확진자 방문지 32곳 추가 업데이트 완료하였습니다.",
    content_english:
      "32 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 20, 12, 48),
    type: "notice",
    content: "전국 확진자 방문지 88곳 추가 업데이트 완료하였습니다.",
    content_english:
      "88 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 20, 10, 16),
    type: "notice",
    content:
      "오전 중에 병원 다녀온 후에 업데이트 하도록 하겠습니다. 양해부탁드립니다.",
    content_english:
      "I'll update it after I get back from the hospital in the morning.",
  },
  {
    date: new Date(2020, 2, 18, 17, 57),
    type: "notice",
    content: "전국 확진자 방문지 77곳 추가 업데이트 완료하였습니다.",
    content_english:
      "77 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 18, 11, 13),
    type: "notice",
    content: "전국 확진자 방문지 80곳 추가 업데이트 완료하였습니다.",
    content_english:
      "80 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 18, 17, 17),
    type: "notice",
    content: "전국 확진자 방문지 27곳 추가 업데이트 완료하였습니다.",
    content_english:
      "27 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 18, 11, 29),
    type: "notice",
    content:
      "전국 확진자 방문지 108곳 추가 업데이트 완료하였습니다.성남시 이동경로는 역학조사가 끝나는대로 업데이트하도록 하겠습니다.",
    content_english:
      "108 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 17, 16, 48),
    type: "notice",
    content:
      "전국 확진자 방문지 32곳 추가 업데이트 완료하였습니다.서울시와 성남 은혜의강교회 관련 확진자 이동경로는 역학조사가 끝나는대로 업데이트하도록 하겠습니다. 양해부탁드립니다.",
    content_english:
      "32 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 17, 16, 48),
    type: "notice",
    content:
      "전국 확진자 방문지 32곳 추가 업데이트 완료하였습니다.서울시와 성남 은혜의강교회 관련 확진자 이동경로는 역학조사가 끝나는대로 업데이트하도록 하겠습니다. 양해부탁드립니다.",
    content_english:
      "32 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 17, 11, 30),
    type: "notice",
    content:
      "전국 확진자 방문지 39곳 추가 업데이트 완료하였습니다.서울시와 성남 은혜의강교회 관련 확진자 이동경로는 역학조사가 끝나는대로 업데이트하도록 하겠습니다. 양해부탁드립니다.",
    content_english:
      "39 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 16, 17, 14),
    type: "notice",
    content: "전국 확진자 방문지 42곳 추가 업데이트 완료하였습니다.",
    content_english:
      "42 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 16, 11, 33),
    type: "notice",
    content: "전국 확진자 방문지 120곳 추가 업데이트 완료하였습니다.",
    content_english:
      "120 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 15, 16, 55),
    type: "notice",
    content: "전국 확진자 방문지를 업데이트 하였습니다.",
    content_english:
      "The nationwide confirmed visitor sites have been updated. ",
  },
  {
    date: new Date(2020, 2, 15, 11, 35),
    type: "notice",
    content: "전국 확진자 방문지 94곳 추가 업데이트 완료하였습니다.",
    content_english:
      "94 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 14, 17, 27),
    type: "notice",
    content: "전국 확진자 방문지 41곳 추가 업데이트 완료하였습니다.",
    content_english:
      "41 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 14, 11, 51),
    type: "notice",
    content:
      "전국 확진자 방문지 104곳 추가 업데이트 완료하였습니다. 주말동안 누락된 방문장소를 최대한 업데이트할 예정입니다. 감사드립니다.",
    content_english:
      "104 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 13, 17, 44),
    type: "notice",
    content: "전국 확진자 방문지 37곳 추가 업데이트 완료하였습니다.",
    content_english:
      "37 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 13, 11, 55),
    type: "notice",
    content: "전국 확진자 방문지 98곳 추가 업데이트 완료하였습니다.",
    content_english:
      "98 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 12, 17, 50),
    type: "notice",
    content: "전국 확진자 방문지 121곳 추가 업데이트 완료하였습니다.",
    content_english:
      "121 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 12, 11, 56),
    type: "notice",
    content:
      "전국 확진자 방문지 102곳 추가 업데이트 완료하였습니다. 구로구 콜센터 관련 정보는 역학조사가 끝나는대로 추가 업데이트하도록 하겠습니다.",
    content_english:
      "102 additional nationwide confirmed visitor sites have been updated.We will update the information regarding Guro-gu call center further as soon as the epidemiological investigation is complete",
  },
  {
    date: new Date(2020, 2, 11, 18, 00),
    type: "notice",
    content: "전국 확진자 방문지를 업데이트 하였습니다.",
    content_english:
      "The nationwide confirmed visitor sites have been updated. ",
  },
  {
    date: new Date(2020, 2, 11, 12, 06),
    type: "notice",
    content:
      "전국 확진자 방문지 127곳 추가 업데이트 완료하였습니다. 업데이트 되지않은 지역은 오늘중으로 빠르게 업데이트하도록 하겠습니다. 양해 부탁드립니다.",
    content_english:
      "127 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 10, 17, 45),
    type: "notice",
    content: "전국 확진자 방문지 64곳 추가 업데이트 완료하였습니다.",
    content_english:
      "64 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 10, 11, 47),
    type: "notice",
    content: "전국 확진자 방문지 68곳 추가 업데이트 완료하였습니다.",
    content_english:
      "68 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 10, 09, 43),
    type: "notice",
    content:
      "오전에 병원에 잠시 다녀오겠습니다. 치료 받고 빠르게 업데이트하도록 하겠습니다!!",
    content_english:
      "I'll be back from the hospital in the morning. We'll get treated and update you quickly!! ",
  },
  {
    date: new Date(2020, 2, 09, 17, 54),
    type: "notice",
    content: "전국 확진자 방문지를 업데이트 하였습니다.",
    content_english:
      "The nationwide confirmed visitor sites have been updated. ",
  },
  {
    date: new Date(2020, 2, 09, 11, 43),
    type: "notice",
    content: "전국 확진자 방문지 79곳 추가 업데이트 완료하였습니다.",
    content_english:
      "79 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 08, 17, 25),
    type: "notice",
    content: "전국 확진자 방문지 71곳 추가 업데이트 완료하였습니다.",
    content_english:
      "71 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 08, 11, 58),
    type: "notice",
    content:
      "전국 확진자 방문지를 업데이트 하였습니다. 현재 누적 데이터는 4066곳 입니다. 에러나 표기사항 오류가 있다면 제보해주시기 바랍니다. 감사드립니다.",
    content_english:
      "The nationwide confirmed visitor sites have been updated. The current cumulative data is 4066. Please report any errors or notation errors. Thank you very much.",
  },
  {
    date: new Date(2020, 2, 07, 11, 45),
    type: "notice",
    content:
      "<a href='https://maskmap.site' style='text-decoration:underline;'>마스크맵</a> 마스크 5부제의 이용에 도움을 주고자 사이트를 만들었습니다. 현재는 마스크 재고 정보가 없지만, 데이터 수집중에 있습니다. 마스크 재고관련 데이터를 제공해 주실 수 있는 관계자 분이 계시다면 연락부탁드립니다.",
  },
  {
    date: new Date(2020, 2, 07, 17, 19),
    type: "notice",
    content: "전국 확진자 방문지 170곳 추가 업데이트 완료하였습니다.",
    content_english:
      "170 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 07, 11, 45),
    type: "notice",
    content: "전국 확진자 방문지 71곳 추가 업데이트 완료하였습니다.",
    content_english:
      "88 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 07, 10, 53),
    type: "notice",
    content:
      "서버에 오류가 생겨 빠르게 수정하였습니다. 이용에 불편을 끼쳐드려 죄송합니다..ㅠㅠ, 12~13시에 DB업데이트가 있을 예정입니다.",
  },
  {
    date: new Date(2020, 2, 06, 17, 45),
    type: "notice",
    content: "전국 확진자 방문지를 추가 업데이트 완료하였습니다.",
  },
  {
    date: new Date(2020, 2, 06, 11, 55),
    type: "notice",
    content: "전국 확진자 방문지 88곳 추가 업데이트 완료하였습니다.",
    content_english:
      "88 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 05, 20, 04),
    type: "notice",
    content:
      "약국의 마스크 재고 현황정보를 제공해 주실 수 있는 관계자분이 있으시다면, 하단 이메일로 연락 부탁드립니다.",
    content_english:
      "If there is anyone who can provide the inventory information of the drugstore's mask, please contact us at the bottom email.",
  },
  {
    date: new Date(2020, 2, 05, 17, 50),
    type: "notice",
    content: "전국 확진자 방문지 32곳 추가 업데이트 완료하였습니다.",
    content_english:
      "32 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 05, 11, 35),
    type: "notice",
    content: "전국 확진자 방문지 191곳 추가 업데이트 완료하였습니다.",
    content_english:
      "191 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 04, 17, 50),
    type: "notice",
    content:
      "전국 확진자 방문지를 업데이트 하였습니다. 현재 누적 데이터는 3508곳 입니다. 에러나 표기사항 오류가 있다면 제보해주시기 바랍니다. 감사드립니다.",
    content_english:
      "The nationwide confirmed visitor sites have been updated. The current cumulative data is 3508. Please report any errors or notation errors. Thank you very much.",
  },
  {
    date: new Date(2020, 2, 04, 17, 35),
    type: "notice",
    content: "영어버전에서 시군별 번역을 완료하였습니다.",
    content_english: "Completed translation by city in English version.",
  },
  {
    date: new Date(2020, 2, 04, 15, 09),
    type: "notice",
    content: "[광주]지역 확진자 방문지를 업데이트하였습니다.",
    content_english:
      "[Gwangju]Regional confirmed visitor's visit site has been updated.",
  },
  {
    date: new Date(2020, 2, 04, 15, 09),
    type: "notice",
    content: "[제주]지역 확진자 방문지를 업데이트하였습니다.",
    content_english:
      "[Jeju]Regional confirmed visitor's visit site has been updated.",
  },
  {
    date: new Date(2020, 2, 04, 11, 33),
    type: "notice",
    content: "전국 확진자 방문지 84곳 추가 업데이트 완료하였습니다.",
    content_english:
      "84 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 03, 17, 44),
    type: "notice",
    content: "전국 확진자 방문지 106곳 추가 업데이트 완료하였습니다.",
    content_english:
      "106 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 03, 15, 36),
    type: "notice",
    content: "[수원]지역 확진자 방문지를 업데이트하였습니다.",
    content_english:
      "[Suwon]Regional confirmed visitor's visit site has been updated.",
  },
  {
    date: new Date(2020, 2, 03, 14, 48),
    type: "notice",
    content: "[서울]지역 확진자 방문지를 업데이트하였습니다.",
    content_english:
      "[Seoul]Regional confirmed visitor's visit site has been updated.",
  },
  {
    date: new Date(2020, 2, 03, 13, 25),
    type: "notice",
    content:
      "김천확진자 동선중 '참좋은동신교회' 정보에 오류가 있어 이를 수정하였습니다. 오류가 생겨 혼선을 끼쳐드린점 죄송합니다.",
    content_english:
      "There was an error in the information on the Kimcheon Assumption Line, so we corrected it was corrected. Sorry for the confusion caused by the error.",
  },
  {
    date: new Date(2020, 2, 03, 12, 16),
    type: "notice",
    content: "전국 확진자 방문지 업데이트 완료.",
    content_english: "Nationwide Confirmed Visitor Update Completed.",
  },
  {
    date: new Date(2020, 2, 03, 10, 55),
    type: "notice",
    content:
      "어깨 치료 때문에 병원에 다녀오겠습니다. 치료끝나고 업데이트 될 예정입니다. 양해부탁드립니다.",
    content_english:
      "I will go to the hospital for shoulder treatment. It will be updated after treatment.",
  },
  {
    date: new Date(2020, 2, 02, 17, 53),
    type: "notice",
    content: "전국 확진자 방문지 53곳 추가 업데이트 완료하였습니다.",
    content_english:
      "53 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 02, 14, 45),
    type: "notice",
    content: "광주확진자 동선을 업데이트하였습니다.",
    content_english: "I have updated the flow of the Gwangju",
  },
  {
    date: new Date(2020, 2, 02, 11, 49),
    type: "notice",
    content:
      "전국 확진자 방문지 104곳 추가 업데이트 완료하였습니다. 아직 번역이 안된 부분이 있을 수 있습니다. 빠르게 수정중이니 양해부탁드립니다.",
    content_english:
      "104 additional nationwide confirmed visitor sites have been updated. There may be some parts that have not been translated yet. Please understand that we are revising it quickly.",
  },
  {
    date: new Date(2020, 2, 02, 10, 35),
    type: "notice",
    content:
      "대구의 경우 확진자 수가 2000여명을 넘어 더이상 방문지 표시가 힘들다고 판단하여, 해당지역 전체를 다른색으로 표시하였습니다.",
    content_english:
      "In case of Daegu, the number of confirmed people exceeded 2,000, making it difficult to mark the site of the visit, so the entire area was marked in different colors.",
  },
  {
    date: new Date(2020, 2, 01, 18, 20),
    type: "notice",
    content: "전국 확진자 방문지 92곳 추가 업데이트 완료하였습니다.",
    content_english:
      "92 additional nationwide confirmed visitor sites have been updated.",
  },
  {
    date: new Date(2020, 2, 01, 18, 20),
    type: "notice",
    content:
      "경산확진자 동선중 '밝은약국' 정보에 오류가 있어 이를 수정하였습니다.",
    content_english:
      "There was an error in 'bright drugstore' information among the candidates' movements, so we corrected this information.",
  },
  {
    date: new Date(2020, 2, 01, 12, 21),
    type: "notice",
    content:
      "전국 확진자 방문지 117곳 추가 업데이트 완료하였습니다. 현재까지 누적 데이터의 수는 2600여개입니다. 지도위에는 소상공인분들께 피해가 갈 것을 염려해 방문시각 기준 9일 이하의 데이터만 지도위에 표시하고 있습니다.",
  },
  {
    // date: new Date(2020, 2, 01, 08, 50),
    type: "notice",
    content:
      "코로나맵 공식 오픈채팅방 링크:<a href='https://open.kakao.com/o/gtZqMlZb'>코로나맵-오픈채팅방</a>",
  },

  {
    date: new Date(2020, 2, 01, 11, 58),
    type: "notice",
    content:
      "대구의 경우 확진자 수가 2000여명을 넘어섰고, 확진자 동선파악이 이루어지지 않아 업데이트가 힘든점 양해바랍니다.",
  },
  {
    date: new Date(2020, 2, 01, 08, 51),
    type: "notice",
    content: "12시에 DB 대규모 업데이트가 있을 예정입니다.",
  },
  {
    date: new Date(2020, 2, 01, 08, 41),
    type: "notice",
    content: "[부산,거제]지역 확진자 방문장소를 업데이트하였습니다.",
  },
  {
    date: new Date(2020, 2, 01, 08, 38),
    type: "notice",
    content: "[천안,아산]지역 확진자 방문장소를 업데이트하였습니다.",
  },
  {
    date: new Date(2020, 2, 01, 08, 35),
    type: "notice",
    content: "[김해]지역 확진자 방문장소를 업데이트하였습니다.",
  },
  {
    date: new Date(2020, 1, 29, 16, 44),
    type: "notice",
    content:
      "방문날짜 색 표시에 잠시 오류가 있어 수정하였습니다. 이용에 불편을 끼쳐드려 죄송합니다.",
  },
  {
    date: new Date(2020, 1, 29, 17, 45),
    type: "notice",
    content:
      "[천안,아산,대전,강남,은평구,파주,화성,동대문구] 72곳 추가 업데이트 완료하였습니다.",
  },
  {
    date: new Date(2020, 1, 29, 16, 44),
    type: "notice",
    content: "전국 확진자 방문지 65곳 추가 업데이트 완료하였습니다.",
  },
  {
    date: new Date(2020, 1, 29, 12, 00),
    type: "notice",
    content:
      "전국 확진자 방문지 126곳 추가 업데이트 완료하였습니다. 현재 지자체와 질병관리본부에서 제공하는 공신력있는 데이터를 바탕으로 업데이트를 진행하고 있습니다. 때문에 역학조사가 완료되지 않은 장소는 업데이트가 다소 늦어질 수 있다는점 양해부탁드립니다. 그리고 9일 이상의 데이터를 지도위에 남기는것은 소상공인분들에게 피해가 갈 수 있다고판단하여 9일 이내의 데이터만 지도위에 표시되고 있습니다. ",
  },
  {
    date: new Date(2020, 1, 28, 10, 46),
    type: "notice",
    content:
      "코로나맵 공식 오픈채팅방 링크:<a href='https://open.kakao.com/o/gtZqMlZb'>코로나맵-오픈채팅방</a>",
  },
  {
    date: new Date(2020, 1, 28, 18, 09),
    type: "notice",
    content: "대전 카테고리를 추가하엿습니다.",
  },
  {
    date: new Date(2020, 1, 28, 18, 00),
    type: "notice",
    content: "전국 확진자 방문지를 추가 업데이트 완료하였습니다.",
  },
  {
    date: new Date(2020, 1, 28, 13, 45),
    type: "notice",
    content:
      "기존 지역별 확진자를 보는 방식이 불편하다고 생각하여 기능을 수정하였습니다. 확진자 밑에 화살표를 클릭하시면 지역별 버튼이 나오게 기능을 변경하였습니다.",
  },
  {
    date: new Date(2020, 1, 28, 12, 48),
    type: "notice",
    content: "전국 확진자 방문지 263곳 추가 업데이트 완료하였습니다.",
  },
  {
    date: new Date(2020, 1, 28, 10, 46),
    type: "notice",
    content: "13시에 데이터 대규모 업데이트가 예정되어있습니다.",
  },
  {
    date: new Date(2020, 1, 28, 10, 46),
    type: "notice",
    content:
      "이용자분들 중 코로나맵에 궁금하신점이나 불편하신점을 빠르게 수용하기위해 <a href='https://open.kakao.com/o/gtZqMlZb'>코로나맵-오픈채팅방</a>을 만들었습니다. 평소 궁금하신부분이나 쓰시기에 불편하셨던 점을 올려주시면 됩니다!! 비방이나 욕설은 자제해주시길 바랍니다.감사드립니다!!",
  },
  {
    date: new Date(2020, 1, 28, 09, 47),
    type: "notice",
    content:
      "초기 로딩 속도에서 가장 문제되는 것이 데이터를 지도위에 찍는 시간이 너무 오래걸리는 이유였습니다. 데이터 구조를 변경하여 이를 소폭 개선하였습니다.",
  },
  {
    date: new Date(2020, 1, 28, 09, 42),
    type: "notice",
    content:
      "기존 지역별 경계 테두리의 색상이 눈에 피로할 수 있다고 생각하여 옅은색으로 변경하였습니다.",
  },
  {
    date: new Date(2020, 1, 28, 09, 25),
    type: "notice",
    content: "방문에 따른 색상 기준을 변경하였습니다. (기존: 9일 -> 4일)",
  },
  {
    date: new Date(2020, 1, 28, 00, 04),
    type: "notice",
    content: "전국 확진자 방문지 37곳 추가 업데이트 완료하였습니다.",
  },
  {
    date: new Date(2020, 1, 27, 19, 11),
    type: "notice",
    content:
      "업데이트 중에 데이터가 유실된 장소가 있습니다. 제보해주시는대로 추가하도록하겠습니다!!",
  },
  {
    date: new Date(2020, 1, 27, 17, 56),
    type: "notice",
    content: "전국 확진자 방문지 185곳 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 27, 17, 33),
    type: "notice",
    content:
      "시군별 네비게이션 기능을 추가하였습니다. 현재 프로토타입이므로 빠르게 추가기능및 디자인을 업데이트하겠습니다.",
  },
  {
    date: new Date(2020, 1, 27, 14, 36),
    type: "notice",
    content: "서버 구조 설계를 업데이트 하였습니다.",
  },
  {
    date: new Date(2020, 1, 27, 12, 00),
    type: "notice",
    content: "전국 확진자 방문지 337곳 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 27, 10, 05),
    type: "notice",
    content:
      "현재 시군별 확진자 이동장소를 볼 수 있는 기능을 개발중에 있습니다. 빠르게 업데이트하도록 하겠습니다.",
  },
  {
    date: new Date(2020, 1, 27, 09, 22),
    type: "notice",
    content: "12시에 300곳 가량의 데이터 대규모 업데이트가 있을 예정입니다.",
  },
  // {
  //   date: new Date(2020, 1, 27, 09, 16),
  //   type: "notice",
  //   content:
  //     "방역이 끝나고 9일 이상 경과한 장소는 지도에서 제거하였습니다. 9일이 경과하고 방역이 끝난 장소를 오히려 지도에 남기는 것이 불안감을 키울 수 있고, 해당 장소의 소상공인들에게 피해를 줄 수 있다고 판단하여 지도에서 지우게 되었습니다. 감사드립니다."
  // },
  {
    date: new Date(2020, 1, 25, 09, 23),
    type: "notice",
    content:
      "주황색 큰 원 안의 숫자는 이동경로의 총합입니다. 확진자의 경로가 지도상에 늘어남에 따라 렉이 걸리는등 성능 이슈가 발생해, 이를 한데 묶어 지도에 표시한 것입니다. 이용자분들께서 오해하실수 있다고 판단하여 공지드립니다. 현재 지역별로 묶어 보여주는 기능을 준비중에 있습니다. 잠시만 기다려주시기 바랍니다. 감사드립니다",
  },
  {
    date: new Date(2020, 1, 27, 02, 22),
    type: "notice",
    content: "서버 구조를 업데이트하여 초기 로딩 속도를 소폭 개선하였습니다.",
  },

  {
    date: new Date(2020, 1, 26, 17, 50),
    type: "notice",
    content: "시도별 발생 동향 업데이트",
  },
  {
    date: new Date(2020, 1, 26, 17, 27),
    type: "notice",
    content:
      "전국  확진자 방문지 140곳 추가 업데이트, 표기오류나 위치가 수정되어야 할 곳은 메일 보내주시면 신속하게 처리하도록하겠습니다. 감사드립니다.",
  },
  {
    date: new Date(2020, 1, 26, 14, 46),
    type: "notice",
    content:
      "데이터 수가 1200건을 넘어감에 따라 초기 로딩속도가 많이 느려졌습니다. 이를 개선중에 있으니 잠시만 기다려주시기 바랍니다.",
  },
  {
    date: new Date(2020, 1, 26, 14, 46),
    type: "notice",
    content:
      "시군별 확진자 수를 업데이트하였습니다. 지도를 클릭해서 확인 가능합니다.",
  },
  {
    date: new Date(2020, 1, 26, 11, 51),
    type: "notice",
    content: "전국  확진자 방문지 106곳 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 22, 22),
    type: "notice",
    content: "전국 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 18, 00),
    type: "notice",
    content: "전국 확진자 방문지 168곳 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 11, 53),
    type: "notice",
    content:
      "회사 업무와 건강상의 이유로 업데이트 방식을 변경하려합니다. 주기적으로 오전 12시, 오후 6시에 대규모로 업데이트할 예정입니다. 물론 추가확진자 변동이나 중요한 사항은 실시간으로 업데이트할 예정입니다 업데이트하는 양은 동일하니 양해부탁드립니다. 여러분들의 지속적인 제보와 응원 감사드립니다.",
  },
  {
    date: new Date(2020, 1, 25, 11, 53),
    type: "notice",
    content: "전국 확진자 방문지 26곳 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 11, 43),
    type: "notice",
    content: "전국 확진자 방문지 162곳 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 09, 12),
    type: "notice",
    content: "전국 확진자 방문지 12곳 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 01, 09),
    type: "notice",
    content: "전국 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 00, 47),
    type: "notice",
    content: "[송파구,관악구]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 00, 37),
    type: "notice",
    content: "[강서구]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 25, 00, 14),
    type: "notice",
    content: "전국 27곳 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 22, 43),
    type: "notice",
    content: "전국 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 19, 52),
    type: "notice",
    content: "[안양]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 19, 34),
    type: "notice",
    content: "[고성,김포,안양]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 15, 30),
    type: "notice",
    content:
      "<a style='color:rgba(26, 98, 165, 0.932)' href='https://coroname.me'>코로나미:내 주변 확진자 찾기</a>",
  },

  {
    date: new Date(2020, 1, 24, 18, 37),
    type: "notice",
    content: "[고성]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 18, 30),
    type: "notice",
    content: "전국 30 곳 데이터 업데이트 완료.",
  },
  {
    date: new Date(2020, 1, 24, 17, 01),
    type: "notice",
    content:
      "전국 120 곳 데이터 업데이트 완료. 지원자분들의 노력 덕분에 빠르게 업데이트하는 중입니다. 감사드립니다.",
  },
  {
    date: new Date(2020, 1, 24, 15, 30),
    type: "notice",
    content:
      "정보가 많이 쌓임에 따라 한눈에 알아보기 힘들다고 생각하여 <a style='color:rgba(26, 98, 165, 0.932)' href='https://coroname.me'>코로나미:내 주변 확진자 찾기</a> 서비스를 시작해보았습니다. 프로토타입이라 아직 부족한 점이 있지만 많은 이용부탁드립니다!!",
  },
  {
    date: new Date(2020, 1, 24, 12, 48),
    type: "notice",
    content:
      "회사일 때문에 업데이트를 6시 퇴근후에 한번에 몰아서 하도록하겠습니다.",
  },
  {
    date: new Date(2020, 1, 24, 11, 21),
    type: "notice",
    content: "현재 기능추가를 준비중에 있습니다. 잠시만 기다려주세요!!",
  },
  {
    date: new Date(2020, 1, 24, 12, 33),
    type: "notice",
    content: "[김포]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 12, 11),
    type: "notice",
    content: "[구미,수원,김포]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 11, 50),
    type: "notice",
    content: "[구미]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 11, 50),
    type: "notice",
    content: "[구미]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 11, 13),
    type: "speed",
    content: "코로나19 확진자 161명 추가…총 763명, 사망자 7명",
  },
  {
    date: new Date(2020, 1, 24, 08, 50),
    type: "notice",
    content: "[부산,울산]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 08, 49),
    type: "notice",
    content: "[구미,용인,울산]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 08, 48),
    type: "notice",
    content: "[구미,안동]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 24, 08, 47),
    type: "notice",
    content: "[안동]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 23, 22, 42),
    type: "notice",
    content:
      "현재까지 제보와 지원자분들의 노력 덕분에 670곳의 확진자 방문지역 및 폐쇄지역 데이터를 확보하였습니다. 앞으로 얼마나 더 할 수 있을지는 모르지만 열심히 노력하도록 하겠습니다.",
  },

  {
    date: new Date(2020, 1, 24, 08, 45),
    type: "notice",
    content: "[함양,강릉]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 23, 23, 50),
    type: "notice",
    content: "[김포]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 23, 23, 48),
    type: "notice",
    content: "[의성,영천]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 23, 23, 45),
    type: "notice",
    content: "[의성,영천]지역 확진자 방문지 추가 업데이트",
  },
  {
    date: new Date(2020, 1, 23, 23, 38),
    type: "notice",
    content: "[서초구]지역 확진자 방문지 추가 업데이트",
  },
];
