package org.zerock.service;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.zerock.domain.BoardVO;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {org.zerock.config.RootConfig.class})
@Log4j
public class BoardServiceTests {
	@Setter(onMethod_ = {@Autowired})
	private BoardService service;
	
	@Test
	public void testExist() {
		log.info(service);
		assertNotNull(service);
	}
	
	//��� �۾�
	@Test
	public void testRegister() {
		BoardVO board = new BoardVO();
		board.setTitle("���� �ۼ��ϴ� ��");
		board.setContent("���� �ۼ��ϴ� ����");
		board.setWriter("newbie");
		
		service.register(board);
		
		log.info("������ �Խù��� ��ȣ : " + board.getBno());
	}
		
	//���(����Ʈ) �۾�
	@Test
	public void testGetList() {
		service.getList().forEach(board -> log.info(board));
	}
	
	//��ȸ �۾�
	@Test
	public void testGet() {
		log.info(service.get(1L));
	}
	
	@Test
	public void testDelete() {
		//�Խù� ��ȣ�� ���� ���θ� Ȯ���ϰ� �׽�Ʈ �� ��
		log.info("REMOVE RESULT : " + service.remove(2L));
	}
	
	@Test
	public void testUpdate() {
		BoardVO board = service.get(1L);
		if(board == null) {
			return;
		}
		
		board.setTitle("���� �����մϴ�.");
		log.info("MODIFY RESULT : " + service.modify(board));
	}
}