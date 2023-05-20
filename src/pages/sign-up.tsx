import SignUpView from "@/views/sign-up";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function SignIn() {
  return <SignUpView />;
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
