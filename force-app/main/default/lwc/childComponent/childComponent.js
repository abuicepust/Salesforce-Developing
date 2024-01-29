import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    //show=true;
    @api childkey = "";
    name = "";
    email = "";
    mobileNumber = "";
    vanish = false;
    handleVanish(){
        this.vanish = true;
        handleInput(null);
    }
    handleInput(evt){
        if(evt){
            if(evt.target.label === 'Name'){
                this.name = evt.target.value;
            }
            if(evt.target.label === 'Email'){
                this.email = evt.target.value;
            }
            if(evt.target.label === 'Phone'){
                this.mobileNumber = evt.target.value;
            }
            const sendevent = new CustomEvent('getdata', {detail: {
                name: this.name,
                email: this.email,
                mobileNumber: this.mobileNumber,
                childkey : this.childkey,
                vanish : this.vanish,
            }});
            this.dispatchEvent(sendevent);
        }
        
        //console.log("Hello",this.name, this.email,this.mobileNumber);
    }
}