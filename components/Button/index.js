import styles from './styles'

export default function Button({ children, onClick: handleClick, disabled }) {
  return (
    <>
      <button onClick={handleClick} disabled={disabled}>
        { children }
      </button>

      <style jsx>{styles}</style>
    </>
  );
}
