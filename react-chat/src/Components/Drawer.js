import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import { BsChatDots, BsGrid1X2 } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import "react-pro-sidebar/dist/css/styles.css";
import "./Drawer.css";

const Drawer = () => {
  return (
    <ProSidebar collapsed>
      <SidebarHeader>
        <BsGrid1X2 />
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem>
          <AiOutlineHome />
        </MenuItem>
        <MenuItem>
          <BsChatDots />
        </MenuItem>
        <MenuItem>
          <AiOutlineSetting />
        </MenuItem>
      </Menu>
      <SidebarFooter>
        <BiExit />
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Drawer;
