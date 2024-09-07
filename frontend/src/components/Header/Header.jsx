import { useTranslation } from 'react-i18next';
import { HeaderStyled, Text } from "./Header.styled.js";
import Button from "../RgbButtons/Button.jsx";

const Header = () => {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language;

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HeaderStyled>
      <Button />
      <Text>{t('header.store')}</Text>
      <Text onClick={() => handleLanguageChange(currentLng === 'uz' ? 'ru' : 'uz')}>
      {t('header.language')}
      </Text>
      <Text>{t('header.loginRegister')}</Text>
      <Text>{t('header.settings')}</Text>
    </HeaderStyled>
  );
}

export default Header;
