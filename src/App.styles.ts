import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/sigmund.jpg';

export const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}

	body {
		background-image: url(${BGImage});
		background-size: cover;
		margin: 0;
		padding; 0 20px;
		display: flex;
		justify-content: center
	}

	* {
		box-sizing: border-box;
		font-family: 'VT323', monospace;
		color: white;
	}

	button {
		background-color: black;
		padding: 10px 50px;
		font-size: 2em;
	}

	p {
		font-size: 2em;
	}

`

export const Wrapper = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: white;
	}

	.score {
		color: white;
		font-size: 2rem;
		margin: 0;
	}

	h1 {
		background: #03001e;  /* fallback for old browsers */
		// background-image: -webkit-linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e);  /* Chrome 10-25, Safari 5.1-6 */
		background-image: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
		background-size: 100%;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(2px 2px #49fb35);
		font-size: 70px;
		text-align: center;
		margin: 20px;
	}
`