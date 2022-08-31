package org.zerock.service;

import java.util.List;

import org.zerock.Domain.BoardVO;

public interface BoardService {
	public void register(BoardVO board);
	
	public BoardVO get(Long bno);
	
	public boolean modefy(BoardVO board);
	
	public boolean remove(Long bno);
	
	public List<BoardVO> getList();
}
