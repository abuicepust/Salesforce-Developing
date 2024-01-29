import { LightningElement, api } from 'lwc';
import createCont from '@salesforce/apex/AccountController.createContact';

export default class CreateContact extends LightningElement {
    LastName = "";
    @api recordId;
    myValue = "Initial Value";
    handleChange(evt) {
        //console.log("Current value of the input: " + evt.target.value);
        this.LastName = evt.target.value;
        createCont({Id:this.recordId, lastName:this.LastName})
        .then((res)=>{
            console.log("Created");
        })
        .catch((err)=>{
            console.log("Error");
        })
    }
    

    connectedCallback(){
        console.log('record I', this.recordId);
        
    }


}