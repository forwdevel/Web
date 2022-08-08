<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<title>Session</title>
<style>
* {
	text-align : center;
	margin : 0px;
	width : 100%;
	color : #0d6efd;
	font-weight : bold;
}
.form-control {
	width : 250px;
	margin : auto;
}
h2{
	font-weight : bold;
	margin : 80px auto 30px auto;
}
.btn{
	width : 20%;
	margin : 0 auto 30px auto;
	font-weight : bold;
}
</style>
</head>
<body>
<jsp:include page = "../Common/Link.jsp"/>
	<h2>로그인 페이지</h2>
	<span style = "color : red; font-size: 1.2em;">
		<%= request.getAttribute("LoginErrMsg") == null ? "" : request.getAttribute("LoginErrMsg")%>
	</span>
	<%
	if(session.getAttribute("UserId") == null) {
	%>
	<script>
	function validateForm(form) {
		if(!form.user_id.value) {
			alert("아이디를 입력하세요.");
			return false;
		}
		if(form.user_pw.value == "") {
			alert("패스워드를 입력하세요.");
			return false;
		}
	}
	</script>		
	<form action="LoginProcess.jsp" method = "post" name = "loginFrm" onsubmit = "return validateForm(this);">
	아이디 : <input type = "text" class="form-control" name = "user_id"><br>
	패스워드 : <input type = "password" class="form-control" name = "user_pw"><br>
	<input type = "submit" value = "로그인" class="btn btn-primary">
	</form>
	<%
	} else {
	%>
		<%= session.getAttribute("UserName") %> 회원님, 로그인하셨습니다.<br>
		<a href="Logout.jsp">[로그아웃]</a>
	<%
	}
	%>
</body>
</html>