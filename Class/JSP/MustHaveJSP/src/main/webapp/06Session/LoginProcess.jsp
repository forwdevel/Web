<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import = "membership.MemberDAO" %>
    <%@ page import = "membership.MemberDTO" %>
    
    <%
    String userId = request.getParameter("user_id");
    String userPwd = request.getParameter("user_pw");

    String oracleDriver = application.getInitParameter("OracleDriver");
    String oracleURL = application.getInitParameter("OracleURL");
    String oracleId = application.getInitParameter("OracleId");
    String oraclePwd = application.getInitParameter("OraclePwd");
    
    MemberDAO dao = new MemberDAO(oracleDriver, oracleURL, oracleId, oraclePwd);
    MemberDTO memberDTO = dao.getMemberDTO(userId, userPwd);
    dao.close();
    
    if(memberDTO.getId() != null) {
    	session.setAttribute("UserId", memberDTO.getId());
    	session.setAttribute("UserId", memberDTO.getName());
    	response.sendRedirect("LoginForm.jsp");
    } else {
    	request.setAttribute("LoginErrMsg", "로그인 오류입니다.");
    	request.getRequestDispatcher("LoginForm.jsp").forward(request, response);
    }
    %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>