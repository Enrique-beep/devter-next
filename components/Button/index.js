import styles from './styles'

export default function Button({ children, onClick: handleClick }) {
  return (
    <>
      <button onClick={handleClick}>
        { children }
      </button>

      <style jsx>{styles}</style>
    </>
  );
}
