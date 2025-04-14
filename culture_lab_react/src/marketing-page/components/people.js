import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Divider } from '@mui/material';
import { Link, Email, Phone } from '@mui/icons-material';

const faculty = [
  {
    name: 'Prof. Monojit Choudhury',
    title: 'Principal Investigator',
    designation: 'Professor',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2024/01/monojit-choudhury-487px.jpg',
    website: 'https://mbzuai.ac.ae/study/faculty/monojit-choudhury/',
  },
  {
    name: 'Prof. Alham Fikri Aji',
    title: 'Assistant Professor, NLP, MBZUAI',
    designation: 'Assistant Professor',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2024/03/Alham-Fikri-Aji-487px2024.jpg',
    website: 'https://mbzuai.ac.ae/study/faculty/alham-fikri-aji/',
  },
  {
    name: 'Prof. Thamar Solorio',
    title: 'Professor, NLP, MBZUAI',
    designation: 'Professor',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2023/10/Thamar-487px.jpg',
    website: 'https://mbzuai.ac.ae/study/faculty/thamar-solorio/',
  },
  {
    name: 'Prof. Elizabeth Churchill',
    title: 'Department Chair, HCI, MBZUAI',
    designation: 'Professor',
    department: 'HCI',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2024/05/ElizabethChurchill-487px.jpg',
    website: 'https://mbzuai.ac.ae/study/faculty/elizabeth-churchill/',
  },
  {
    name: 'Prof. Fajri Koto',
    title: 'Assistant Professor, NLP, MBZUAI',
    designation: 'Assistant Professor',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2024/07/Untitled-design-11.png',
    website: 'https://mbzuai.ac.ae/study/faculty/fajri-koto/',
  },
  {
    name: 'Prof. Mohammed Abdul Mageed',
    title: 'Associate Professor, NLP, MBZUAI',
    designation: 'Associate Professor',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2023/08/Muhammad-Abdul-Mageed-487px-1.jpg',
    website: 'https://mbzuai.ac.ae/study/faculty/muhammad-abdul-mageed/',
  },
  {
    name: 'Prof. Yova Kementchedjhieva',
    title: 'Assistant Professor, NLP, MBZUAI',
    designation: 'Assistant Professor',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2023/10/Yova-Kementchedijhieva-487px.png',
    website: 'https://mbzuai.ac.ae/study/faculty/yova-kementchedjhieva/',
  },
  {
    name: 'Prof. Gus (Guangyu) Xia',
    title: 'Assistant Professor, ML, MBZUAI',
    designation: 'Assistant Professor',
    department: 'ML',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2022/06/profile_gus-xia_secondary.jpg',
    website: 'https://mbzuai.ac.ae/study/faculty/dr-gus-xia/',
  },
  {
    name: 'Prof. Kentaro Inui',
    title: 'Professor, NLP, MBZUAI',
    designation: 'Professor',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://mbzuai.ac.ae/wp-content/uploads/2023/10/Kentaro-Inui-487px.jpg',
    website: 'https://mbzuai.ac.ae/study/faculty/kentaro-inui/',
  },
  {
    name: 'Prof. Salman Khan',
    title: 'Associate Professor, CV, MBZUAI',
    designation: 'Associate Professor',
    department: 'CV',
    primaryAffiliation: 'MBZUAI',
    researchArea: ' ',
    imageUrl: 'https://salman-h-khan.github.io/images/salman.png',
    website: 'https://mbzuai.ac.ae/study/faculty/salman-khan/',
  },
  // Add more members as needed
];

