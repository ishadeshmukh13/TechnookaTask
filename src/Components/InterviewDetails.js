import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InterviewStepper from './interviewStepper';
import InterviewSecondPart from './InterviewSecondPart';

const InterviewDetails = () => {
    const detailsOfInterview = [
        { id: '1', active: false, name: "Basic Details" },
        { id: '2', active: false, name: "Contact Details" },
        { id: '3', active: false, name: "Academic Details" },
        { id: '4', active: true, name: "Interview Rounds & Ratings" },
    ];

    return (
        <Box sx={webStyle.mainBox}>
            <Box sx={webStyle.boxStyle}>
                {detailsOfInterview.map(({ id, active, name }) => (
                    <Box key={id} sx={webStyle.itemBox}>
                        <Typography sx={active ? webStyle.activeHeadingStyle : webStyle.headingStyle}>
                            {name}
                        </Typography>
                        {active && <Box sx={webStyle.borderBox}></Box>}
                    </Box>
                ))}
            </Box>
            <InterviewStepper />
            <InterviewSecondPart />
            <Box style={{display:'flex',gap:'10px',justifyContent:'end',paddingInline:'20px',  borderTop: '2px dashed #FFE09B',paddingBlock:'30px'}}>
            <Button variant='contained' style={webStyle.backBtnStyle}>
                Back
            </Button>
            <Button variant='contained' style={webStyle.submitBtnStyle}>
                Submit
            </Button>
            </Box>
        </Box>
    );
};

const webStyle = {
    submitBtnStyle: {
        backgroundColor: "#0084CA",
        width: '131px',
        color: "#FFFFFF",
        textTransform: 'capitalize',
        borderRadius: '8px'
    },
    backBtnStyle: {
        backgroundColor: "#F2F6F9",
        color: "#0084CA",
        width: '131px',
        textTransform: 'capitalize',
        borderRadius: '8px'
    },
    mainBox: {
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        padding: '35px 0',
        borderRadius: '8px',
        marginBottom:'30px'
    },
    boxStyle: {
        display: 'flex',
        paddingInline: '20px',
        gap: '80px',
        paddingBottom: '20px',
        borderBottom: '2px dashed #FFE09B',
    },
    itemBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        alignItems: 'center',
    },
    headingStyle: {
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20.83px',
        color: "#8AB8D7",
    },
    activeHeadingStyle: {
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20.83px',
        color: "#0084CA",
    },
    borderBox: {
        width: '51px',
        height: '2px',
        backgroundColor: "#0084CA",
    },
};

export default InterviewDetails;
