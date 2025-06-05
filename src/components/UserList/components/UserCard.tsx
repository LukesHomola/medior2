import { ReactElement } from "react";
import styles from "./UserCard.module.scss";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserCard = ({ user }: { user: User }): ReactElement => {
  const mapLink = `https://mapy.cz/turisticka?source=coor&id=${user.address.geo.lng}%2C${user.address.geo.lat}&x=${user.address.geo.lng}&y=${user.address.geo.lat}&z=16`;

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{user.name}</h3>

      {/* Username */}
      <div className={styles.section}>
        <section className={styles.text_section}>
          <p className={styles.label}>Username </p>
          <p className={styles.value}>{user.username}</p>
        </section>
      </div>

      {/* Contact */}
      <div className={styles.section}>
        <section className={styles.text_section}>
          <p className={styles.label}>Email</p>
          <p className={styles.value}>{user.email}</p>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>Phone</p>
          <p className={styles.value}>{user.phone}</p>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>Website</p>
          <p className={styles.value}>{user.website}</p>
        </section>
      </div>

      {/* Address */}
      <div className={styles.section}>
        <section className={styles.sectionTitle}>
          <h5>Address</h5>
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Show on map
          </a>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>Street</p>
          <p className={styles.value}>{user.address.street}</p>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>Suite</p>
          <p className={styles.value}>{user.address.suite}</p>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>City</p>
          <p className={styles.value}>{user.address.city}</p>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>Zipcode</p>
          <p className={styles.value}>{user.address.zipcode}</p>
        </section>
      </div>

      {/* Company */}
      <div className={styles.section}>
        <section className={styles.sectionTitle}>
          <h5>Company</h5>
        </section>

        <section className={styles.text_section}>
          <p className={styles.label}>Name</p>
          <p className={styles.value}>{user.company.name}</p>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>Catch phrase</p>
          <p className={styles.value}>{user.company.catchPhrase}</p>
        </section>
        <section className={styles.text_section}>
          <p className={styles.label}>Bs</p>
          <p className={styles.value}>{user.company.bs}</p>
        </section>
      </div>

      <a href={`/articles/${user.id}`} className={styles.button}>
        Read articles
      </a>
    </div>
  );
};

export default UserCard;
