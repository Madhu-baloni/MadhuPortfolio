import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Container, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center', 
        height: '100%',
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        pt: 4,
        position: 'relative'
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          right: 20,
          top: 20,
          color: 'primary.main'
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 900,
          background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 4,
          mt: 2
        }}
      >
        Madhu
      </Typography>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
      <List sx={{ mt: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component="a"
              href={`#${item.toLowerCase()}`}
              sx={{
                textAlign: 'center',
                py: 2,
                '&:hover': {
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText 
                primary={item} 
                primaryTypographyProps={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  letterSpacing: '1px'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: scrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
        py: scrolled ? 0.5 : 1.5,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2.5,
                height: 42,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                '&:hover': {
                  transform: 'translateY(-2px) scale(1.02)',
                  boxShadow: '0 6px 20px rgba(139, 92, 246, 0.4)',
                }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 900,
                  color: '#fff',
                  lineHeight: 1,
                  fontFamily: '"Outfit", sans-serif',
                  letterSpacing: '0.5px',
                }}
              >
                Madhu
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: 'text.primary',
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                      background: 'rgba(139, 92, 246, 0.05)',
                    },
                  }}
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              size="large" 
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                background: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: 'primary.main',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'transparent',
            boxShadow: 'none'
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
