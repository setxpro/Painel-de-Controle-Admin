import SideBar from './components/SideBar';
import Top from './components/Top';
import RequireAuth from './context/Auth/RequireAuth';
import { Navigation } from './routes';
import * as C from './styles/AppStyles';

import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <C.Container>
      
    <GlobalStyles/>
      <Top/>
        <C.ContainerSidebarNavigation>
              <SideBar/>
                <RequireAuth>
                  <Navigation/>
                </RequireAuth>
        </C.ContainerSidebarNavigation>
     
    </C.Container>
  );
}