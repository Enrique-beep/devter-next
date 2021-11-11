import css from 'styled-jsx/css';
import { colors } from '@styles/theme';

export default css`
  button {
    display: flex;
    align-items: center;
    background: ${colors.black};
    color: ${colors.white};
    border: 0;
    cursor: pointer;
    border-radius: 9999px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 800;
    padding: 8px 24px;
    transition: opacity 0.3s ease;
  }

  button > :global(svg) {
    margin-right: 8px;
  }

  button:hover {
    opacity: 0.7;
  }
`;
