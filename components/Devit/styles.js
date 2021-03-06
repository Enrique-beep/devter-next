import css from "styled-jsx/css";

export default css`
  article {
    border-bottom: 2px solid #eee;
    display: flex;
    padding: 10px 15px;
  }

  article:hover {
    background: #f5f8fa;
  }

  img {
    border-radius: 10px;
    height: auto;
    width: 100%;
    margin-top: 10px;
  }

  div {
    padding-right: 10px;
  }

  p {
    line-height: 1.3125;
    margin: 0;
  }

  span,
  time {
    color: #555;
    font-size: 14px;
  }

  time:hover {
    text-decoration: underline solid #555;
  }
`;
