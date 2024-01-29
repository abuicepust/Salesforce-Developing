import { LightningElement } from 'lwc';
import retriveAccounts from '@salesforce/apex/AccountController.getAccountMethod';

const columns = [
    { label: 'ID', fieldName: 'id' },
    { label: 'Name', fieldName: 'name', type: 'text' },
    { label: 'Email', fieldName: 'email', type: 'phone' },
    { label: 'Gender', fieldName: 'gender', type: 'text' },
    { label: 'Contact', fieldName: 'contact', type: 'text' },
    { label: 'Availability', fieldName: 'isActive', type: 'text' },
];

const columns2 = [
    { label: 'ID', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name', type: 'text' },
];

export default class FirstComponent extends LightningElement {
    name = 'AbuYousuf';
    age = '25';
    email = 'hello@gmail.com';
    phone = '01726669724';

    arr = [1,2,3,5,6];

    
    get big(){
        var a = 12;
        var b = 13;
        if(a > b){
            return a;
        }
    }

    // person = [
    //     {}
    // ];

    //This is for person static object
    person = [{
        id: 1,
        name: 'Shuvo',
        email: 'abcd@gmail.com',
        gender: 'male',
        contact: '0192782',
        isActive: true,
    },
    {
        id: 2,
        name: 'Me',
        email: 'abcd2@gmail.com',
        gender: 'male',
        contact: '01927822',
        isActive: false,
    },
    {
        id: 3,
        name: 'Meto',
        email: 'abcda2@gmail.com',
        gender: 'male',
        contact: '0192782s2',
        isActive: false,
    }
];

    data = [];
    columns = columns;

    data2 = [];
    columns2 = columns2;

    connectedCallback() {
        //const data = this.generateData({ amountOfRecords: 100 });
        this.data = this.person;

        // retriveAccounts().then((res) => {
        //     console.log(res);
        // });
        retriveAccounts().then((res)=>{
            //console.log(res);
            this.data2 = res;
        });
    }

}