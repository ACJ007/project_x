import { Box, Drawer, IconButton} from "@mui/material";
import * as React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Tooltip from '@mui/material/Tooltip';


const Drawer_ = () => {
  const [openDr, setOpenDr] = React.useState(false);
  const handleClose = () => {
    setOpenDr(false);
  };
  return (
    <div>
      <Box>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenDr(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
        <Drawer
        open={openDr}
        onClose={handleClose}
        anchor="left"
        variant="temporary"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '8%' }}}
        >
            <br/><br/><br/><br/>
            
            <Tooltip title="BOOKS RENTED">
                <IconButton size="small" >
                    <CollectionsBookmarkIcon/>
                </IconButton>
            </Tooltip>
            <br/><br/>
            <Tooltip title="BOOKS RETURNED">
                <IconButton ><KeyboardReturnIcon/> </IconButton>
                </Tooltip>
            <br/><br/>
        </Drawer>
      </Box>
    </div>
  );
}

export default Drawer_;