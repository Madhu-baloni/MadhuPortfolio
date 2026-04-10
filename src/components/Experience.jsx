import React from 'react';
import { Box, Typography, Container, Stack, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const experiences = [
  {
    title: 'Frontend Developer Trainee',
    company: 'Celestial Systems',
    location: 'Noida, UP',
    period: 'Sep 2024 - Sep 2025',
    description: [
      'Developed responsive web applications using HTML5, CSS3, JavaScript (ES6+), React.js, and TypeScript, improving user experience.',
      'Applied DOM manipulation, asynchronous programming (Promises, async/await), and modern frontend development practices.',
      'Implemented state management using Redux Toolkit for scalable and maintainable React applications.',
      'Built interactive and dynamic UI components with focus on performance optimization and clean code practices.'
    ]
  },
  {
    title: 'Web Dev Fundamentals - WIT Internship',
    company: 'Women-in-Tech (WIT) Program',
    location: 'Remote',
    period: 'Internship',
    description: [
      'Successfully completed Web Development Fundamentals training under the WIT Program.',
      'Gained foundational knowledge of programming concepts and languages.',
      'Developed a strong understanding of HTML5, CSS3, and JavaScript.',
      'Built a solid base in frontend development and modern web practices.'
    ]
  }
];

const Experience = () => {
  return (
    <Box id="experience" sx={{ py: 10, background: 'rgba(15, 23, 42, 0.5)' }}>
      <Container maxWidth="md">
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
            My <Box component="span" sx={{ color: 'primary.main' }}>Journey</Box>
          </Typography>
        </motion.div>

        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Paper
                sx={{
                  p: 4,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #8B5CF6, #EC4899)',
                    borderRadius: '4px 0 0 4px',
                  }
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={1}>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {exp.title}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
                        <CalendarTodayIcon sx={{ fontSize: 16 }} />
                        <Typography variant="body2">{exp.period}</Typography>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ mt: 1, color: 'text.secondary' }}>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <BusinessCenterIcon sx={{ fontSize: 14 }} />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{exp.company}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <LocationOnIcon sx={{ fontSize: 14 }} />
                        <Typography variant="body2">{exp.location}</Typography>
                      </Stack>
                    </Stack>
                    <Divider sx={{ my: 2, opacity: 0.1 }} />
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {exp.description.map((item, i) => (
                        <Box component="li" key={i} sx={{ color: 'text.secondary', mb: 1, fontSize: '0.95rem' }}>
                          {item}
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

import { Grid } from '@mui/material';

export default Experience;
