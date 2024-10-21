import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, IconButton, Typography, Grid, Select, MenuItem, FormControl, Pagination } from '@mui/material';
import filter_icon from '../assets/Images/Filter.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../App.css';

const ClientsData = [
  {
      clientId : 'CLID-001456',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb','2.5CR','2BHK'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001457',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001458',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001459',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001460',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001461',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001462',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Villa'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001463',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
    clientId : 'CLID-001456',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb','2.5CR','2BHK'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001457',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001458',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001459',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001460',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001461',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001462',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001463',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
  {
      clientId : 'CLID-001456',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb','2.5CR','2BHK'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001457',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001458',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001459',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001460',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001461',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001462',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Villa'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
      clientId : 'CLID-001463',
      clientName : 'Gadde Doondy',
      mobileNumber : 7799444476,
      Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
      joinedDate : 'Dec 11, 2023 - 05:28 PM',
      activity : 'Moderate',
      status : 'Booked Visit'
  },
  {
    clientId : 'CLID-001456',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb','2.5CR','2BHK'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001457',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001458',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001459',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001460',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001461',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001462',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001463',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
  {
    clientId : 'CLID-001456',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb','2.5CR','2BHK'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001457',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001458',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001459',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001460',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001461',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001462',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001463',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
  {
    clientId : 'CLID-001456',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb','2.5CR','2BHK'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001457',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001458',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001459',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001460',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001461',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001462',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Villa'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
{
    clientId : 'CLID-001463',
    clientName : 'Gadde Doondy',
    mobileNumber : 7799444476,
    Tags : ['Apartment', 'Villa', '3BHK', 'Kphb'],
    joinedDate : 'Dec 11, 2023 - 05:28 PM',
    activity : 'Moderate',
    status : 'Booked Visit'
},
]

export default function StickyHeadTable() {
  const [page, setPage] = useState(1); // Set initial page to 1
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Reset to the first page when changing rows per page
  };

  const paginatedData = ClientsData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Box border="1px solid #E1E4E5" padding="24px" borderRadius="15px">
      <Typography variant="h5" color="#293731" fontSize="20px" fontWeight={400}>
        Client List
      </Typography>
      <Paper sx={{ width: '100%', marginTop: '20px', background: '#F6F7F9' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={{ background: '#F6F7F9' }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', background: '#F6F7F9', border: 'none' }}>Client ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', background: '#F6F7F9', border: 'none' }}>Client Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', background: '#F6F7F9', border: 'none' }}>Mobile Number</TableCell>
                <TableCell sx={{ fontWeight: 'bold', background: '#F6F7F9', border: 'none' }}>Tags</TableCell>
                <TableCell sx={{ fontWeight: 'bold', background: '#F6F7F9', border: 'none' }}>
                  Joined Date <img src={filter_icon} alt="" style={{ display: 'inline', fontWeight: 'bold' }} />
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', background: '#F6F7F9', border: 'none' }}>
                  Activity <img src={filter_icon} alt="" style={{ display: 'inline', fontWeight: 'bold' }} />
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', background: '#F6F7F9', border: 'none' }}>
                  Status <img src={filter_icon} alt="" style={{ display: 'inline', fontWeight: 'bold' }} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: '#fff' }}>
              {paginatedData.map((client) => {
                const displayedTags = client.Tags.slice(0, 4);
                const remainingTagCount = client.Tags.length - 4;

                return (
                  <TableRow key={client.clientId} sx={{ height: '50px' }}>
                    <TableCell sx={{ border: 'none', width: '105px' }}>{client.clientId}</TableCell>
                    <TableCell sx={{ border: 'none', width: '150px' }}>{client.clientName}</TableCell>
                    <TableCell sx={{ border: 'none', width: '40px' }}>{client.mobileNumber}</TableCell>
                    <TableCell sx={{ border: 'none', width: '240px' }}>
                      {displayedTags.map((tag, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'inline-block',
                            backgroundColor: '#EBEBF3',
                            border: '1px solid #D6E2F1',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            marginRight: '4px',
                            fontSize: '14px',
                            fontWeight: '400',
                            color: '#001219',
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                      {remainingTagCount > 0 && (
                        <Box
                          sx={{
                            display: 'inline-block',
                            backgroundColor: '#EBEBF3',
                            border: '1px solid #D6E2F1',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            marginLeft: '4px',
                            fontSize: '14px',
                            fontWeight: '400',
                            color: '#001219',
                          }}
                        >
                          +{remainingTagCount}
                        </Box>
                      )}
                    </TableCell>
                    <TableCell sx={{ border: 'none', width: '130px' }}>{client.joinedDate}</TableCell>
                    <TableCell sx={{ color: '#FFA500', fontWeight: 'bold', border: 'none', width: '50px' }}>
                      <span style={{ backgroundColor: '#FFEED9', padding: '4px 12px', borderRadius: '8px' }}>
                        {client.activity === 'Moderate' && (
                          <Box
                            component="span"
                            sx={{
                              display: 'inline-block',
                              width: '8px',
                              height: '8px',
                              backgroundColor: '#FFA500',
                              borderRadius: '50%',
                              marginRight: '8px',
                            }}
                          />
                        )}
                        {client.activity}
                      </span>
                    </TableCell>
                    <TableCell sx={{ color: '#01576E', fontWeight: 'bold', border: 'none', width: '123px' }}>
                      <span
                        style={{
                          backgroundColor: '#E7EDF0',
                          padding: '4px 12px',
                          borderRadius: '8px',
                          border: '1px solid #42778A',
                        }}
                      >
                        {client.status}
                      </span>
                      <IconButton sx={{ width: '10px', paddingLeft: '30px' }} disableRipple={true}>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ width: '100%', height: '42px', paddingTop: '20px' }}>
        <Grid item width='254px'>
          <FormControl size="small">
            <Box style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
              <Typography fontSize={14} paddingRight='12px'>Show</Typography>
              <Select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                sx={{ width: '72px', height: '28px', borderRadius: '8px' }}
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
              <Typography fontSize={14} paddingLeft='12px'>Rows per page</Typography>
            </Box>
          </FormControl>
        </Grid>
        <Grid>
        <Pagination
            count={Math.ceil(ClientsData.length / rowsPerPage)} // Total pages
            page={page} // Current page
            onChange={handleChangePage} // Handler for page change
            shape="rounded" // Rounded corners
            variant="outlined" // Outlined variant
            sx={{
              '& .Mui-selected': {
                backgroundColor: '#10A3B5',
                color: '#fff', // White text for active page
                '&:hover': {
                  backgroundColor: '#10A3B5', 
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
