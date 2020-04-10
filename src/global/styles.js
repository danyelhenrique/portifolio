import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,500;1,700&display=swap'); */
/* Reset */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
button,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 100%;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  vertical-align: baseline;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  -webkit-text-size-adjust: none;
}

/* Box Model */

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: linear-gradient( to right top, #051937, #181f36, #232535, #2c2c34, #333333 );
  color: #fff;
  max-width: 1920px !important;
    margin: 0 auto;
}

body,
input,
select,
textarea {
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-size: 13pt;
  font-weight: 300;
  line-height: 1.65;
}

@media screen and (max-width: 1680px) {
  body,
  input,
  select,
  textarea {
    font-size: 11pt;
  }
}

@media screen and (max-width: 1280px) {
  body,
  input,
  select,
  textarea {
    font-size: 11pt;
  }
}

@media screen and (max-width: 980px) {
  body,
  input,
  select,
  textarea {
    font-size: 12pt;
  }
}

@media screen and (max-width: 736px) {
  body,
  input,
  select,
  textarea {
    font-size: 12pt;
  }
}

@media screen and (max-width: 480px) {
  body,
  input,
  select,
  textarea {
    font-size: 12pt;
  }
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

strong,
b {
  font-weight: 600;
}

em,
i {
  font-style: italic;
}

p {
  margin: 0 0 2em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", Arial, Helvetica, sans-serif;

  font-weight: 600;
  line-height: 1.5;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: inherit;
  text-decoration: none;
}

h2 {
  font-size: 1.75em;
}

h3 {
  font-size: 1.35em;
}

h4 {
  font-size: 1.1em;
}

h5 {
  font-size: 0.9em;
}

h6 {
  font-size: 0.7em;
}

sub {
  font-size: 0.8em;
  position: relative;
  top: 0.5em;
}

sup {
  font-size: 0.8em;
  position: relative;
  top: -0.5em;
}

blockquote {
  border-left: solid 4px;
  font-style: italic;
  margin: 0 0 2em 0;
  padding: 0.5em 0 0.5em 2em;
}

code {
  border-radius: 4px;
  border: solid 1px;
  font-family: "Poppins", monospace;
  font-size: 0.9em;
  margin: 0 0.25em;
  padding: 0.25em 0.65em;
}

pre {
  -webkit-overflow-scrolling: touch;
  font-family: "Poppins", monospace;
  font-size: 0.9em;
  margin: 0 0 2em 0;
}

pre code {
  display: block;
  line-height: 1.75;
  padding: 1em 1.5em;
  overflow-x: auto;
}

hr {
  border: 0;
  border-bottom: solid 1px;
  margin: 2em 0;
}

input,
select,
textarea {
  color: #fff;
}

a {
  color: #f64747;
}

strong,
b {
  color: #fff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #fff;
}

blockquote {
  border-left-color: rgba(144, 144, 144, 0.25);
}

code {
  background: rgba(144, 144, 144, 0.075);
  border-color: rgba(144, 144, 144, 0.25);
}

hr {
  border-bottom-color: rgba(144, 144, 144, 0.25);
}


`;