const postdocs = [
  {
    name: 'Sougata Saha',
    title: 'Postdoc',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
];

const students = [
  {
    name: 'Mukund Choudhary',
    title: 'PhD',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Utkarsh Agarwal',
    title: 'PhD',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Amirbek Djanibekov',
    title: 'PhD',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Atharva Kulkarni',
    title: 'MSc',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
];

const researchers = [
  {
    name: 'Arif Ahmad',
    title: 'Researcher',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Atharva Mehta',
    title: 'Researcher',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Farid Adilazuarda',
    title: 'Researcher',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Alham Fikri Aji',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Saurabh Pandey',
    title: 'Researcher',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Shivam Chauhan',
    title: 'Researcher',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
];

const visiting_students_and_scientists = [
  {
    name: 'Hellina Hailu Nigatu',
    title: 'Visiting Researcher',
    titleprimary: 'PhD',
    primaryAffiliation: 'UC Berkeley',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Sourabrata Mukherjee',
    title: 'Visiting Researcher',
    titleprimary: 'PhD',
    primaryAffiliation: 'Charles University',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Dr. Joyjeet Paul',
    title: 'Visiting Scientist',
    titleprimary: 'Professor',
    primaryAffiliation: 'University of Michigan',
    host: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
];

const collaborators = [
  {
    name: 'Harshit Buddhiraja',
    title: 'Intern',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Harshit Gupta',
    title: 'Intern',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
  {
    name: 'Soumya Teotia',
    title: 'Intern',
    department: 'NLP',
    primaryAffiliation: 'MBZUAI',
    supervisor: 'Prof. Monojit Choudhury',
    imageUrl: 'thumbnail.webp',
  },
];

const LabTeam = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: '2%', paddingLeft: '2%' }}>
      <Grid container spacing={2} style={{ marginLeft: '2%' }}><h1>Faculty</h1></Grid>
      {faculty.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              maxWidth: 300,
              boxShadow: 3,
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            <CardMedia
              component="img"
              height="250"
              image={member.imageUrl}
              alt={member.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {member.name}
              </Typography>

              {member.title && (
                <Typography variant="body2" color="text.secondary">
                  {member.title}
                </Typography>
              )}
              {member.designation && (
                <Typography variant="body2" color="text.secondary">
                  <b>Designation:</b> {member.designation}
                </Typography>
              )}
              {member.department && (
                <Typography variant="body2" color="text.secondary">
                  <b>Department:</b> {member.department}
                </Typography>
              )}
              {member.primaryAffiliation && (
                <Typography variant="body2" color="text.secondary">
                  <b>Primary Affiliation:</b> {member.primaryAffiliation}
                </Typography>
              )}
              {member.secondaryAffiliation && (
                <Typography variant="body2" color="text.secondary">
                  <b>Secondary Affiliation:</b> {member.secondaryAffiliation}
                </Typography>
              )}
              {member.researchArea && (
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
                  <b>Research Interests:</b> {member.researchArea}
                </Typography>
              )}
              {member.officeLocation && (
                <Typography variant="body2" color="text.secondary">
                  <b>Office:</b> {member.officeLocation}
                </Typography>
              )}
              {member.email && (
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email fontSize="small" sx={{ mr: 1 }} /> {member.email}
                </Typography>
              )}
              {member.phone && (
                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone fontSize="small" sx={{ mr: 1 }} /> {member.phone}
                </Typography>
              )}
              {member.website && (
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Link />}
                  href={member.website}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    marginTop: '15px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: 'aliceblue', color: 'black' },
                  }}
                >
                  HomePage
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Divider />
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Postdoctoral Researchers </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {postdocs.map((member, index) => (
          <Grid
            key={index}
            sx={{ display: "flex", flexDirection: "column" }}
            style={{ marginTop: '1%', marginRight: '2%' }}
          >
            <Card>
              <img src={member.imageUrl} style={{maxWidth:"240px" }}></img>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1%",
                  textAlign: "center"
                }}
              >
                <Typography fontWeight={600}>{member.name} ({member.title} - {member.department})</Typography>
                <Typography fontWeight={400}>Supervisor: {member.supervisor}</Typography>
              </Box>
            </ Card>
          </Grid>

        ))}
      </Grid>

      <Divider />
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Graduate Students (PhD/MS) </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {students.map((member, index) => (
          <Grid
            key={index}
            sx={{ display: "flex", flexDirection: "column" }}
            style={{ marginTop: '1%', marginRight: '2%' }}
          >
            <Card>
              <img src={member.imageUrl} style={{maxWidth:"240px" }}></img>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1%",
                  textAlign: "center"
                }}
              >
                <Typography fontWeight={600}>{member.name} ({member.title} - {member.department})</Typography>
                <Typography fontWeight={400}>Supervisor: {member.supervisor}</Typography>

                {/* <Typography fontWeight={600}>{member.name}</Typography>
                <Typography fontWeight={500}>{member.title} - {member.department}</Typography>
                <Typography fontWeight={200}>{member.primaryAffiliation}</Typography> */}
              </Box>
            </ Card>
          </Grid>

        ))}
      </Grid>

      <Divider />
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Research Associates </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {researchers.map((member, index) => (
          <Grid
            key={index}
            sx={{ display: "flex", flexDirection: "column" }}
            style={{ marginTop: '1%', marginRight: '2%' }}
          >
            <Card>
              <img src={member.imageUrl} style={{maxWidth:"240px" }}></img>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1%",
                  textAlign: "center"
                }}
              >
                <Typography fontWeight={600}>{member.name} ({member.title} - {member.department})</Typography>
                <Typography fontWeight={400}>Supervisor: {member.supervisor}</Typography>

                {/* <Typography fontWeight={600}>{member.name}</Typography>
                <Typography fontWeight={500}>{member.title} - {member.department}</Typography>
                <Typography fontWeight={200}>{member.primaryAffiliation}</Typography> */}
              </Box>
            </ Card>
          </Grid>

        ))}
      </Grid>

      <Divider />
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Visiting Researchers </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {visiting_students_and_scientists.map((member, index) => (
          <Grid
            key={index}
            sx={{ display: "flex", flexDirection: "column" }}
            style={{ marginTop: '1%', marginRight: '2%' }}
          >
            <Card>
              <img src={member.imageUrl} style={{maxWidth:"240px" }}></img>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1%",
                  textAlign: "center"
                }}
              >
                <Typography fontWeight={600}>{member.name}</Typography>
                <Typography fontWeight={400}>{member.title}</Typography>
                <Typography fontWeight={400}>{member.titleprimary} - {member.primaryAffiliation}</Typography>
                {member.supervisor && <Typography fontWeight={400}>Supervisor: {member.supervisor}</Typography>}
                {member.host && <Typography fontWeight={400}>Host: {member.host}</Typography>}

              </Box>
            </ Card>
          </Grid>

        ))}
      </Grid>

      <Divider />
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Collaborators </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {collaborators.map((member, index) => (
          <Grid
            key={index}
            sx={{ display: "flex", flexDirection: "column" }}
            style={{ marginTop: '1%', marginRight: '2%' }}
          >
            <Card>
              <img src={member.imageUrl} style={{maxWidth:"240px" }}></img>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1%",
                  textAlign: "center"
                }}
              >
                <Typography fontWeight={600}>{member.name}</Typography>
                <Typography fontWeight={400}>{member.title} - {member.department}</Typography>
                <Typography fontWeight={400}>Supervisor: {member.supervisor}</Typography>

                {/* <Typography fontWeight={600}>{member.name}</Typography>
                <Typography fontWeight={500}>{member.title} - {member.department}</Typography>
                <Typography fontWeight={200}>{member.primaryAffiliation}</Typography> */}
              </Box>
            </ Card>
          </Grid>

        ))}
      </Grid>

    </Grid>
  );
};

export default LabTeam;
