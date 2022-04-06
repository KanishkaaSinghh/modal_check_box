import { useEffect , useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import $ from "jquery";
import './modal.css'
import RadioButtons  from './RadioButtons'; 

let selectedData = [];

const style = {
  transform: 'translate(75%, 10%)',
  width: 500,
  height:500,
  bgcolor:  '#0dcaf0',
  p: 4,
  overflow: "scroll",
  color:'white'
  


};

  const daaata = {
    "developer": [
      "ApexClass",
      "ApexPage",
      "ApexComponent",
      "ApexTrigger",
      "LightningComponentBundle",
      "AuraDefinitionBundle",
      "CustomLabels",
      "CustomMetadata"
    ],
    "admin": [
      "CustomPermission",
      "CustomObject",
      "CustomField",
      "RecordType",
      "ValidationRule",
      "ListView",
      "CustomTab",
      "CustomApplication",
      "Flow"
    ]
  }
  


export default function BasicModal() {
  const [data, setData] = useState(daaata);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('admin');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const headers = Object.keys(data);


/////////////////////////////////////////////////////////onClick Functions////////////////////////////////////////////
  const clickhandler = (x) => {
   
    if (selectedData.includes(x)) {
      selectedData = selectedData.filter(name => {
        return name !== x
      })
    } else {
      selectedData.push(x)
    }
    console.log("selectedData", selectedData)
    
  }
  
  const handleSelected = () => {

    console.log("selectedData :: ", selectedData )
  } 
  
  
  const listItems = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];
  
  //////////////////////////////////////for controlling the select all functionality////////////////////////////////////////
  
  $("body").on("click", "#selectall", function () {

    if (this.checked) {
      $(".checkboxall").prop('checked', true);
    } else {
      $(".checkboxall").prop('checked', false);
    }
  })
  
  $("body").on("click", ".checkboxall", function () {

    if (!this.checked) {
      $("#selectall").prop('checked', false);
    }
  })
  $("body").on("click", ".radiobtn_admin", function () {
    if (this.checked) {
      $("#selectall").prop('checked', false);
    }
  })
  $("body").on("click", ".radiobtn_dev", function () {
    if (this.checked) {
      $("#selectall").prop('checked', false);
    }
  })


  /////////////////////  for changing RADIO BTN WILL RESET THE CHOICE OF OTHER RADIO BTN////////////////////////////////
  
  $("body").on("click", ".radiobtn_admin", function () {
    if (this.checked) {
      $(".checkadmin").prop('checked', false);
      $(".checkdev").prop('checked', true);
    }
  })
  $("body").on("click", ".radiobtn_dev", function () {
    if (this.checked) {
      $(".checkdev").prop('checked', false);
      $(".checkadmin").prop('checked', true);
    }
  })
  


  useEffect(() => {
    selectedData=[]
    if (selectedRadioBtn === 'admin') {
      headers.map(type => {
        if (type === "admin") {
          data[type].map(name => {
            selectedData.push(name)
          })
        }
      })
    } else {
      headers.map(type => {
        if (type === "developer") {
          data[type].map(name => {
            selectedData.push(name)
          })
        }
      })
    }

  }, [selectedRadioBtn]);


  
  console.log("selectedData", selectedData)
  

  const setSelected = () => {

    selectedData = [];
    daaata.admin.map(x => {
      selectedData.push(x)
    })
    daaata.developer.map(x => {
      selectedData.push(x)
    })


    }


  
    return (
      <div>
      
        <Button onClick={handleOpen}>Modal</Button>
        <Modal
          className='modal-height '
          id="popup-modal"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        
        >
          <Box className='boxes' sx={style}>
            
        
            <Typography id="modal-modal-title" variant="h5" component="h5" sx={{ mt: 2 }}>
              MetaData Selector
              <hr />
            </Typography>
            <div>
              <RadioButtons selectedRadioBtn={selectedRadioBtn} setSelectedRadioBtn={setSelectedRadioBtn} />
            </div>
            <Typography id="modal-modal-description" variant="h6" sx={{ mt: 2.7 }}>
              <input onClick={(daaata) => setSelected("all")} type="checkbox" id="selectall" className="css-checkbox " name="selectall" />
              <label for="selectall">Select All</label>
            </Typography>
          
            {
                     
              selectedRadioBtn === 'admin' ? (
                <>
                  {
                    daaata.admin.map((x) =>
                
                      <div>
                        <Typography id="modal-modal-description" sx={{ mt: 2.3 }}>
                      
                          <input
                            id={x} name={x}  onClick={() => clickhandler(x)}  className="checkboxall checkadmin " type="checkbox" defaultChecked />
                          <label for={x}> {x}</label>
                        </Typography>
                      </div>
                    )
                  }
  
                
                  
                  {
                    daaata.developer.map((x) =>
                      <div>
                        <Typography id="modal-modal-description" sx={{ mt: 2.3 }}>
                        
                          <input
                            id={x} name={x} onClick={() => clickhandler(x)}  className="checkboxall checkdev" type="checkbox" />
                          <label for={x}> {x}</label>
                        </Typography>
                      </div>
                    
                    )
                  }
                </>
              ) : (
                <>
                  {
                    daaata.developer.map((x) =>
                      <div>
                        <Typography id="modal-modal-description" sx={{ mt: 2.3 }}>
                          <input
                            id={x} name={x} onClick={() => clickhandler(x)}  className="checkboxall checkdev" type="checkbox" defaultChecked />
                          <label for={x}> {x}</label>
                        </Typography>
                      </div>
                    )
                  }
                   
                  {
                    daaata.admin.map((x) =>
                      <div>
                        <Typography  id="modal-modal-description" sx={{ mt: 2.3 }}>
                        
                          <input
                            id={x} name={x} onClick={() => clickhandler(x)} className="checkboxall checkadmin" type="checkbox" />
                          <label for={x}> {x}</label>
                        </Typography>
                      </div>
                           
                    )
                  }
                </>
              )
            }
            <div className='Modalbuttons'>
              <button className='Nextbtn btn btn-outline-dark' onClick={handleSelected} > Next</button>
              <button className='closebtn btn btn-outline-dark' onClick={handleClose}>Back</button>

            </div>
          </Box>


        </Modal>
      
      </div>
    );
  }

