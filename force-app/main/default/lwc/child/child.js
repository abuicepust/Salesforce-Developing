import { LightningElement, api,track } from 'lwc';

export default class Child extends LightningElement {
    @track error ="";
    @api childkey;
    lastName = "";
    email = "";
    mobileNumber = "";
    isShow = true;
    handleInput(evt){
        if(evt){
            if(evt.target.label === 'Name'){
                this.lastName = evt.target.value;
            }
            if(evt.target.label === 'Email'){
                this.email = evt.target.value;
            }
            if(evt.target.label === 'Phone'){
                this.mobileNumber = evt.target.value;
            }
        }
        const sendevent = new CustomEvent('getdata', {detail: {
            lastName: this.lastName,
            email: this.email,
            mobileNumber: this.mobileNumber,
            childkey : this.childkey,
            isShow : this.isShow,
        }});
        this.dispatchEvent(sendevent);
    }
    removeButton(){
        this.isShow = false;
        this.handleInput(null);
    }
}