import { useRouter } from "next/navigation";
import Select, { SingleValue } from "react-select";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const languages = [
  { value: "en", flag: "/Images/Svg/EN.svg" },
  { value: "fr", flag: "/Images/Svg/FR.svg" },
];

export default function LanguageSelector() {

  const t = useTranslations("Lang");

  const [locale, setLocale] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie.split('; ').find((row) => row.startsWith("locale="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `locale=${browserLocale}`;
      router.refresh();
    }
  }, [router]);

  const changeLocale = (selectedOption: SingleValue<{ value: string; }>) => {
    if (selectedOption) {
      if (selectedOption.value == locale) {
        return;
      }
      setLocale(selectedOption.value);
      document.cookie = `locale=${selectedOption.value}`;
      router.refresh();
    }
  };

  return (
    <Select
      value={languages.find((l) => l.value === locale)}
      onChange={changeLocale}
      options={languages}
      formatOptionLabel={(e) => (
        <div className="flex items-center gap-2">
          <img src={e.flag} alt={t(e.value)} className="w-5 h-5" />
          <span className="text-white">{t(e.value)}</span>
        </div>
      )}
      className="min-w-[150px] text-white"
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "#374151", // gray-700
          borderColor: "#4B5563", // gray-600
          color: "white",
          padding: "4px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "#1F2937", // gray-800
          borderRadius: "8px",
          color: "white",
        }),
        option: (base, { isFocused }) => ({
          ...base,
          backgroundColor: isFocused ? "#374151" : "#1F2937", // gray-700 on hover
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px",
          cursor: "pointer",
        }),
        singleValue: (base) => ({
          ...base,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
        }),
      }}
    />
  );
}
