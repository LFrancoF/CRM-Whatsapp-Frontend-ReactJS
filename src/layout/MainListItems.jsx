import { useContext } from "react";
import PropTypes from 'prop-types';

import {
  Link,
  MemoryRouter,
  StaticRouter,
} from 'react-router';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
//import MailIcon from '@mui/icons-material/Mail';
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";

import { Badge } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { Can } from "../components/Can";
import { AuthContext } from "../context/Auth/AuthContext";

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <ListItemButton component={Link} to={to}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItemButton>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


const MainListItems = (props) => {
  const { drawerClose } = props;
  const { user } = useContext(AuthContext);

  return (
    <div onClick={drawerClose}>
      <List>
        <ListItem disablePadding>
          <ListItemLink to="/" primary="Dashboard" icon={<DashboardOutlinedIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to="/conexiones" primary="Conexiones" icon={
            <Badge badgeContent={"!"} color="error">
              <SyncAltIcon />
            </Badge>
          } />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to="/tickets" primary="Tickets" icon={<WhatsAppIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to="/contactos" primary="Contactos" icon={<ContactPhoneOutlinedIcon />} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemLink to="/respuestasrapidas" primary="Respuestas Rápidas" icon={<QuestionAnswerOutlinedIcon />} />
        </ListItem>
        <Can
          role={user.profile}
          perform="drawer-admin-items:view"
          yes={() => (
            <>
              <Divider />
              <ListSubheader inset color='primary'>
                Administración
              </ListSubheader>
              <ListItemLink
                to="/users"
                primary="Usuarios"
                icon={<PeopleAltOutlinedIcon />}
              />
              <ListItemLink
                to="/departamentos"
                primary="Departamentos"
                icon={<AccountTreeOutlinedIcon />}
              />
              <ListItemLink
                to="/settings"
                primary="Configuración"
                icon={<SettingsOutlinedIcon />}
              />
            </>
          )}
        />
      </List>
    </div>
  );
};

export default MainListItems;
