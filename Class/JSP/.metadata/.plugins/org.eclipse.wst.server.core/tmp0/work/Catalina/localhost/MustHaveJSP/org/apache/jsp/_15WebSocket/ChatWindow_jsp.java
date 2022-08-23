/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.65
 * Generated at: 2022-08-22 06:39:12 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp._15WebSocket;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class ChatWindow_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("    \r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<title>웹소켓 채팅</title>\r\n");
      out.write("<script>\r\n");
      out.write("var webSocket\r\n");
      out.write("    = new WebSocket(\"");
      out.print( application.getInitParameter("CHAT_ADDR") );
      out.write("/ChatingServer\");\r\n");
      out.write("var chatWindow, chatMessage, chatId;\r\n");
      out.write("\r\n");
      out.write("// 채팅창이 열리면 대화창, 메시지 입력창, 대화명 표시란으로 사용할 DOM 객체 저장\r\n");
      out.write("window.onload = function() {\r\n");
      out.write("	window.focus(); // 현재 윈도우를 최상단에 위치\r\n");
      out.write("	// window.moveTo(0,0); // 현재 웹 페이지의 창 크기를 0,0으로 고정\r\n");
      out.write("	window.resizeTo(320,600);// 웹페이지 크기 고정\r\n");
      out.write("	window.scrollTo(0,250); //페이지 상단으로 스크롤 고정\r\n");
      out.write("    chatWindow = document.getElementById(\"chatWindow\");\r\n");
      out.write("    chatMessage = document.getElementById(\"chatMessage\");\r\n");
      out.write("    chatId = document.getElementById('chatId').value;    \r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("// 메시지 전송\r\n");
      out.write("function sendMessage() {\r\n");
      out.write("    // 대화창에 표시\r\n");
      out.write("    chatWindow.innerHTML += \"<div class='myMsg' style='float:right;'>\" + chatMessage.value + \"</div><div style='clear:both;'></div>\"\r\n");
      out.write("    webSocket.send(chatId + '|' + chatMessage.value);  // 서버로 전송\r\n");
      out.write("    chatMessage.value = \"\";  // 메시지 입력창 내용 지우기\r\n");
      out.write("    chatWindow.scrollTop = chatWindow.scrollHeight;  // 대화창 스크롤\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("// 서버와의 연결 종료\r\n");
      out.write("function disconnect() {\r\n");
      out.write("    webSocket.close();\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("// 엔터 키 입력 처리\r\n");
      out.write("function enterKey() {\r\n");
      out.write("    if (window.event.keyCode == 13) {  // 13은 'Enter' 키의 코드값\r\n");
      out.write("        sendMessage();\r\n");
      out.write("    }\r\n");
      out.write("}\r\n");
      out.write("\r\n");
      out.write("// 웹소켓 서버에 연결됐을 때 실행\r\n");
      out.write("webSocket.onopen = function(event) {   \r\n");
      out.write("    chatWindow.innerHTML += \"웹소켓 서버에 연결되었습니다.<br/>\";\r\n");
      out.write("};\r\n");
      out.write("\r\n");
      out.write("// 웹소켓이 닫혔을 때(서버와의 연결이 끊겼을 때) 실행\r\n");
      out.write("webSocket.onclose = function(event) {\r\n");
      out.write("    chatWindow.innerHTML += \"웹소켓 서버가 종료되었습니다.<br/>\";\r\n");
      out.write("};\r\n");
      out.write("\r\n");
      out.write("// 에러 발생 시 실행\r\n");
      out.write("webSocket.onerror = function(event) { \r\n");
      out.write("    alert(event.data);\r\n");
      out.write("    chatWindow.innerHTML += \"채팅 중 에러가 발생하였습니다.<br/>\";\r\n");
      out.write("}; \r\n");
      out.write("\r\n");
      out.write("// 메시지를 받았을 때 실행\r\n");
      out.write("webSocket.onmessage = function(event) { \r\n");
      out.write("    var message = event.data.split(\"|\");  // 대화명과 메시지 분리\r\n");
      out.write("    var sender = message[0];   // 보낸 사람의 대화명\r\n");
      out.write("    var content = message[1];  // 메시지 내용\r\n");
      out.write("    if (content != \"\") {\r\n");
      out.write("        if (content.match(\"/\")) {  // 귓속말\r\n");
      out.write("            if (content.match((\"/\" + chatId))) {  // 나에게 보낸 메시지만 출력\r\n");
      out.write("                var temp = content.replace((\"/\" + chatId), \"[귓속말] : \");\r\n");
      out.write("                chatWindow.innerHTML += \"<div class='private' style='float : left;'>\" + sender + \" : \" + temp + \"</div><div style='clear:both;'></div>\";\r\n");
      out.write("            }\r\n");
      out.write("        }\r\n");
      out.write("        else {  // 일반 대화\r\n");
      out.write("            chatWindow.innerHTML += \"<div class='outer' style='float : left;'>\" + sender + \" : \" + \"<div class='everyone'>\" + content + \"</div></div><div style='clear:both;'></div>\";\r\n");
      out.write("        }\r\n");
      out.write("    }\r\n");
      out.write("    chatWindow.scrollTop = chatWindow.scrollHeight; \r\n");
      out.write("};\r\n");
      out.write("</script>\r\n");
      out.write("<style>  <!-- 대화창 스타일 지정 -->  \r\n");
      out.write("#chatWindow{border:1px solid black; width:270px; height:310px; overflow:scroll; padding:5px;}\r\n");
      out.write("#chatMessage{width:236px; height:30px; position:fixed; left : 2px; bottom:2px; color:black; background-color:white; border:none;}\r\n");
      out.write(".private {\r\n");
      out.write("background-color : rgba(255,255,255, 0.7);\r\n");
      out.write("    color: black;\r\n");
      out.write("    padding: 8px 16px 8px 20px;\r\n");
      out.write("    margin: 5px 14px;\r\n");
      out.write("    border-radius: 15px;\r\n");
      out.write("    float: right;\r\n");
      out.write("    display: flex;\r\n");
      out.write("    vertical-align: middle;\r\n");
      out.write("    align-items: center;\r\n");
      out.write("}\r\n");
      out.write(".everyone {\r\n");
      out.write("    background-color: rgb(255,255,255);\r\n");
      out.write("    color: black;\r\n");
      out.write("    padding: 8px 16px 8px 20px;\r\n");
      out.write("    margin: 5px 14px;\r\n");
      out.write("    border-radius: 15px;\r\n");
      out.write("    float: right;\r\n");
      out.write("    display: flex;\r\n");
      out.write("    vertical-align: middle;\r\n");
      out.write("    align-items: center;\r\n");
      out.write("}\r\n");
      out.write("#sendBtn {\r\n");
      out.write("    height: 40px;\r\n");
      out.write("    position: fixed;\r\n");
      out.write("    bottom: 5px;\r\n");
      out.write("    right: 5px;\r\n");
      out.write("    border: none;\r\n");
      out.write("    background-color: yellow;\r\n");
      out.write("    width: 60px;\r\n");
      out.write("    border-radius: 0px 4px 4px 0px;\r\n");
      out.write("}\r\n");
      out.write("#chatMessage {\r\n");
      out.write("    width: 251px;\r\n");
      out.write("    height: 40px;\r\n");
      out.write("    position: fixed;\r\n");
      out.write("    left: 5px;\r\n");
      out.write("    bottom: 5px;\r\n");
      out.write("    color: black;\r\n");
      out.write("    background-color: white;\r\n");
      out.write("    border: none;\r\n");
      out.write("    border-radius: 4px 0px 0px 4px;\r\n");
      out.write("}\r\n");
      out.write("#closeBtn {\r\n");
      out.write("    margin-bottom: 3px;\r\n");
      out.write("    position: relative;\r\n");
      out.write("    top: 2px;\r\n");
      out.write("    right: 2px;\r\n");
      out.write("    color: white;\r\n");
      out.write("    border: none;\r\n");
      out.write("    background-color: rgb(61, 61, 61);\r\n");
      out.write("    border-radius: 4px;\r\n");
      out.write("    width: 70px;\r\n");
      out.write("    height: 40px;\r\n");
      out.write("}\r\n");
      out.write("#chatId {\r\n");
      out.write("    width: 158px;\r\n");
      out.write("    height: 24px;\r\n");
      out.write("    background: none;\r\n");
      out.write("    border: 0px;\r\n");
      out.write("    color: white;\r\n");
      out.write("    font-weight: bold;\r\n");
      out.write("}\r\n");
      out.write(".myMsg {\r\n");
      out.write("    background-color: yellow;\r\n");
      out.write("    color: black;\r\n");
      out.write("    padding: 8px 20px 8px 16px;\r\n");
      out.write("    margin: 5px 0px;\r\n");
      out.write("    border-radius: 15px;\r\n");
      out.write("}\r\n");
      out.write("body {background-color:rgb(104, 173, 219); color:white;}\r\n");
      out.write("</style>\r\n");
      out.write("</head>\r\n");
      out.write("\r\n");
      out.write("<body>  <!-- 대화창 UI 구조 정의 --> \r\n");
      out.write("    대화명 : <input type=\"text\" id=\"chatId\" value=\"");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${ param.chatId }", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("\" readonly />\r\n");
      out.write("    <button id=\"closeBtn\" onclick=\"disconnect();\">채팅 종료</button>\r\n");
      out.write("    <div id=\"chatWindow\"></div>\r\n");
      out.write("    <div>\r\n");
      out.write("        <input type=\"text\" id=\"chatMessage\" onkeyup=\"enterKey();\">\r\n");
      out.write("        <button id=\"sendBtn\" onclick=\"sendMessage();\">전송</button>\r\n");
      out.write("    </div>    \r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
