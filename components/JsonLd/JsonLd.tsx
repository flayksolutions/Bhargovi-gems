/* "<" written as a JSON unicode escape, so no value can close the script
   tag early. Built from the backslash's char code to keep it unambiguous. */
const escapedLessThan = `${String.fromCharCode(92)}u003c`;

/* Renders structured data for search engines. Invisible to visitors. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, escapedLessThan),
      }}
    />
  );
}
