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
              transition: {
                staggerChildren: 0.2
              }
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
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'scale(1.02) translateY(-10px)',
                      borderColor: 'primary.main',
                      boxShadow: '0 20px 40px -20px rgba(139, 92, 246, 0.5)',
                      '& .project-media': {
                        transform: 'scale(1.1)',
                      },
                      '& .project-overlay': {
                        opacity: 1,
                      }
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      className="project-media"
                      height="220"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.6s ease',
                      }}
                    />
                    <Box
                      className="project-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 3,
                        opacity: 0.8,
                        transition: 'opacity 0.4s ease',
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3, zIndex: 1 }}>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineBreak: 'normal', minHeight: '60px' }}>
                      {project.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3, minHeight: '64px', alignItems: 'flex-start' }}>
                      {project.tech.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            background: 'rgba(139, 92, 246, 0.1)',
                            color: 'primary.main',
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            borderRadius: '6px',
                            border: '1px solid rgba(139, 92, 246, 0.2)'
                          }}
                        />
                      ))}
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                        href={project.demo}
                        target="_blank"
                        fullWidth
                        sx={{
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontWeight: 600,
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          borderRadius: '10px',
                          textTransform: 'none',
                          fontWeight: 600,
                          color: 'text.secondary',
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          '&:hover': { color: 'primary.main', background: 'rgba(139, 92, 246, 0.05)' }
                        }}
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
      </Container>
    </Box>
  );
};

export default Projects;
