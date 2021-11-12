import styles from "./styles";

export default function Avatar({ src, alt, text }) {
  return (
    <div className="container">
      <img src={src} alt={alt} title={alt} className="avatar" />
      {text && <strong>{text}</strong>}

      <style jsx>{styles}</style>
    </div>
  );
}
