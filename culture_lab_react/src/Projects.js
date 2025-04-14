import AppAppBar from "./marketing-page/components/AppAppBar";
import Footer from "./marketing-page/components/Footer";
import ProjectPage from "./marketing-page/components/projectComponent";
import AppTheme from "./shared-theme/AppTheme";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";


export default function Project(props) {
    return (
        <AppTheme {...props}>
            <AppAppBar />
            <Box
                id="hero"
                sx={(theme) => ({
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundImage: `url("${process.env.PUBLIC_URL}/project.jpg")`,
                    backgroundColor: "rgb(0,0,0,0.5)",

                    ...theme.applyStyles("dark", {
                        filter: "invert(1)",
                        backgroundImage: `url("${process.env.PUBLIC_URL}/project.jpg")`,
                    }),
                })}
            >
                <Container
                    sx={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        pt: { xs: 5, sm: 10 },
                        pb: { xs: 15, sm: 25 },

                        ...theme.applyStyles("dark", {
                            filter: "invert",
                        }),
                    })}
                >
                    <Stack
                        spacing={2}
                        useFlexGap
                        sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
                    >
                        <Typography
                            variant="h1"
                            sx={(theme) => ({
                                color: "white",
                                flexDirection: { xs: "column", sm: "row" },
                                alignItems: "center",
                                fontSize: "clamp(6rem, 14vw, 6.5rem)",
                                textAlign: "center",

                                ...theme.applyStyles("dark", {
                                    color: "white",
                                }),
                            })}
                        >
                            Projects
                        </Typography>
                    </Stack>
                </Container>
            </Box>
            <ProjectPage />
            <Divider />
            <Footer/>
        </AppTheme>
    )
}