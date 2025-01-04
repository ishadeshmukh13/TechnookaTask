import React, { useState } from 'react';
import { Box, Typography, styled, Slider, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowDropDownIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import backgroundImg from '../Assets/background.png';

const CustomIcon = (props) => <ArrowDropDownIcon style={{ color: '#7C8B9D' }} {...props} />;

const InterviewSecondPart = () => {
    const [state, setState] = useState('');
    const [openCategory, setOpenCategory] = useState(true);
    const [categories, setCategories] = useState([
        {
            title: "Smit Panchal's Ratings",
            open: true,
            data: [
                { name: "Skills and Qualifications", gain: 2, total: 5 },
                { name: "Cultural Fit", gain: 2, total: 5 },
                { name: "Problem-solving and Critical Thinking", gain: 2, total: 5 },
                { name: "Communication and Interpersonal Skills", gain: 2, total: 5 },
            ]
        },
        {
            title: "Devarsh Patel's Ratings",
            open: true,
            data: [
                { name: "Skills and Qualifications", gain: 2, total: 5 },
                { name: "Cultural Fit", gain: 2, total: 5 },
                { name: "Problem-solving and Critical Thinking", gain: 2, total: 5 },
                { name: "Communication and Interpersonal Skills", gain: 2, total: 5 },
            ]
        },
    ]);

    const handleState = (event) => setState(event.target.value);

    const handleToggle = (index) => {
        const newCategories = [...categories];
        newCategories[index].open = !newCategories[index].open;
        setCategories(newCategories);
    };

    const sliderData = [
        { id: '1', name: "Skills and Qualifications", Percent: '20%', total: '5', gain: '2' },
        { id: '2', name: "Cultural Fit", Percent: '20%', total: '5', gain: '2' },
        { id: '3', name: "Problem-solving and Critical Thinking", Percent: '20%', total: '5', gain: '2' },
        { id: '4', name: "Communication and Interpersonal Skills", Percent: '20%', total: '5', gain: '2' }
    ];

    const data = [
        { id: 1, name: "Feedback Given", total: "2", gain: 2 },
        { id: 1, name: "Feedback Pending", total: "2", gain: 0 }
    ];

    return (
        <Box style={styles.container}>
            <Box style={styles.header}>
                <Typography className='interviewHeading'>Interview Round 1</Typography>
                <InputFieldComponent variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">Completed</InputLabel>
                    <Select
                        id="demo-simple-select-filled"
                        value={state}
                        IconComponent={CustomIcon}
                        onChange={handleState}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pending</MenuItem>
                        <MenuItem value={20}>Completed</MenuItem>
                        <MenuItem value={30}>Finished</MenuItem>
                    </Select>
                </InputFieldComponent>
            </Box>

            <Box style={styles.dataBox}>
                {data.map((item, index) => (
                    <Box style={styles.backgroundBox} key={index}>
                        <Box style={styles.dataItem}>
                            <Typography style={styles.textStyle}>{item.name}</Typography>
                            <Typography style={styles.textStyleNO}>{item.gain}/{item.total}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box style={styles.ratingsContainer}>
                <Typography style={styles.textStyle}>Overall Ratings</Typography>
                <Box style={styles.ratingBox}>
                    <Typography style={styles.noHeadingStyle}>2/5</Typography>
                    {[1, 2, 3, 4, 5].map((item) => (
                        <StarIcon key={item} style={{ color: item <= 3 ? "#FFA42C" : "#7C8B9D" }} />
                    ))}
                    <Typography style={{ fontSize: '30px' }}>Poor <sup>+</sup></Typography>
                </Box>

                <Box style={styles.toggleContainer} onClick={() => setOpenCategory(!openCategory)}>
                    <Typography style={styles.toggleText}>Based on all the categories</Typography>
                    {openCategory ? <ExpandMoreIcon style={styles.icon} /> : <ExpandLessIcon style={styles.icon} />}
                </Box>

                {openCategory && (
                    <Box style={styles.sliderContainer}>
                        {sliderData.map((item) => (
                            <Box style={styles.sliderItem} key={item.id}>
                                <Box style={styles.sliderBox}>
                                    <Typography style={styles.sliderLabel}>{item.name}</Typography>
                                    <SliderComponent defaultValue={70} aria-label="Default" disabled valueLabelDisplay="auto" />
                                </Box>
                                <Typography style={styles.sliderValue}>{item.gain} / {item.total}</Typography>
                            </Box>
                        ))}
                    </Box>
                )}
            </Box>

            <Box style={styles.categoriesContainer}>
                <Box style={styles.categoriesHeader}>
                    <Typography style={styles.textStyle}>Categories Wise Ratings</Typography>
                    <Button variant="contained" style={styles.editButton}>Edit</Button>
                </Box>

                <Box style={styles.categoriesList}>
                    {categories.map((item, index) => (
                        <Box key={index}>
                            <Box style={styles.categoryToggle} onClick={() => handleToggle(index)}>
                                <Typography style={styles.title}>{item.title}</Typography>
                                {item.open ? <ExpandMoreIcon style={styles.icon} /> : <ExpandLessIcon style={styles.icon} />}
                            </Box>
                            {item.open && (
                                <Box style={styles.categoryData}>
                                    {item.data.map((dataItem, dataIndex) => (
                                        <Box key={dataIndex} style={styles.categoryItem}>
                                            <Typography style={styles.subTitle}>{dataItem.name}</Typography>
                                            <Box style={styles.starBox}>
                                                {[1, 2, 3, 4, 5].map((starIndex) => (
                                                    <StarIcon key={starIndex} style={{ color: starIndex <= dataItem.gain ? "#FFA42C" : "#7C8B9D" }} />
                                                ))}
                                                <Typography style={styles.ratingText}>Poor <sup>+</sup></Typography>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
const InputFieldComponent = styled(FormControl)({
    borderRadius: '8px',
    width: '154px',
    backgroundColor: "#F9F9F9",
    border: '1px solid #EEEEEEEE',
    '& .MuiInputLabel-root': {
        color: '#7C8B9D'
    },
    '& .MuiInputAdornment-root': {
        marginTop: 'unset !important',
        color: '#555',
    },
    '& .MuiFilledInput-underline::before': {
        borderBottom: 'unset',
    },
    '& .MuiFilledInput-underline:hover:not(.Mui-disabled)::before': {
        borderBottom: 'unset',
    },
    '& .MuiFilledInput-underline::after': {
        borderBottom: 'unset'
    },
    '& input': {
        padding: '0px 12px',
    },

});

const styles = {
    container: {
        padding: '20px',
        margin: '20px',
        marginBottom:'50px',
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        borderRadius: '7px',
    },
    header: {
        paddingInline: '20px',
        paddingBottom: '30px',
        borderBottom: '2px dashed #DCDCDC',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dataBox: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingInline: '20px',
        paddingBlock: '40px',
        justifyContent: 'space-between',
        borderBottom: '2px dashed #DCDCDC',
    },
    backgroundBox: {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        height: '170px',
        width: '48%',
    },
    dataItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px',
        width: '100%',
    },
    textStyle: {
        fontFamily: 'DM Sans',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '26.04px',
        color: "#0065A7",
    },
    textStyleNO: {
        fontFamily: 'DM Sans',
        fontSize: '64px',
        fontWeight: 500,
        color: "#FFA42C",
        lineHeight: '83.33px',
    },
    ratingsContainer: {
        paddingInline: '20px',
        paddingTop: '40px',
    },
    ratingBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    noHeadingStyle: {
        fontFamily: 'DM Sans',
        fontSize: '64px',
        fontWeight: 500,
        lineHeight: '83.33px',
        color: "#000000",
    },
    toggleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: "pointer",
        paddingBottom: '20px',
        borderBottom: '2px dashed #DCDCDC',
    },
    toggleText: {
        color: "#7C8B9D",
    },
    icon: {
        color: "#666666",
    },
    sliderContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        width: '100%',
        marginTop: '40px',
    },
    sliderItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        justifyContent: 'space-between',
    },
    sliderBox: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '80%',
    },
    sliderLabel: {
        width: '20%',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '30px',
        letterSpacing: '-0.02em',
        color: "#000000",
    },
    sliderValue: {
        color: "#7C8B9D",
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20.83px',
    },
    categoriesContainer: {
        paddingInline: '20px',
        paddingTop: '40px',
    },
    categoriesHeader: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    editButton: {
        background: "#FFA42C",
        color: '#FFFFFF',
        borderRadius: '4px',
        textTransform: "capitalize",
    },
    categoriesList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '30px',
    },
    categoryToggle: {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
    categoryData: {
        marginTop: '20px',
        display: 'flex',
        gap: '20px',
        width: '100%',
        flexWrap: 'wrap',
    },
    categoryItem: {
        width: '45%',
    },
    title: {
        fontFamily: 'DM Sans',
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '26.04px',
        color: "#7C8B9D",
    },
    subTitle: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '30px',
        letterSpacing: '-0.02em',
        color: "#000000",
    },
    ratingText: {
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        color: "#7C8B9D",
    },
};
const SliderComponent = styled(Slider)({
    '&.MuiSlider-root.Mui-disabled': {
        color: '#FFA42C',
    },
})

export default InterviewSecondPart;
