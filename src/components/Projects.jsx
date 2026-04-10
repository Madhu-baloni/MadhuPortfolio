import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Finance Tracker',
    description: 'Developed to manage income, expenses, and balance. Featuring real-time transaction tracking and data visualization dashboard.',
    tech: ['React.js', 'MUI', 'Recharts'],
    github: 'https://github.com/Madhu-baloni/FinanceTrackerFrontend',
    demo: 'https://trackyourwealth-financetracker.netlify.app/',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
  },
  {
    title: 'Movie Recommendation App',
    description: 'Built a movie recommendation app showing trending movies/series with real-time data and integrated ticket booking system.',
    tech: ['React.js', 'MUI', 'TMDB API'],
    github: 'https://github.com/Madhu-baloni/movieRecomm',
    demo: 'https://movierecommdationapp.netlify.app/',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80'
  },
  {
    title: 'TouristPlace Website',
    description: 'A tourism website showcasing travel destinations and services with an interactive UI and optimized performance.',
    tech: ['React', 'MUI', 'Local Storage'],
    github: 'https://github.com/Madhu-baloni/Tourism',
    demo: 'https://rishitourism.netlify.app/',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
  }
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 8,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
            }}
          >
            Featured <Box component="span" sx={{ color: 'primary.main' }}>Projects</Box>
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={6}
          justifyContent="center"
          component={motion.div}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <motion.div
                style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.4s',
                    '&:hover': {
                      transform: 'scale(1.02) translateY(-10px)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={project.image}
                    alt={project.title}
                  />

                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                      {project.tech.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        startIcon={<LaunchIcon />}
                        href={project.demo}
                        target="_blank"
                        fullWidth
                      >
                        Live Demo
                      </Button>

                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                      >
                        Code
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

   
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            For more projects, visit my GitHub
          </Typography>

          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/Madhu-baloni"
            target="_blank"
            sx={{
              mt: 2,
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "10px"
            }}
          >
            View More Projects
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default Projects;