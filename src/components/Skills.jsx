import React from 'react';
import { Box, Typography, Container, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LayersIcon from '@mui/icons-material/Layers';

const skillCategories = [
  {
    category: 'Languages',
    icon: <CodeIcon />,
    items: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ]
  },
  {
    category: 'Front-End',
    icon: <LayersIcon />,
    items: [
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
      { name: 'Material UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'ES6+', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' }
    ]
  },
  {
    category: 'Back-End & DB',
    icon: <StorageIcon />,
    items: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ]
  },
  {
    category: 'Tools & Others',
    icon: <DataObjectIcon />,
    items: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' }
    ]
  }
];

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 10, position: 'relative' }}>
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
            Technical <Box component="span" sx={{ color: 'primary.main' }}>Skills</Box>
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
          {skillCategories.map((skill, index) => (
            <Grid item xs={11} sm={6} md={3} key={skill.category} sx={{ display: 'flex' }}>
              <motion.div
                style={{ width: '100%', display: 'flex' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  component={motion.div}
                  whileHover={{ y: -10 }}
                  sx={{
                    p: 4,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 20px 40px -20px rgba(139, 92, 246, 0.4)',
                      '& .category-bg': {
                        transform: 'scale(1.2) rotate(10deg)',
                        opacity: 0.1,
                      },
                      '& .skill-aura': {
                        opacity: 1,
                      }
                    },
                  }}
                >
                  <Box
                    className="skill-aura"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '150%',
                      height: '150%',
                      background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      zIndex: 0,
                      pointerEvents: 'none',
                    }}
                  />

                  <Box
                    className="category-bg"
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      fontSize: '5rem',
                      opacity: 0.03,
                      transition: 'all 0.6s ease',
                      zIndex: 0,
                    }}
                  >
                    {skill.icon}
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                      color: 'primary.main',
                      mb: 2,
                      zIndex: 1,
                    }}
                  >
                    {skill.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 700, zIndex: 1 }}>
                    {skill.category}
                  </Typography>
                  <Stack 
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    spacing={2} 
                    sx={{ width: '100%', zIndex: 1 }}
                  >
                    {skill.items.map((item) => (
                      <Box
                        key={item.name}
                        component={motion.div}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 }
                        }}
                        sx={{
                          py: 1,
                          px: 2,
                          borderRadius: 2,
                          background: 'rgba(255, 255, 255, 0.03)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          transition: 'all 0.2s ease',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          '&:hover': {
                            background: 'rgba(139, 92, 246, 0.08)',
                            borderColor: 'rgba(139, 92, 246, 0.3)',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={item.logo}
                          alt={item.name}
                          sx={{
                            width: 20,
                            height: 20,
                            filter: item.name === 'Express.js' || item.name === 'Postman' || item.name === 'Material UI' ? 'invert(1)' : 'none',
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: 'text.secondary',
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
