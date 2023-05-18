import ContactUsView from "@/views/contact-us";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return <ContactUsView />;
}

export async function getStaticProps(context: any) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
