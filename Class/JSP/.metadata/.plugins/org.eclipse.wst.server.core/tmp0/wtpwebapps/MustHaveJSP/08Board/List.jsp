<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import = "java.util.List" %>
    <%@ page import = "java.util.HashMap" %>
    <%@ page import = "java.util.Map" %>
    <%@ page import = "model1.board.BoardDAO" %>
    <%@ page import = "model1.board.BoardDTO" %>
    <%
    BoardDAO dao = new BoardDAO(application);
    
    Map<String, Object> param = new HashMap<String, Object>();
    String searchField = request.getParameter("searchField");
    String searchWord = request.getParameter("searchWord");
    if(searchWord != null) {
    	param.put("searchField", searchField);
    	param.put("searchWord", searchWord);
    }
    
    int totalCount = dao.selectCount(param);
    List<BoardDTO> boardLists = dao.selectList(param);
    dao.close();
    %>
<!DOCTYPE html>
<html>
<head>
<style>
select{
width : 80px !important;
}
#inner-flex {
display : flex;
float : left;
flex-direction : row;
}
#word {
margin-left : 10px;
margin-right : 5px;
}
</style>
<meta charset="UTF-8">
<title>회원제 게시판</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
	<jsp:include page="../Common/Link.jsp"/>
	<h2>목록 보기(List)</h2>
	<form method = "get">
	<table border = "1" width = "90%">
	<tr>
		<td align = "center" id = "inner-flex">
			<select name = "searchField" class="form-select">
				<option value = "title">제목</option>
				<option value = "content">내용</option>
			</select>
			<input type = "text"  id = "word" class ="form-control" name = "searchWord"/>
			<input class="btn btn-primary" type = "submit"   value = "검색하기"/>
		</td>
	</tr>
	</table>
	</form>
	
	<table border = "1"  width = "90%">
		<tr>
			<th width = "10%">번호</th>
			<th width = "50%">제목</th>
			<th width = "15%">작성자</th>
			<th width = "10%">조회수</th>
			<th width = "15%">작성일</th>
		</tr>
		<%
		if(boardLists.isEmpty()) {
		%>
		<tr>
			<td colspan = "5" align = "center">
				등록된 게시물이 없습니다.
			</td>
		</tr>
		<%
		} else {
			int virtualNum = 0;
			for(BoardDTO dto : boardLists) {
				virtualNum = totalCount--;
		%>
			<tr align = "center">
				<td><%= virtualNum %></td>
				<td align = "left"><a href="View.jsp?num=<%=dto.getNum()%>"><%= dto.getTitle() %></a></td>
				<td align = "center"><%= dto.getId() %></td>
				<td align = "center"><%= dto.getVisitcount() %></td>
				<td align = "center"><%= dto.getPostdate() %></td>
			</tr>
		<%
			}
		}
		%>
	</table>
	<table border="1" width="90%">
		<tr align = "right">
			<td><button type = "button" class="btn btn-primary" onclick="location.href='Write.jsp';">글쓰기</button>
		</tr>
	</table>
</body>
</html>