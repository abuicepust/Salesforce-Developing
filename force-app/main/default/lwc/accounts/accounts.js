import { LightningElement, api, track } from 'lwc';
import createAnAccount from '@salesforce/apex/CreateNewAccount.CreateAcc';
import createAnContact from '@salesforce/apex/CreateNewAccount.insertContact';
export default class Accounts extends LightningElement {

    //persons = [];
    @track errorMessage ="";
    @track success ="";
    @api recordId ="";
    teamName ="";
    details ="";
    cName1 ="";
    email1 ="";
    mobileNumber1 ="";
    cName2 ="";
    email2 ="";
    mobileNumber2 ="";
    cName3 ="";
    email3 ="";
    mobileNumber3 ="";
    cName4 ="";
    email4 ="";
    mobileNumber4 ="";

    teamsName(evt){
        this.teamName = evt.target.value;
    }
    teamDetails(evt){
        this.details = evt.target.value;
    }    
    contactName1(evt){
        this.cName1 = evt.target.value;
        //console.log(this.cName1);
        //p1.name = evt.target.value;
    }
    Email1(evt){
        this.email1 = evt.target.value;
        //console.log(this.email1);
        //p1.email = evt.target.value;

    }
    phoneNumber1(evt){
        this.mobileNumber1 = evt.target.value;
        //console.log(this.mobileNumber1);
        //p1.phone = evt.target.value;

    }
    contactName2(evt){
        this.cName2 = evt.target.value;
        //console.log(this.cName2);
        //p1.name = evt.target.value;
    }
    Email2(evt){
        this.email2 = evt.target.value;
        //console.log(this.email2);
        //p1.email = evt.target.value;

    }
    phoneNumber2(evt){
        this.mobileNumber2 = evt.target.value;
        //console.log(this.mobileNumber2);
        //p1.phone = evt.target.value;

    }
    contactName3(evt){
        this.cName3 = evt.target.value;
        //console.log(this.cName3);
        //p1.name = evt.target.value;
    }
    Email3(evt){
        this.email3 = evt.target.value;
        //console.log(this.email3);
        //p1.email = evt.target.value;

    }
    phoneNumber3(evt){
        this.mobileNumber3 = evt.target.value;
        //console.log(this.mobileNumber3);
        //p1.phone = evt.target.value;
    }
    contactName4(evt){
        this.cName4 = evt.target.value;
        console.log(this.cName4);
        //p1.name = evt.target.value;
    }
    Email4(evt){
        this.email4 = evt.target.value;
        //console.log(this.email4);
        //p1.email = evt.target.value;

    }
    phoneNumber4(evt){
        this.mobileNumber4 = evt.target.value;
        //console.log(this.mobileNumber4);
        //p1.phone = evt.target.value;
    }

   
    handleChange(){
        
            createAnAccount({accName:this.teamName, des:this.details})
            .then((result) =>{
                if((result) == null){
                    this.errorMessage="Account name exists";                    
                }else{                    
                    this.recordId = result;
                    //this.accId = res;
                    //alert("This is alert 1",recordId);
                    this.success = "Account Created";
                    console.log(this.recordId);
                    if(this.email1 != this.email2 && this.email1 != this.email3 && this.email1 != this.email4){
                        createAnContact({Id:this.recordId, lastName:this.cName1, email:this.email1, mobile:this.mobileNumber1})
                        .then((res) =>{
                            //alert("This is alert 2",this.recordId);
                            if(res == false){
                                this.errorMessage = "Email1 exists";
                            }else{
                                this.success = "Contact1 Created Successfully";
                            }
                        })
                        .catch(err =>{
                            console.log("ContactCreateError",err);
                        })
                    }else{
                        this.errorMessage = "Enter different Email at Field 1";
                    }
                    if(this.email2 != this.email1 && this.email2 !=this.email3 && this.email2 != this.email4){
                        createAnContact({Id:this.recordId, lastName:this.cName2, email:this.email2, mobile:this.mobileNumber2})
                        .then((res) =>{
                            //alert("This is alert 2",this.recordId);
                            if(res == false){
                                this.errorMessage = "Email2 exists";
                            }else{
                                this.success = "Contact2 Created Successfully";
                            }
                        })
                        .catch(err =>{
                            console.log("ContactCreateError",err);
                        })
                    }else{
                        this.errorMessage = "Enter different Email at Field 2";
                    }
                    if(this.email3 != this.email1 && this.email3 != this.email2 && this.email3 != this.email4){
                        createAnContact({Id:this.recordId, lastName:this.cName3, email:this.email3, mobile:this.mobileNumber3})
                        .then((res) =>{
                            //alert("This is alert 2",this.recordId);
                            if(res == false || this.email3==this.email1 || this.email3==this.email2 || this.email3==this.email4){
                                this.errorMessage = "Email3 exists";
                            }else{
                                this.success = "Contact3 Created Successfully";
                            }
                        })
                        .catch(err =>{
                            console.log("ContactCreateError",err);
                        })
                    }else{
                        this.errorMessage = "Enter different Email at Field 3";
                    }
                    if(this.email4 != this.email1 && this.email4 != this.email2 && this.email4 != this.email3){
                        createAnContact({Id:this.recordId, lastName:this.cName4, email:this.email4, mobile:this.mobileNumber4})
                        .then((res) =>{
                            //alert("This is alert 2",this.recordId);
                            if(res == false){
                                this.errorMessage = "Email4 exists";
                            }else{
                                this.success = "Contact4 Created Successfully";
                            }
                        })
                        .catch(err =>{
                            console.log("ContactCreateError",err);
                        })
                    }else{
                        this.errorMessage = "Enter different Email at Field 4";
                    }
                }
            })
            .catch((err) =>{
                console.log("AccountError",err);
            })  
                
    } 
      
}