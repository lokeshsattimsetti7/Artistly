// src/app/layout.jsx
import Navbar from "@/components/Navbar/Navbar";
import styles from "@/app/layout.module.css";

export const metadata = {
  title: "Artistly",
  description: "Connect with talented artists across India.",
};

export default function RootLayout({ children }) {
  return (
    <html className={styles.html} lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border: none;
                // background-color: #0F111B;
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
