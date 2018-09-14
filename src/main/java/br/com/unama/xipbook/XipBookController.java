package br.com.unama.xipbook;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class XipBookController {
	
	@RequestMapping("/")
	public String index() {
		
		return "home";
	}
	
	@RequestMapping("/login")
	public String login() {
		
		return "/views/login";
	}
	
	@RequestMapping("/cadastroProduto")
	public String CadastroProduto() {
		
		return "/views/cadastro-produto";
	}
	
}
