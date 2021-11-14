import css from 'styled-jsx/css';
import { colors, breakpoints, fonts } from '@styles/theme'
import { addOpacityToColor } from '@styles/utils'

const backgroundColor = addOpacityToColor(colors.primary, 0.3)
const boxShadow = addOpacityToColor('#000000', 0.1);

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-family: ${fonts.base};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  textarea, input {
    font-family: ${fonts.base};
  }
`

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px ${boxShadow};
    height: 100%;
    width: 100%;
    overflow-y: auto;
    position: relative;
  }

  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`
