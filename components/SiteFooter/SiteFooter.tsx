import Image from "next/image";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

export type FooterLink = { label: string; href: string };
export type FooterOffice = { heading: string; label: string };

type Props = {
  brand: string;
  tagline: string;
  image: string;
  socials: FooterLink[];
  quickLinks: FooterLink[];
  contact: {
    title: string;
    phone: string;
    email: string;
    offices: FooterOffice[];
  };
  legal: string;
  credit: { prefix: string; label: string; href: string };
};

export default function SiteFooter({
  brand,
  tagline,
  image,
  socials,
  quickLinks,
  contact,
  legal,
  credit,
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.plate} aria-hidden="true">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className={styles.plateImage}
        />
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.navGroup}>
            <nav className={styles.navCol} aria-label="Social">
              <h2 className={styles.navTitle}>Socials</h2>
              <ul className={styles.navList}>
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.navLink}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className={styles.navCol} aria-label="Quick Links">
              <h2 className={styles.navTitle}>Quick Links</h2>
              <ul className={styles.navList}>
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label={brand}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/footer-logo.svg"
                alt={brand}
                className={styles.logo}
              />
            </Link>
            <p className={styles.slogan}>{tagline}</p>
          </div>

          <div className={styles.contactCol}>
            <h2 className={styles.navTitle}>{contact.title}</h2>
            <div className={styles.contactIcons}>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                aria-label={`Call ${contact.phone}`}
                className={styles.iconLink}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/footer/phone.svg"
                  alt=""
                  className={styles.icon}
                />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label={`Email ${contact.email}`}
                className={styles.iconLink}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/footer/envelope.svg"
                  alt=""
                  className={styles.icon}
                />
              </a>
            </div>
            {contact.offices.map((office) => (
              <div className={styles.address} key={office.heading}>
                <span className={styles.addressTitle}>{office.heading}</span>
                <span className={styles.addressText}>{office.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bar}>
          <p className={styles.legal}>
            &copy; {year} {brand}. {legal}
          </p>
          <p className={styles.credit}>
            {credit.prefix}{" "}
            <a
              href={credit.href}
              target="_blank"
              rel="noreferrer"
              className={styles.creditLink}
            >
              {credit.label}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/footer/arrow-outward.svg"
                alt=""
                className={styles.arrow}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
