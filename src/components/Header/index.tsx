import { useLocation, useNavigate } from 'react-router-dom';
import { useCalcContext } from '../../contexts/CalculatorContext';
import { LocalStorageService, TOKEN_KEY } from '../../utils/LocalStorage';
import {
  Balance,
  HeaderContainer,
  LinkWrapper,
  NavLink,
  NavigationBar,
} from './styles';
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Pages, pathToPage } from '../../@types/enum/Pages';
import { Calculator, Coins, File, SignOut } from 'phosphor-react';

export const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { balance: credits } = useCalcContext();
  const { handleUser } = useAuthContext();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<Pages>(pathToPage(pathname));

  const handleNavigate = (page: Pages) => {
    setCurrentPage(page);
    navigate(page);
  };
  const handleLogout = () => {
    LocalStorageService.remove(TOKEN_KEY);
    handleUser({ token: '' });
    navigate('/login');
  };

  useEffect(() => {
    setCurrentPage(pathToPage(pathname));
  }, [pathname]);
  return (
    <HeaderContainer>
      <NavigationBar>
        <LinkWrapper active={currentPage === Pages.CALCULATOR}>
          <Calculator />
          <NavLink onClick={() => handleNavigate(Pages.CALCULATOR)}>
            Calculator
          </NavLink>
        </LinkWrapper>
        <LinkWrapper active={currentPage === Pages.RECORDS}>
          <File />
          <NavLink onClick={() => handleNavigate(Pages.RECORDS)}>
            Records
          </NavLink>
        </LinkWrapper>

        <LinkWrapper active={currentPage === Pages.CREDITS}>
          <Coins />
          <NavLink onClick={() => handleNavigate(Pages.CREDITS)}>
            Get Credits
          </NavLink>
        </LinkWrapper>

        <LinkWrapper active={false}>
          <SignOut />
          <NavLink onClick={handleLogout}>Log out</NavLink>
        </LinkWrapper>
      </NavigationBar>
      <span>
        CREDITS: <Balance isCritical={credits <= 10}>{credits}</Balance>
      </span>
    </HeaderContainer>
  );
};
