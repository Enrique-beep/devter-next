import css from 'styled-jsx/css'

export default css`
  .container {
    display: flex;
    align-items: center;
  }

  .avatar {
    border-radius: 9999px;
    height: 49px;
    width: 49px;
  }

  .avatar + strong {
    margin-left: 8px;
  }
`
