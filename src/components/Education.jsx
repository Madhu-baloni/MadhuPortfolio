import React from 'react';
import { Box, Typography, Container, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'THDC Institute of Hydropower Engineering & Technology, Tehri Garhwal',
    period: '2021 - 2024',
    grade: 'CGPA: 7.4'
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Girls Government Polytechnic Sudhowala, Dehradun',
    period: '2018 - 2021',
    grade: 'CGPA: 8.6'
  }
];

const certifications = [
  {
    title: 'JavaScript Course Certification',
    issuer: 'Nation Skill Up Program – GeeksforGeeks',
    description: 'Focused on core JavaScript fundamentals and modern ES6 features.'
  },
  {
    title: 'Web Development Certification',
    issuer: 'Coursera',
    description: 'Building strong fundamentals in web technologies and data structures.'
  },
  {
    title: 'AI/ML Workshop',
    issuer: '3-Day Intensive',
    description: 'Real-world AI/ML applications, predictive analytics, and automation.'
  }
];

const Education = () => {
  return (
    <Box id="education" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ mb: 6, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 2 }}>
                <SchoolIcon sx={{ fontSize: 32, color: '#8B5CF6' }} /> Education
              </Typography>
              <Stack spacing={4}>
                {education.map((edu, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        background: 'rgba(139, 92, 246, 0.02)',
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{edu.degree}</Typography>
                    <Typography variant="body2" color="primary.main" sx={{ mb: 1, fontWeight: 600 }}>{edu.institution}</Typography>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="caption" color="text.secondary">{edu.period}</Typography>
                      <Typography variant="caption" color="secondary.main" sx={{ fontWeight: 700 }}>{edu.grade}</Typography>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ mb: 6, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmojiEventsIcon sx={{ fontSize: 32, color: '#EC4899' }} /> Certifications
              </Typography>
              <Stack spacing={4}>
                {certifications.map((cert, index) => (
                  <Paper
                    key={index}
                    sx={{
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        background: 'rgba(236, 72, 153, 0.02)',
                      }
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{cert.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{cert.issuer}</Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', color: 'text.secondary', fontStyle: 'italic' }}>
                      {cert.description}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
