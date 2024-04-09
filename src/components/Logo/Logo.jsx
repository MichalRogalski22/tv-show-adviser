import s from "./style.module.css";

const Logo = () => {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src="/images/logo.png" alt="Logo" />
        <div className={s.title}>Watowatch</div>
      </div>
      <div className={s.subtitle}>Find a show you may like</div>
    </>
  );
};

export default Logo;
