import { LightningElement, track, api } from 'lwc';
import getContact from '@salesforce/apex/ThirdController.getContact';
import Last_Name from "@salesforce/schema/Contact.LastName";
//import getContactList from '@salesforce/apex/ThirdController.getContactList';

const columns = [
    { label: 'Opportunity name', fieldName: 'OpportunityName', type: 'text' },
    {
        label: 'Confidence',
        fieldName: 'Confidence',
        type: 'percent',
        cellAttributes: {
            iconName: { fieldName: 'TrendIcon' },
            iconPosition: 'right',
        },
    },
    {
        label: 'Amount',
        fieldName: 'Amount',
        type: 'currency',
        typeAttributes: { currencyCode: 'EUR', step: '0.001' },
    },
    { label: 'Contact Email', fieldName: 'Contact', type: 'email' },
    { label: 'Contact Phone', fieldName: 'Phone', type: 'phone' },
];

const data = [
    {
        Id: 'a',
        OpportunityName: 'Cloudhub',
        Confidence: 0.2,
        Amount: 25000,
        Contact: 'jrogers@cloudhub.com',
        Phone: '2352235235',
        TrendIcon: 'utility:down',
    },
    {
        Id: 'b',
        OpportunityName: 'Quip',
        Confidence: 0.78,
        Amount: 740000,
        Contact: 'quipy@quip.com',
        Phone: '2352235235',
        TrendIcon: 'utility:up',
    },
];
const form  = document.getElementById('signup');

// form.addEventListener('submit', (event) => {
//     // handle the form data
//     //console.log(this.form);
// });




export default class ThirdComponent extends LightningElement {
    @track data = data;
    @track columns = columns;

    @api recordId;

    // getSelectedName(event) {
    //     const selectedRows = event.detail.selectedRows;
    //     // Display that fieldName of the selected rows
    //     // for (let i = 0; i < selectedRows.length; i++) {
    //     //     alert('You selected: ' + selectedRows[i].OpportunityName);
    //     // }
    // }
    data2 = [];
    columns2 = [
        {label: 'ID', fieldName: 'Id',},
        {label: 'Client Name', fieldName: 'Name',},
        {label: 'Title', fieldName: 'Title',},
        {label: 'Accout Type', fieldName: 'AccountId',},

        
    ];
    connectedCallback(){
        getContact().then(res => {
            this.data2 = res;
        })

        //console.log(data);
        console.log('record ID--->', this.recordId);
        
    }

    myFields = [Last_Name];
    handleAccountCreated(){
    }

    myValue = "initial value";

  handleChange(evt) {
    console.log("Current value of the input: " + evt.target.value);
  }
    
    
}