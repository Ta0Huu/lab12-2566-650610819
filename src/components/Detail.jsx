import { ThemeContext } from "@/contexts/ThemeContext";
import { LangContext } from "@/contexts/LangContext";
import { useContext } from "react";

export const Detail = () => {
  const { lang } = useContext(LangContext);
  const { theme } = useContext(ThemeContext);
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {theme.name === "light"
        ? lang.detail.lightActivated
        : lang.detail.darkActivated}
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected Display activated theme message here (EN or TH)*/}
    </p>
  );
};
