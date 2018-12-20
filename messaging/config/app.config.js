module.exports = {
	USER_STATES: {
		Q_INACTIVE: "Q_INACTIVE",
		Q_ACTIVE: "Q_ACTIVE",
		A_INACTIVE: "A_INACTIVE",
		A_ACTIVE: "A_ACTIVE"
	},
    QANY_MSG_CONSTANTS: {
        JOIN_TO_QINACTIVE: "챗봇 기반 질의응답 플랫폼 Qring에 오신 것을 환영합니다. 평소에 궁금한 것이 있으면 Qany에게 마음껏 물어보세요! 자세한 사용법은 '/사용법' 을 입력해 보세요.",
        QINACTIVE_TO_QINACTIVE: ["뭐냥??", "냐아앙!!", "니 말을 이해 못하겠냥!", "쿠아앙!", "뭐라는거냥!"],
        QINACTIVE_TO_QACTIVE: ["궁금한걸 말해봐냥", "뭐가 궁금한데?", "내가 궁금한거 말해줄께! 말해바냥", "뭘 알고싶은데?"],
        QACTIVE_TO_QINACTIVE: ["너의 질문을 등록했다냥!", "질문 등록 완료냥!", "질문이 등록됫냥!", "질문을 잘 들었냥! 답변이 등록되면 알려줄께냥!"],
        // QINACTIVE_TO_AINACTIVE: [],		no message
        // QACTIVE_TO_AINACTIVE: [],		no message
        AINACTIVE_TO_QINACTIVE: ["다음에 아는 질문이 오면 말해달라냥!"],
        AINACTIVE_TO_AACTIVE: ["정답을 말해달라냥!"],
        AACTIVE_TO_QINACTIVE: ["궁금증을 해결해줘서 고맙다냥!"],
        TO_TERMINATE: [],
        GLOBAL_COMMAND_LIST: {
			USER_INFO: { COMMAND: "/내정보", RESPONSE: "현재 서비스 준비중입니다." },
            SYSTEM_INFO: { COMMAND: "/서비스정보", RESPONSE: "Qring version 0.0.1" },
            MENUAL: { COMMAND: "/사용법", RESPONSE: "챗봇 기반 질의응답 플랫폼 'Qring' 사용법"}
        }
    },
	MEMBER_SERVER_URL: "http://127.0.0.1:8090/users",
	QNA_SERVER_URL: "http://127.0.0.1:8545/qna",
    USER_PLATFORM: {
        LINE: 'L',
        KAKAO: 'K',
		WEB: 'W'
    }
};
