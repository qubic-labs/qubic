import AppAppBar from "./marketing-page/components/AppAppBar";
import LabTeam from "./marketing-page/components/people";
import AppTheme from "./shared-theme/AppTheme";
import { Typography, Box, Stack, Container } from "@mui/material";
import Footer from "./marketing-page/components/Footer";
import Divider from "@mui/material/Divider";
import {MdEmojiPeople} from "react-icons/md";

export default function People(props) {
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
                    // backgroundImage: `url("${process.env.PUBLIC_URL}/people.jpg")`,
                    backgroundColor: "#065171",

                    ...theme.applyStyles("dark", {
                        filter: "invert(1)",
                        backgroundImage: `url("${process.env.PUBLIC_URL}/people.jpg")`,
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
                            People
                            <MdEmojiPeople size={50} style={{marginBottom: "10%"}}/>
                        </Typography>
                    </Stack>
                </Container>
            </Box>
            <LabTeam />
            <Divider style={{marginTop: "10%"}} />
            <Footer/>

        </AppTheme>
    )
}