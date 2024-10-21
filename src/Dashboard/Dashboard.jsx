import { useState } from 'react';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import bell_icon from '../assets/Images/Vectorbell.svg';
import StickyHeadTable from './ClientTable';
// import PieAnimation from './Piechart';
import PieChart  from './Piechart';
import SummaryAreaChart from './Graph';
import TinyBarChart from './TotalClientsBar';
// import Calendar from './Calendar';

const Visitors = [
  {
    Name: 'Visited',
    Count: '1,478',
    Percentage: '-15',
  },
  {
    Name: 'Viewed Property',
    Count: '1,478',
    Percentage: '+15',
  },
  {
    Name: 'Chat with Agent',
    Count: '1,478',
    Percentage: '+15',
  },
  {
    Name: 'Booked Visit',
    Count: '1,478',
    Percentage: '+15',
  },
  {
    Name: 'Total Clients',
    Count: '1,478',
    Percentage: '+15', // Default percentage
  },
];

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState('Today'); // Default active button is 'Today'
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2)); // Default to March 2024
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(2); // Track selected month index

  const notificationsCount = 40; // Example notification count, can be dynamic
  const buttons = ['Today', 'Day', 'Week', 'Month', 'Year'];
  const [isCalendarPopup,setCalendarPopup]=useState(false)

  // Check if the screen size is less than 600px
  const isSmallScreen = useMediaQuery('(max-width:600px)');

   // Function to move to previous month
   const handlePrevious = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
    setSelectedMonthIndex((prevIndex) => Math.max(0, prevIndex - 1)); // Adjust index accordingly
  };

  // Function to move to next month
  const handleNext = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));
    setSelectedMonthIndex((prevIndex) => Math.min(11, prevIndex + 1)); // Adjust index accordingly
  };

  // Format date to "Month, Year"
  const formatDate = (date) => {
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  };


  // Function to calculate the previous six months and their indices
  const getLastSixMonths = () => {
    const months = [];
    const currentMonth = currentDate.getMonth();
    for (let i = 0; i < 6; i++) {
      const monthIndex = (currentMonth - i + 12) % 12; // Wrap around for negative values
      months.push(monthIndex);
    }
    return months.reverse(); // Reverse to show the latest month first
  };

  // Get the last six months
  const lastSixMonths = getLastSixMonths();
  return (
    <Box className="crm-dashboard" width='1528px'>
      {/* Heading Section */}
      <Box sx={{ width: '1528px', height: '92px', borderBottom: 1, borderColor: 'divider', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight="bold" fontSize="24px">Dashboard</Typography>
        <Box display="flex" alignItems="center" sx={{ width: '112px', height: '44px', justifyContent: 'space-between' }}>
          {/* Notifications */}
          <Box position="relative">
            <IconButton sx={{ border: 1, borderRadius: '8px', borderColor: '#E1E4E5' }}>
              <img src={bell_icon} alt="" style={{ padding: '1px' }} />
            </IconButton>
            {notificationsCount > 0 && (
              <Box position="absolute" sx={{ top: '-8px', right: '-8px', backgroundColor: '#0FA4B5', padding: '2px 4px', color: 'white', fontSize: '12px', borderRadius: '4px', width: '23px', height: '19px', textAlign: 'center' }}>
                {notificationsCount}
              </Box>
            )}
          </Box>

          {/* Profile Image */}
          <Box position="relative">
            <Avatar alt="Profile Image" src="https://wallpaperaccess.com/full/2562973.jpg" sx={{ width: '44px', height: '44px' }} />
            <Box position="absolute" sx={{ bottom: 0, right: 0, backgroundColor: '#0FA4B5', width: '12px', height: '12px', borderRadius: '50%' }}></Box>
          </Box>
        </Box>
      </Box>

      {/* Inner Section */}
      <Box sx={{ padding: '16px', height: '100%', width:'1528px' }}>
        {/* Filter Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderRadius: '8px',
            flexDirection: {
              sm: 'row',    // Row direction for screens 600px and above
            },
          }}
        >
          {/* Button Group */}
          <Box
            sx={{
              display: 'flex',
              border: 1,
              borderColor: 'divider',
              borderRadius: '8px',
              padding: '1px',
              width: {
                xs: '325px',   // Full width on smaller screens
                sm: '325px',  // Fixed width on larger screens
              },
              height: '40px',
              marginBottom: {
                xs: '16px',   // Add margin at the bottom for smaller screens
                sm: '0',      // No margin for larger screens
              },
            }}
          >
            {buttons.map((button) => (
              <Button
                key={button}
                onClick={() => setActiveButton(button)}
                variant={activeButton === button ? 'contained' : 'text'}
                sx={{
                  textTransform: 'none',
                  backgroundColor: activeButton === button ? '#0FA4B5' : 'transparent',
                  color: activeButton === button ? 'white' : '#001219',
                  width: '68px',
                  height: '36px',
                  fontSize: '14px',
                  borderRadius: '8px',
                }}
              >
                {button}
              </Button>
            ))}
          </Box>

          {/* Date Navigation */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: {
                xs: '220px',    // Full width on smaller screens
                sm: '220px',   // Fixed width on larger screens
              },
              height: '40px',
              marginLeft: {
                xs: '0',      // No margin for smaller screens
                sm: '16px',   // Add margin to the left for larger screens
              },
            }}
          >
            {/* Previous Month */}
            <IconButton
              onClick={handlePrevious}
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: '8px',
                padding: '8px',
                height: '40px',
                width: '40px',
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: '17px', color: 'black', marginLeft: '4px' }} />
            </IconButton>

            {/* Date Display */}
            <Typography variant="body1" sx={{ fontSize: '14px',cursor:'pointer' }}
            // onClick ={()=>{setCalendarPopup(true)}}
             >
              {formatDate(currentDate)}
            </Typography>

            {/* Next Month */}
            <IconButton
              onClick={handleNext}
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: '8px',
                padding: '8px',
                height: '40px',
                width: '40px',
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: '17px', color: 'black' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Shows-Visitors */}
        <Box
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
          borderTop="1px solid #E1E4E5"
          borderBottom="1px solid #E1E4E5"
          width='1480px'
          marginTop="20px"
          minHeight="138px"
          paddingY="24px"
          sx={{
            flexDirection: {
              // xs: 'column', // Column layout on small screens
              sm: 'row',    // Row layout on larger screens
            },
            alignItems: {
              // xs: 'center', // Center align on small screens
              sm: 'flex-start', // Default align on larger screens
            },
          }}
        >
          {Visitors.map((visitor, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  // xs: '70%',   // Full width on screens smaller than 600px
                  sm: '262px',  // Fixed width on larger screens
                },
                height: '92px',
                paddingX: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '12px',
                marginBottom: '16px', // Spacing between rows
                position: 'relative',
                // Add border and box shadow for screens less than 600px
                border: {
                  xs: '1px solid #E1E4E5',  // Border on small screens
                  sm: 'none',               // No border on larger screens
                },
                boxShadow: {
                  xs: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Box shadow on small screens
                  sm: 'none',                            // No box shadow on larger screens
                },
              }}
            >
              {/* Visitor Name */}
              <Typography fontSize="16px" color="#727E82" fontWeight="400" width="238px" height="20px">
                {visitor.Name}
              </Typography>

              {/* Visitor Count */}
              <Typography fontSize="22px" fontWeight="700">
                {visitor.Count}
              </Typography>

              {/* Visitor Percentage with conditional rendering */}
              <Typography fontSize="16px" fontWeight={600} color={visitor.Percentage >= 0 ? '#318D2C' : '#FF5E4D'}>
              {visitor.Percentage}%
              <span style={{ fontSize: '14px', color: '#727E82', paddingLeft: '8px', fontWeight: '400' }}>
                {visitor.Name === 'Total Clients' ? 'from current month' : 'from last month'}
              </span>
              <span className='total-clients-chart' style={{ position: 'absolute', top: '80px', right: '-78px' }}>
                {visitor.Name === 'Total Clients' ? <TinyBarChart selectedMonthIndex={selectedMonthIndex} lastSixMonths={lastSixMonths} /> : ''}
              </span>
            </Typography>

              {/* Vertical Line (divider between boxes) */}
              {!isSmallScreen && index < Visitors.length - 1 && ( // Check if not a small screen
                <Box
                  sx={{
                    position: 'absolute',
                    top: '0',
                    right: '-12px',
                    height: '100%',
                    width: '1px',
                    backgroundColor: '#E1E4E5',
                  }}
                />
              )}
             
            </Box>
          ))}
        </Box>

        {/* Charts section */}
        <Box
          width="1480px"
          height="422px"
          border="1px solid #E1E4E5"
          borderRadius="15px"
          marginTop="20px"
          padding="24px"
          display="flex"
          justifyContent="space-between"
          sx={{
            flexDirection: {
              // xs: 'column',   // Flex direction column for small screens (default 'xs' means 0px and up)
              md: 'row',      // Flex direction row for medium screens (992px and up)
            },
          }}
        >
          <Box
            width= '1056px'   // Full width for small screens, 1056px for medium and larger
            height="380px"
            border="1px solid #E1E4E5"
            borderRadius="16px"
          >
            <SummaryAreaChart />
          </Box>

          <Box
            width='352px'   // Full width for small screens, 400px for medium and larger
            height="380px"
            border="1px solid #E1E4E5"
            borderRadius="16px"
            padding="24px"
          >
            <PieChart />
          </Box>
        </Box>

        {/* Client Table */}
        <Box marginTop="20px" width='1480px' height='500px' >
          <StickyHeadTable />
        </Box>
      </Box>
      {isCalendarPopup&&<Calendar/>}
    </Box>
  );
};

export default Dashboard;
