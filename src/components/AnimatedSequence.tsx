import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/router";

export const AnimatedSequence = () => {
  const router = useRouter();
  let locale = router.locale;
  let arabic = locale === "ar";
  console.log("locale :>> ", locale);

  return (
    <div>
      {router.locale === "ar" && (
        <TypeAnimation
          sequence={[
            "تبسيط الاستثمار", // Types 'One'
            1000, // Waits 1s
            "اتاحة الثروة للجميع", // Deletes 'One' and types 'Two'
            1000, // Waits 2s
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
      )}
      {router.locale === "en" && (
        <TypeAnimation
          sequence={[
            "Investing made simple", // Types 'One'
            1000, // Waits 1s
            "Wealth made possible", // Deletes 'One' and types 'Two'
            1000, // Waits 2s
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
      )}
    </div>
  );
};
