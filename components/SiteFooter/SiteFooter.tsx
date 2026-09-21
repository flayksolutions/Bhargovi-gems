import Image from "next/image";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

export type FooterLink = { label: string; href: string; icon?: string };
export type FooterOffice = { heading: string; label: string };

/* Material Design Icons "linkedin" and "instagram" glyphs, inlined as SVG
   paths (same approach as ContactFormSection's reach-out icons) so the
   footer doesn't pull in an icon font for two icons. */
const SOCIAL_ICON_PATHS: Record<string, string> = {
  linkedin:
    "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  instagram:
    "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
};

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
              {socials.map(
                (item) =>
                  item.icon && (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className={styles.iconLink}
                    >
                      <svg
                        className={styles.icon}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={SOCIAL_ICON_PATHS[item.icon]} fill="#fff" />
                      </svg>
                    </a>
                  )
              )}
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
          {/* <p className={styles.credit}>
            {credit.prefix}{" "}
            <a
              href={credit.href}
              target="_blank"
              rel="noreferrer"
              className={styles.creditLink}
            >
              {credit.label}
              <img
                src="/icons/footer/arrow-outward.svg"
                alt=""
                className={styles.arrow}
              />
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
}
