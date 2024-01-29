import { LightningElement,track } from 'lwc';
import createAnContact from '@salesforce/apex/CreateNewAccount.insertContact';

export default class ParentLWC extends LightningElement {
    name = "";
    email = "";
    mobileNumber = "";
    childkey = "";

    //@track values = [{}]
    @track children = [];
    getName(event){
        this.name = event.target.value;
    }
    getEmail(event){
        this.email = event.target.value;
    }
    getPhone(event){
        this.mobileNumber = event.target.value;
    }
    ReceiveData(event){
        const key = event.detail.childkey;
        console.log(event.detail.isShow,key);
        
        if(event.detail.isShow === false){
            
            console.log("Yes");
            this.children.forEach((child, i) => {
                if(child.values.childkey === undefined && key == child.key){
                    this.children.splice(i,1);
                    return;
                }
                if(child.values.childkey == key){
                    this.children.splice(i,1);
                    return;
                }
            });
            return;
        }
        const updatedChildren = this.children.map((child) =>{
            if(child.key === key){
                //console.log("Hello");
                return {...child, values: event.detail};
            }
            return child;
        })
        this.children = updatedChildren;
    }    
    handleSubmit(){ 
        //console.log(this.children.length);
        createAnContact({lastName:this.name,email: this.email, mobile: this.mobileNumber})
        .then((res) =>{
            console.log("Success");
        })
        .catch((err) =>{
            console.log("Something went wrong in Child",err);
        })

        this.children.forEach(child => {
            createAnContact({lastName:child.values.lastName,email: child.values.email, mobile: child.values.mobileNumber})
            .then((res) =>{
                console.log("Success 2");
            })
            .catch((err) =>{
                console.log("Something went wrong in Child",err);
            })
        });
    }
    handleClick(){
        let key = Date.now().toString();
        this.children = [...this.children,{key, values:{ name:'', email: '', mobileNumber: ''}}];        
    }
}