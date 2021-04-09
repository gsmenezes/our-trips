import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
  --highlight: #dedbd2;
  --background: #b0c4b1 ;
  --pin: #edafb8;
  --light: #f7e1d7;

  --container: 100rem;

  --small: 1.5rem;
  --medium: 3rem;
  --large: 5rem;


}

*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

html, body, #__next{
  height: 100%;
  background: var(--background);
  color: var(--light);
}

body{
  font-family: 'Quicksand', sans-serif;
}

p, a{
  font-size: 2rem;
  line-height: var(--medium);
}

a{
  color: var(--highlight);
}

button{
  cursor: pointer;
}

`;

export default GlobalStyles;
