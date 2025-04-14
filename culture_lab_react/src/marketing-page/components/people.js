import { Grid, Card, CardContent, CardMedia, Typography, Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import peopleData from './peopleData.json';

const { pi, postdocs, students, researchers, visiting_students_and_scientists, alumni } = peopleData;

const LabTeam = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleNameClick = (category, id) => {
    // navigate(`/individual/${category}/${id}`); // Navigate to the profile page of the clicked member
    return
  };

  return (
    <Grid container spacing={2} style={{ marginTop: '2%', paddingLeft: '3%' }}>
      {/* PI Section */}
      <Grid container spacing={2} style={{ marginLeft: '2%' }}><h1>Principal Investigator</h1></Grid>
      {pi.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} style={{ marginLeft: '0.5%' }}>
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              sx={{ maxHeight: "300px", objectFit: "contain", minHeight: "300px" }}
              image={member.imageUrl}
              alt={member.name}
            />
            <CardContent>
              {/* Name as clickable component */}
              <Typography
                color='black'
                gutterBottom
                variant="h6"
                component="div"
                style={{ marginTop: "5%", cursor: "pointer" }}
                onClick={() => handleNameClick("pi", member.name)} // onClick event handler for name
              >
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
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Divider />

      {/* Postdoctoral Researchers Section */}
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Postdoctoral Researchers </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {postdocs.map((member, index) => (
          <Grid key={index} sx={{ display: "flex", flexDirection: "column" }} style={{ marginTop: '1%', marginRight: '2%' }}>
            <Card>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={member.imageUrl}
                  style={{ maxWidth: "300px", maxHeight: "300px", minHeight: "300px", objectFit: "contain" }}
                  alt={member.name}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: "2%", textAlign: "center" }}>
                {/* Name as clickable component */}
                <Typography
                  color='black'
                  marginTop={1}
                  fontWeight={600}
                  textAlign={"left"}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNameClick("postdocs", member.name)} // onClick event handler for name
                >
                  {member.name}
                </Typography>
                {member.department && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }} textAlign={"left"}>
                    <b>Department:</b> {member.department}
                  </Typography>
                )}
                {member.researchInterests && (
                  <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                    <b>Interests:</b> {member.researchInterests}
                  </Typography>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      {/* Graduate Students Section */}
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Graduate Students (PhD/MS) </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {students.map((member, index) => (
          <Grid key={index} sx={{ display: "flex", flexDirection: "column" }} style={{ marginTop: '1%', marginRight: '2%' }}>
            <Card>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={member.imageUrl}
                  style={{ maxWidth: "300px", maxHeight: "300px", minHeight: "300px", objectFit: "contain" }}
                  alt={member.name}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: "2%", textAlign: "center" }}>
                <Typography
                  color='black'
                  fontWeight={600}
                  textAlign={"left"}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNameClick("students", member.name)} // onClick event handler for name
                >
                  {member.name} ({member.title})
                </Typography>

                <Typography fontWeight={400} textAlign={"left"}>Primary Supervisor: {member.supervisor}</Typography>
                {member.department && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }} textAlign={"left"}>
                    <b>Department:</b> {member.department}
                  </Typography>
                )}
                {member.researchInterests && (
                  <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                    <b>Interests:</b> {member.researchInterests}
                  </Typography>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      {/* Research Associates Section */}
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Research Associates </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {researchers.map((member, index) => (
          <Grid key={index} sx={{ display: "flex", flexDirection: "column" }} style={{ marginTop: '1%', marginRight: '2%' }}>
            <Card>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={member.imageUrl}
                  style={{ maxWidth: "300px", maxHeight: "300px", minHeight: "300px", objectFit: "contain" }}
                  alt={member.name}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: "2%", textAlign: "center" }}>
                <Typography
                  color="black"
                  fontWeight={600}
                  textAlign={"left"}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNameClick("researchers", member.name)} // onClick event handler for name
                >
                  {member.name}
                </Typography>
                {member.department && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }} textAlign={"left"}>
                    <b>Department:</b> {member.department}
                  </Typography>
                )}
                {member.researchInterests && (
                  <Typography variant="body2" color="text.secondary" textAlign={"left"}>
                    <b>Interests:</b> {member.researchInterests}
                  </Typography>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      {/* Visiting Students Section */}
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Visiting Students </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {visiting_students_and_scientists.map((member, index) => (
          <Grid key={index} sx={{ display: "flex", flexDirection: "column" }} style={{ marginRight: '2%' }}>
            <Card>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: "2%", textAlign: "center" }}>
                <Typography fontWeight={600} textAlign={"left"} color='black'>{member.name}</Typography>
                <Typography fontWeight={400} textAlign={"left"}>{member.title}</Typography>
                <Typography fontWeight={400} textAlign={"left"}>Primary Affiliation - {member.primaryAffiliation}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />

      {/* Alumni Section */}
      <Grid container spacing={2} style={{ marginLeft: '2%', marginTop: '1%' }}><h1> Alumni </h1></Grid>
      <Grid container spacing={5} style={{ marginLeft: '2%', marginTop: '1%' }}>
        {alumni.map((member, index) => (
          <Grid key={index} sx={{ display: "flex", flexDirection: "column" }} style={{ marginRight: '2%' }}>
            <Card>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: "1%", textAlign: "center" }}>
                <Typography fontWeight={600} textAlign={"left"} color="black">{member.name}</Typography>
                <Typography fontWeight={400} textAlign={"left"}>{member.title}</Typography>
                <Typography fontWeight={400} textAlign={"left"}>Primary Affiliation - {member.primaryAffiliation}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider />
    </Grid >
  );
};

export default LabTeam;
