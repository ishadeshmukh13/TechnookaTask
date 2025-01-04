import React from 'react';
import { Typography, Box } from '@mui/material';

const steps = [
    { id: 1, name: "Interview Round 1", completed: true },
    { id: 2, name: "Interview Round 2", completed: false },
    { id: 3, name: "Interview Round 3", completed: false },
    { id: 4, name: "HR Round", completed: false },
];

const InterviewStepper = () => {
    return (
        <Box sx={webStyle.mainBoxPart}>
            {steps.map((step) => (
                <Box sx={{ display: 'flex' }} key={step.id}>
                    <Box sx={webStyle.mainBox}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={step.completed ? webStyle.stepperNoStyleActive : webStyle.stepperNoStyle}>
                                {step.id}
                            </Box>
                            {steps.length !== step.id && (
                                <Box sx={step.completed ? webStyle.borderBoxActive : webStyle.borderBox}></Box>
                            )}
                        </Box>
                        <Typography sx={step.completed ? webStyle.activeTextStyle : webStyle.textStyle}>
                            {step.name}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

const webStyle = {
    activeTextStyle: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '19.6px',
        color: "#FFB200",
        textAlign: 'center',
    },
    textStyle: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '19.6px',
        textAlign: 'center',
        color: "#6C80A4",
    },
    borderBox: {
        width: '150px',
        height: '1px',
        backgroundColor: "#6C80A4",
    },
    borderBoxActive: {
        width: '150px',
        height: '1px',
        backgroundColor: "#FFB200",
    },
    mainBoxPart: {
        display: 'flex',
        marginTop: '82px',
        marginBottom: '82px',
        justifyContent: 'center',
    },
    mainBox: {
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        alignItems: 'start',
    },
    stepperNoStyleActive: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#FFB200",
        backgroundColor: "#FFF7E6",
        width: '40px',
        borderRadius: '5px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '22.4px',
        height: '40px',
    },
    stepperNoStyle: {
        color: "#6C80A4",
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        justifyContent: 'center',
        backgroundColor: "#E9ECF1",
        width: '40px',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '22.4px',
        height: '40px',
    },
};

export default InterviewStepper;
