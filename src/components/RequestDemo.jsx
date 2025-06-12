import React from "react";
import HeadlineSection from "./HeadlineSection";
import { useNavigate } from "react-router-dom";
import LiveDemo from "../assets/LiveDemoIcon.svg";
import ProblemStatement from "../assets/ProblemStatementIcon.svg";
import AgenticFlow from "../assets/AgenticFlowIcon.svg";
import DemoIcon from "../assets/DemoIcon.svg";
import BackButton from "../assets/Back_Button.svg";
import "./RequestDemo.css";

import { alpha, styled } from "@mui/material/styles";
// import { InputBase, Box, InputLabel, TextField, FormControl } from '@mui/material';

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: '#F3F6F9',
//     border: '1px solid',
//     borderColor: '#E0E3E7',
//     fontSize: 16,
//     width: 'auto',
//     padding: '10px 12px',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//       borderColor: '#2D3843',
//     }),
//   },
// }));

const RequestDemo = () => {
  const navigate = useNavigate();

  const headlinesection = {
    title: "Agentic Ai Storefront",
    description: `Tell us what you are looking for ...`,
  };

  return (
    <div>
      <HeadlineSection
        title={headlinesection.title}
        description={headlinesection.description}
      />

      <div className="request">
        <div className="detail-back-button">
          <img src={BackButton} onClick={() => navigate("/details")} />
          <p> Back to options</p>
        </div>
        <div className="form">
          <div className="form-header">
            <img src={LiveDemo} alt="Request a Live Demo" />
            <p>Request a Live Demo</p>
          </div>
          <div className="form-data">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ mt: 2, width: "inherit" }}
            >
              {" "}
              <Grid container spacing={1.5} sx={{ width: "100%" }}>
                {/* First Row */}
                <Grid item margin={1} sx={{ width: "100%", marginX:"1vw"  }}>
                  <Grid container spacing={5} justifyContent="space-between">
                    <Grid item sx={{width: "30%"}} >
                      <TextField
                        fullWidth
                        required
                        label="Full Name"
                        placeholder="Enter full name"
                        variant="outlined"
                        InputLabelProps={{ shrink: true, style: { color: 'rgba(0, 0, 0, 1)' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.95)',
                            },
                        }}}
                      />
                    </Grid>
                    <Grid item sx={{width: "30%"}}>
                      <TextField
                        fullWidth
                        required
                        label="Work Email"
                        placeholder="Enter Work Email"
                        variant="outlined"
                        InputLabelProps={{ shrink: true, style: { color: 'rgba(0, 0, 0, 1)' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.95)',
                            },
                        }}}
                      />
                    </Grid>
                    <Grid item sx={{width: "30%"}}>
                      <TextField
                        fullWidth
                        required
                        label="Company Name"
                        placeholder="Enter Company Name"
                        variant="outlined"
                        InputLabelProps={{ shrink: true, style: { color: 'rgba(0, 0, 0, 1)' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.95)',
                            },
                        }}}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* Second Row */}
                <Grid item margin={1} sx={{ width: "100%", marginX:"1vw"  }}>
                  <Grid container spacing={5} justifyContent="space-between">
                    <Grid item sx={{width: "30%"}}>
                      <TextField
                        fullWidth
                        required
                        label="Job Title"
                        placeholder="Enter job title"
                        variant="outlined"
                        InputLabelProps={{ shrink: true,style: { color: 'rgba(0, 0, 0, 1)' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.95)',
                            },
                        }}}
                      />
                    </Grid>
                    <Grid item sx={{width: "30%"}}>
                      <TextField
                        fullWidth
                        required
                        label="Phone Number (Personal)"
                        placeholder="+91 9876543210"
                        variant="outlined"
                        InputLabelProps={{ shrink: true, style: { color: 'rgba(0, 0, 0, 1)' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.95)',
                            },
                        }}}
                      />
                    </Grid>
                    <Grid item sx={{width: "30%"}}>
                      <TextField
                        fullWidth
                        label="Phone Number (Office)"
                        placeholder="+91 123456789"
                        variant="outlined"
                        InputLabelProps={{ shrink: true, style: { color: 'rgba(0, 0, 0, 1)' } }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.95)',
                            },
                        }}}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                {/* Third Row */}
                <Grid item margin={1} sx={{ width: "100%", marginX:"1vw"  }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="What would you like to see?"
                    placeholder="Enter in details what you expect from demo..."
                    variant="outlined"
                    InputLabelProps={{ shrink: true, style: { color: 'rgba(0, 0, 0, 1)' } }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(0, 0, 0, 0.95)',
                        },
                    }}}
                  />
                </Grid>
                {/* Fourth Row */}
                <Grid item margin={1} sx={{ width: "100%", marginX:"1vw" ,  height:"5vh" }}>
                  <Grid container spacing={2} justifyContent="flex-end">
                    <Grid item md={2}>
                      <Button fullWidth variant="outlined">
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item md={2}>
                      <Button fullWidth variant="contained" color="primary">
                        Send Request
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div className="button-group">
          <div className="button" onClick={() => navigate("/details/demo")}>
            <img src={DemoIcon} alt="See a demo" />
            <p>See a demo</p>
          </div>
          <div className="button">
            <img src={ProblemStatement} alt="Request a Live demo" />
            <p>Problem Statement</p>
          </div>
          <div
            className="button"
            onClick={() =>
              window.open("http://52.66.253.205:5173/login", "_blank")
            }
          >
            <img src={AgenticFlow} alt="Agentic Flow" />
            <p>Agentic Flow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
