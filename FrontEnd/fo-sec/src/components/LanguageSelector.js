import React, { useState } from "react";

const translations = {
  en: { greeting: "Welcome to FoSec", market: "Market Prices", policy: "Policy Updates" },
  fr: { greeting: "Bienvenue à FoSec", market: "Prix du Marché", policy: "Mises à Jour Politiques" },
};

function LanguageSelector() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <select
        onChange={(e) => setLang(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="en">🇬🇧 English</option>
        <option value="fr">🇫🇷 Français</option>
      </select>
      <p className="mt-2 font-bold">{translations[lang].greeting}</p>
    </div>
  );
}

export default LanguageSelector;
