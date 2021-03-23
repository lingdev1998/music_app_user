import { useTranslation } from "react-i18next";
 
export function Translation(props) {
  const { t } = useTranslation();  
  return t(props.value);
}

export default Translation;
