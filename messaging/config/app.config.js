module.exports = {
	USER_STATES: {
		Q_INACTIVE: "Q_INACTIVE",
		Q_ACTIVE: "Q_ACTIVE",
		A_INACTIVE: "A_INACTIVE",
		A_ACTIVE: "A_ACTIVE"
	},
    QANY_MSG_CONSTANTS: {
        JOIN_TO_QINACTIVE: "챗봇 기반 질의응답 플랫폼 Qring에 오신 것을 환영합니다. 평소에 궁금한 것이 있으면 Qany에게 마음껏 물어보세요! 자세한 사용법은 '/사용법' 을 입력해 보세요.",
        QINACTIVE_TO_QINACTIVE: ["뭐냥??", "냐아앙!!", "니 말을 이해 못하겠냥!", "쿠아앙!"],
        QINACTIVE_TO_QACTIVE: ["너의 질문을 등록했다냥!", "질문 등록 완료냥!", "질문이 등록됫냥!"],
        QACTIVE_TO_QINACTIVE: [],
        QINACTIVE_TO_AINACTIVE: [],
        AINACTIVE_TO_QINACTIVE: [],
        AINACTIVE_TO_AACTIVE: [],
        AACTIVE_TO_QINACTIVE: [],
        TO_TERMINATE: [],
        GLOBAL_COMMAND_LIST: {
			USER_INFO: { COMMAND: "/내정보", RESPONSE: "현재 서비스 준비중입니다." },
            SYSTEM_INFO: { COMMAND: "/서비스정보", RESPONSE: "Qring version 0.0.1" },
            MENUAL: { COMMAND: "/사용법", RESPONSE: "챗봇 기반 질의응답 플랫폼 'Qring' 사용법"}
        }
    },
	MEMBER_SERVER_URL: "http://127.0.0.1:30060/users",
    USER_PLATFORM: {
        LINE: 'L',
        KAKAO: 'K',
		WEB: 'W'
    }
};
