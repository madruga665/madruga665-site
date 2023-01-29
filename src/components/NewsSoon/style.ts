import styled from "styled-components";
import { Colors } from '../../styles/variables';
import { FadeIn } from "../../styles/animations";

export const Title = styled.h1`
	text-transform: uppercase;
	text-align: center;
	background: linear-gradient(to right, #1859d3 0%, #0091fc 25%, #00bbd9 50%, #00da84 75%, #a8eb12 100%);
  background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  font-size: 3rem;
	animation: ${FadeIn} 2.5s ease-in-out;
`
export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: ${Colors.wetAsphalt};
`
