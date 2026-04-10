import React from 'react';
import { Box, Typography, Container, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 0 },
      }}
    >
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.2, 0.15],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              Professional Frontend Developer
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.5rem', md: '5rem' },
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              I'm <Box component="span" sx={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Madhu Baloni</Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                mb: 2,
                minHeight: '1.5em',
              }}
            >
              <Typewriter
                words={['Frontend Developer', 'React Enthusiast', 'UI/UX Explorer', 'Celestial Systems Trainee']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                fontSize: '1.1rem',
                mx: { xs: 'auto', md: 0 },
                mb: 4,
              }}
            >
              Passionate about crafting pixel-perfect, accessible, and high-performance web experiences.
              Currently honing my skills at Celestial Systems with a focus on React and modern frontend ecosystems.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<MailIcon />}
                href="#contact"
              >
                Let's Talk
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                download="resume.pdf"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': { borderColor: 'primary.main' }
                }}
              >
                Download CV
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: 6,
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              {[
                { icon: <GitHubIcon sx={{ fontSize: 20 }} />, link: 'https://github.com/Madhu-baloni', color: '#fff' },
                { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, link: 'https://in.linkedin.com/in/madhu-baloni-47baa1227', color: '#0A66C2' },
                { icon: <InstagramIcon sx={{ fontSize: 20 }} />, link: 'http://www.instagram.com/balonimadhu', color: '#E4405F' },
              ].map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.link}
                  target="_blank"
                  sx={{
                    color: 'text.secondary',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      color: social.color,
                      borderColor: social.color,
                      background: 'rgba(255, 255, 255, 0.05)',
                      transform: 'translateY(-4px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
