import { colors } from "@styles/theme";
import css from "styled-jsx/css";

export default css`
  header {
    display: flex;
    background: #ffffffaa;
    backdrop-filter: blur(5px);
    align-items: center;
    border-bottom: 1px solid #eee;
    height: 49px;
    position: sticky;
    top: 0;
    width: 100%;
  }

  section {
    flex: 1;
  }

  h2 {
    font-size: 21px;
    font-weight: 800;
    padding-left: 15px;
  }

  nav {
    display: flex;
    background: #fff;
    bottom: 0;
    border-top: 1px solid #eee;
    position: sticky;
    width: 100%;
  }

  nav a {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  nav a:hover {
    background: radial-gradient(#0099ff22 15%, transparent 16%);
    background-size: 100px 100px;
    background-position: center;
  }

  nav a:hover > :global(svg) {
    stroke: ${colors.primary};
  }
`;
