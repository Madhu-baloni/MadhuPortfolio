import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Stack, IconButton, Paper, Snackbar, Alert } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Contact = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID || "mgopjlgk");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  React.useEffect(() => {
    if (state.succeeded) {
      setOpen(true);
    }
  }, [state.succeeded]);

  return (
    <Box id="contact" sx={{ py: 10, background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05))' }}>
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
            Get In <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Contact Information</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5 }}>
                I'm currently looking for new opportunities. Feel free to reach out if you have a question or just want to say hi!
              </Typography>

              <Stack spacing={4}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box sx={{ p: 1.5, borderRadius: 2, background: 'rgba(139, 92, 246, 0.1)', color: 'primary.main' }}>
                    <MailIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Email</Typography>
                    <Typography variant="h6">balonimadhu@gmail.com</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={3} alignItems="center">
                  <Box sx={{ p: 1.5, borderRadius: 2, background: 'rgba(236, 72, 153, 0.1)', color: 'secondary.main' }}>
                    <PhoneIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Phone</Typography>
                    <Typography variant="h6">+91 9997446605</Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={3} alignItems="center">
                  <Box sx={{ p: 1.5, borderRadius: 2, background: 'rgba(245, 158, 11, 0.1)', color: 'warning.main' }}>
                    <LocationOnIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Location</Typography>
                    <Typography variant="h6">Noida, UP</Typography>
                  </Box>
                </Stack>
              </Stack>

              <Box sx={{ mt: 6 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Follow Me</Typography>
                <Stack direction="row" spacing={2}>
                  {[
                    { icon: <GitHubIcon sx={{ fontSize: 20 }} />, link: 'https://github.com/Madhu-baloni' },
                    { icon: <LinkedInIcon sx={{ fontSize: 20 }} />, link: 'https://in.linkedin.com/in/madhu-baloni-47baa1227' },
                    { icon: <InstagramIcon sx={{ fontSize: 20 }} />, link: 'http://www.instagram.com/balonimadhu' },
                  ].map((social, i) => (
                    <IconButton
                      key={i}
                      href={social.link}
                      target="_blank"
                      sx={{
                        color: 'text.secondary',
                        background: 'rgba(255, 255, 255, 0.05)',
                        '&:hover': {
                          color: 'primary.main',
                          background: 'rgba(139, 92, 246, 0.1)',
                          transform: 'translateY(-3px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper sx={{ p: 4, background: 'rgba(30, 41, 59, 0.3)' }}>
                {state.succeeded ? (
                  <Box sx={{ textAlign: 'center', py: 5 }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                    >
                      <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                    </motion.div>
                    <Typography variant="h4" gutterBottom fontWeight={700}>Message Sent!</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => window.location.reload()}
                      sx={{ mt: 3 }}
                    >
                      Send Another Message
                    </Button>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="outlined"
                          name="name"
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          variant="outlined"
                          name="email"
                          type="email"
                          required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Subject"
                          variant="outlined"
                          name="subject"
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          variant="outlined"
                          multiline
                          rows={4}
                          name="message"
                          required
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={state.submitting}
                          endIcon={<SendIcon sx={{ fontSize: 18 }} />}
                          fullWidth
                          sx={{
                            height: 56,
                            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)',
                          }}
                        >
                          {state.submitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                )}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Message sent successfully!
          </Alert>
        </Snackbar>

        <Box sx={{ mt: 10, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Madhu Baloni❤️. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
