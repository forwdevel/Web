<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>    
<html>
<head>
<title>웹소켓 채팅</title>
<script>
var webSocket
    = new WebSocket("<%= application.getInitParameter("CHAT_ADDR") %>/ChatingServer");
var chatWindow, chatMessage, chatId;

// 채팅창이 열리면 대화창, 메시지 입력창, 대화명 표시란으로 사용할 DOM 객체 저장
window.onload = function() {
	window.focus(); // 현재 윈도우를 최상단에 위치
	// window.moveTo(0,0); // 현재 웹 페이지의 창 크기를 0,0으로 고정
	window.resizeTo(320,600);// 웹페이지 크기 고정
	window.scrollTo(0,250); //페이지 상단으로 스크롤 고정
    chatWindow = document.getElementById("chatWindow");
    chatMessage = document.getElementById("chatMessage");
    chatId = document.getElementById('chatId').value;    
}

// 메시지 전송
function sendMessage() {
    // 대화창에 표시
    chatWindow.innerHTML += "<div class='myMsg' style='float:right;'>" + chatMessage.value + "</div><div style='clear:both;'></div>"
    webSocket.send(chatId + '|' + chatMessage.value);  // 서버로 전송
    chatMessage.value = "";  // 메시지 입력창 내용 지우기
    chatWindow.scrollTop = chatWindow.scrollHeight;  // 대화창 스크롤
}

// 서버와의 연결 종료
function disconnect() {
    webSocket.close();
}

// 엔터 키 입력 처리
function enterKey() {
    if (window.event.keyCode == 13) {  // 13은 'Enter' 키의 코드값
        sendMessage();
    }
}

// 웹소켓 서버에 연결됐을 때 실행
webSocket.onopen = function(event) {   
    chatWindow.innerHTML += "웹소켓 서버에 연결되었습니다.<br/>";
};

// 웹소켓이 닫혔을 때(서버와의 연결이 끊겼을 때) 실행
webSocket.onclose = function(event) {
    chatWindow.innerHTML += "웹소켓 서버가 종료되었습니다.<br/>";
};

// 에러 발생 시 실행
webSocket.onerror = function(event) { 
    alert(event.data);
    chatWindow.innerHTML += "채팅 중 에러가 발생하였습니다.<br/>";
}; 

// 메시지를 받았을 때 실행
webSocket.onmessage = function(event) { 
    var message = event.data.split("|");  // 대화명과 메시지 분리
    var sender = message[0];   // 보낸 사람의 대화명
    var content = message[1];  // 메시지 내용
    if (content != "") {
        if (content.match("/")) {  // 귓속말
            if (content.match(("/" + chatId))) {  // 나에게 보낸 메시지만 출력
                var temp = content.replace(("/" + chatId), "[귓속말] : ");
                chatWindow.innerHTML += "<div class='private' style='float : left;'>" + sender + " : " + temp + "</div><div style='clear:both;'></div>";
            }
        }
        else {  // 일반 대화
            chatWindow.innerHTML += "<div class='outer' style='float : left;'>" + sender + " : " + "<div class='everyone'>" + content + "</div></div><div style='clear:both;'></div>";
        }
    }
    chatWindow.scrollTop = chatWindow.scrollHeight; 
};
</script>
<style>  <!-- 대화창 스타일 지정 -->  
#chatWindow{border:1px solid black; width:270px; height:310px; overflow:scroll; padding:5px;}
#chatMessage{width:236px; height:30px; position:fixed; left : 2px; bottom:2px; color:black; background-color:white; border:none;}
.private {
background-color : rgba(255,255,255, 0.7);
    color: black;
    padding: 8px 16px 8px 20px;
    margin: 5px 14px;
    border-radius: 15px;
    float: right;
    display: flex;
    vertical-align: middle;
    align-items: center;
}
.everyone {
    background-color: rgb(255,255,255);
    color: black;
    padding: 8px 16px 8px 20px;
    margin: 5px 14px;
    border-radius: 15px;
    float: right;
    display: flex;
    vertical-align: middle;
    align-items: center;
}
#sendBtn {
    height: 40px;
    position: fixed;
    bottom: 5px;
    right: 5px;
    border: none;
    background-color: yellow;
    width: 60px;
    border-radius: 0px 4px 4px 0px;
}
#chatMessage {
    width: 251px;
    height: 40px;
    position: fixed;
    left: 5px;
    bottom: 5px;
    color: black;
    background-color: white;
    border: none;
    border-radius: 4px 0px 0px 4px;
}
#closeBtn {
    margin-bottom: 3px;
    position: relative;
    top: 2px;
    right: 2px;
    color: white;
    border: none;
    background-color: rgb(61, 61, 61);
    border-radius: 4px;
    width: 70px;
    height: 40px;
}
#chatId {
    width: 158px;
    height: 24px;
    background: none;
    border: 0px;
    color: white;
    font-weight: bold;
}
.myMsg {
    background-color: yellow;
    color: black;
    padding: 8px 20px 8px 16px;
    margin: 5px 0px;
    border-radius: 15px;
}
body {background-color:rgb(104, 173, 219); color:white;}
</style>
</head>

<body>  <!-- 대화창 UI 구조 정의 --> 
    대화명 : <input type="text" id="chatId" value="${ param.chatId }" readonly />
    <button id="closeBtn" onclick="disconnect();">채팅 종료</button>
    <div id="chatWindow"></div>
    <div>
        <input type="text" id="chatMessage" onkeyup="enterKey();">
        <button id="sendBtn" onclick="sendMessage();">전송</button>
    </div>    
</body>
</html>