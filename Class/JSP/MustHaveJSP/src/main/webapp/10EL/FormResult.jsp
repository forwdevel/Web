<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>표현언어(EL) - 폼값 처리</title>
</head>
<body>
<h3>EL로 폼값 받기</h3>
<ul>
	<li>이름 : ${param.name}</li>
	<li>성별 : ${param.gender}</li>
	<li>학력 : ${param.grade}</li>
	<li>관심 사항 : ${paramValues.inter[0]}&nbsp;${paramValues.inter[1]}&nbsp;${paramValues.inter[2]}&nbsp;${paramValues.inter[3]}</li>
</ul>
</body>
</html>