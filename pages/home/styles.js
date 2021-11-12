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

  h2 {
    font-size: 21px;
    font-weight: 800;
    padding-left: 15px;
  }

  nav {
    background: #fff;
    bottom: 0;
    border-top: 1px solid #eee;
    position: sticky;
    width: 100%;
  }
`;
