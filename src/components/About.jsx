import React from 'react';
import { Box, Typography, Container, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box id="about" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component={motion.div}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: 4,
                    zIndex: -1,
                  }
                }}
              >

                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '120%',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                    zIndex: -2,
                    filter: 'blur(40px)',
                  }}
                />

              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                }}
              >
                About <Box component="span" sx={{ color: 'primary.main' }}>Me</Box>
              </Typography>
              <Box
                sx={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #8B5CF6 0%, transparent 100%)',
                  mb: 4,
                  borderRadius: 1
                }}
              />
              <Stack
                spacing={3}
                component={motion.div}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Typography
                  component={motion.p}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  I'm a dedicated **Frontend Developer** with a sharp focus on building modern,
                  user-centric web applications. My journey began with a curiosity for how
                  the web works, which evolved into a professional pursuit of technical excellence.
                </Typography>
                <Typography
                  component={motion.p}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  With hands-on experience in **React.js** and **TypeScript**, I specialize in
                  transforming complex requirements into intuitive digital experiences. My time
                  at **Celestial Systems** has sharpened my ability to write clean, maintainable
                  code and optimize application performance.
                </Typography>
                <Typography
                  component={motion.p}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  variant="body1"
                  sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}
                >
                  I believe that great design is not just about aesthetics but about solving
                  real-world problems through seamless interaction. Whether it's state
                  management with **Redux Toolkit** or crafting responsive layouts with **MUI**,
                  I approach every project with a blend of creativity and logical rigor.
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
