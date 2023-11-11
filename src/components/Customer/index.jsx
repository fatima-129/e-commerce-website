import Image from "../../assets/shared/desktop/image-best-gear.jpg";
import s from "./Customer.module.css";

const Customer = () => {
  return (
    <div className={s.container}>
      <div className={s.detail}>
        <h1 className={s.heading}>
          Bringing you the <br />{" "}
          <strong style={{ color: "var(--orange)" }}>best</strong> audio gear
        </h1>
        <p className={s.paragraph}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={s.image}>
        <img src={Image} alt="boy" />
      </div>
    </div>
  );
};

export default Customer;
