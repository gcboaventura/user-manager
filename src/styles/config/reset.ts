import { createGlobalStyle } from 'styled-components'

import RobotoBold from '../fonts/Roboto-Bold.ttf'
import RobotoItalic from '../fonts/Roboto-Italic.ttf'
import RobotoLight from '../fonts/Roboto-Light.ttf'
import RobotoMedium from '../fonts/Roboto-Medium.ttf'
import RobotoRegular from '../fonts/Roboto-Regular.ttf'
import RobotoThin from '../fonts/Roboto-Thin.ttf'

export const ResetCSS = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background-color: #f8f9fa;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
  font-family: 'Bold';
  src: url(${RobotoBold}) format("truetype");
}
@font-face {
  font-family: 'Italic';
  src: url(${RobotoItalic}) format("truetype");
}
@font-face {
  font-family: 'Light';
  src: url(${RobotoLight}) format("truetype");
}
@font-face {
  font-family: 'Medium';
  src: url(${RobotoMedium}) format("truetype");
}
@font-face {
  font-family: 'Regular';
  src: url(${RobotoRegular}) format("truetype");
}
@font-face {
  font-family: 'Thin';
  src: url(${RobotoThin}) format("truetype");
}`
