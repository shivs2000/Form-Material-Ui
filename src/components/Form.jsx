import React,{useState,useEffect} from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import { makeStyles,createTheme,ThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import ReactPhoneInput from 'react-phone-input-material-ui';

import { Container, 
  Grid,
  TextField,
  FormControlLabel,
  Radio, RadioGroup,
  Input,
  InputLabel,
  OutlinedInput,
  Button
 


} from '@material-ui/core';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}








const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    color:'black',
    marginBottom:0
  },
  // main:{
  //   backgroundColor:'#adacaa'
  // },
  Tab:{
    indicatorColor:{
      backgroundColor:'#5b2fad',
    },
    textColor:{
      backgroundColor:'#5b2fad',
    },
  },
  table: {
    maxWidth: 900,
    overflow: 'hidden',
  },
  tableContainer:{
    maxWidth: 900,
    margin:30
  }
}));

function TabPanel(){

  return (
<div>

</div>
  );
}

export default function Form() {
  const classes = useStyles();
 const [Row,SetRow]=useState([]);
  const [value, setValue] = useState(0);
  const [text,Settext]=useState(null);
  const [email,Setemail]=useState(null);
  const [name,Setname]=useState(null);
  const [number,Setnumber]=useState(null);
  

  const [category,SetCategory]=useState('Good');
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(text &&name &&number &&email &&category){
        let obj={
          name:name,
          text:text,
          number:number,
          email:email,
          category:category
        }
        const data=localStorage.getItem('data');
        let arr=JSON.parse(data);
       arr.push(obj);
       localStorage.setItem('data',JSON.stringify(arr));
       setOpen(true);

    }
  }
  const tableClick=(e)=>{
  const data=localStorage.getItem('data');
    let Rowdata=JSON.parse(data);
    SetRow(Rowdata);
}
useEffect(() => {
  
 localStorage.setItem('data',JSON.stringify([{ name:'jake',
  text:'nice',
  number:'232343243',
  email:'udehfuhe@gmail.com',
  category:'good'}]))
}, [])



  return (
    
     <>
      
      <AppBar position="static" className={classes.root}>
        <Tabs value={value} 
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="simple tabs example">
          <Tab index={0} label="Form"/>
          <Tab label="Table" index={1} onClick={tableClick}/>
        </Tabs>
        <TabPanel/>
      </AppBar>
        {

          !value && (


            <div className="main">
          <div className="content" >
            <p className="contentHeading">
            Aromatic Bar
            </p>
            <p className="para">
            We are committed to providing you with the best
            dining experience possible, so we welcome your comments. Please fill
            out this questionnaire. Thank you.
            </p>
            
            <div className="formDiv">
            <form   autoComplete="off" onSubmit={handleSubmit}>
  
  
 

            <Grid container spacing={10}>
              <Grid  item md={6} className={classes.formField}>
                <div>
                <Typography variant="overline">
                  Text Field
                  </Typography>
              
                       <TextField  
          
                       fullWidth
                     variant='outlined'
  
                     required
                      size="small"
                      onChange={e => Settext(e.target.value)}
                      className={classes.field}
                          />
                   <Typography variant="overline">
                  Phone NUmber
                  </Typography>
                  
               
<PhoneInput
  country={'in'}
  
   onChange={(value,country,e, formattedValue)=>{
     
    
  const str=`+${country.dialCode}-${value}`
  Setnumber( str)
  
   }}
  containerStyle={{
    border: "2px solid lightgrey",
    borderRadius:'4px',
    
  }}
  inputStyle={{
    background: "white",
    border: "0px solid lightgrey",
    width:'100%'
  }}
  dropdownClass="dropdown"
  buttonStyle={{
    backgroundColor:'white',
    border:'0px '
    

  }}
 
/>
                  </div>
                
                </Grid>

                <Grid  item md={6} className={classes.formField}>
                <div>
                <Typography variant="overline">
                  Email Field
                  </Typography>
                  <TextField  
          
            fullWidth
             variant='outlined'
  
             required
             size="small"
             onChange={e => Setemail(e.target.value)}
             className={classes.field}
            />
             <Typography variant="overline">
                  Radio Buttons
                  </Typography>
              <RadioGroup row value={category} onChange={(e)=>SetCategory(e.target.value)} >
              <FormControlLabel  value="Excellent" control={<Radio color="primary"/>} label="Excellent"/>
              <FormControlLabel  value="Good" control={<Radio color="primary"/>} label="Good"/>
              <FormControlLabel  value="Fair" control={<Radio color="primary"/>} label="Fair"/>
              <FormControlLabel  value="Bad" control={<Radio color="primary"/>} label="Bad"/>
              
           </RadioGroup>
                  </div>
                
                </Grid>
                
            </Grid>
           






            {/* second form */}
           
  
  
 

            <Grid container spacing={10}>
              

                <Grid  item md={6} className={classes.formField}>
                <div>
                <Typography variant="overline">
                  Name
                  </Typography>
              <TextField  
          
            fullWidth
             variant='outlined'
  
             required
             size="small"
             onChange={e => Setname(e.target.value)}
             className={classes.field}
            />
               
                  </div>
                
                </Grid>
                
                  
            </Grid>
            <div className="buttonHolder">
                  <div>
                    <Button variant="contained" type="submit" color="secondary" >
                        Submit
                    </Button>
                  </div>
             
            </div>
            
            
            </form>
            <div className={classes.root}>
     
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Submitted!!
        </Alert>
      </Snackbar>
      
    </div>
            </div>
            
            </div>
            
            
          </div>
          )
         
        }
        {
           value===1 && (
             <>
             <h2 style={{margin:'20px'}}>All Feedback</h2>
            <TableContainer component={Paper} className={classes.tableContainer} >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow className="tableHeading">
            
                  <TableCell className="dataCells" align="center">Form Name</TableCell>
                  <TableCell className="dataCells" align="center">Text Field</TableCell>
                  <TableCell className="dataCells" align="center">Phone Field</TableCell>
                  <TableCell className="dataCells" align="center">Email Field</TableCell>
                  <TableCell className="dataCells" align="center">Radio</TableCell>
                  <TableCell className="dataCells" align="center">Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Row.map((row,index) => (
                  <TableRow key={index}>
                    <TableCell  className="dataCells" align="center">Aromatic Bar</TableCell>
                    <TableCell  className="dataCells" align="center">{row.text}</TableCell>
                    <TableCell className="dataCells" align="center">{row.number}</TableCell>
                    <TableCell className="dataCells" align="center">{row.email}</TableCell>
                    <TableCell className="dataCells" align="center">{row.category}</TableCell>
                    <TableCell className="dataCells" align="center">{row.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </>
          )
        }
      </>
      
      
    
  );
}
