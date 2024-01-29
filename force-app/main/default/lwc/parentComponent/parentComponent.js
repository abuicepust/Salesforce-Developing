import { LightningElement,track } from 'lwc';

export default class ParentComponent extends LightningElement {
    name = "";
    email = "";
    mobileNumber = "";
    nameF = "";
    //show = false;
    @track children = [];
    getName(event){
        this.name = event.target.value;
        console.log(this.name);
    }
    getEmail(event){
        this.email = event.target.value;
        console.log(this.email);
    }
    getPhone(event){
        this.mobileNumber = event.target.value;
        console.log(this.mobileNumber);
    }
    handleShow(){
        //this.show = evt.target.value;
        //this.show = true;
        var parentkey = Date.now().toString();
        this.children = [...this.children,{parentkey, values: {name:"", email:"", mobileNumber:""}}];

        //console.log("Childre", this.children[0].parentkey);
    }
    handleSubmit(){
        // this.children.forEach(element => {
        //     console.log("Hello",element.name);
        // });
        console.log("Length ",this.children.length);
        this.children.forEach((element) => {
            console.log("Name:", element.values.name);
            console.log("Email:", element.values.email);
            console.log("Mobile Number:", element.values.mobileNumber);
        });
    }
    dataReceived(event){
        
        //console.log("Hello",event.detail.childkey);
        const key = event.detail.childkey;


        //console.log("Hello",element.name);
        if(event.detail.vanish === true){            
            console.log("Yes");
            this.children.forEach((child, i) => {
                if(child.values.childkey === undefined && key == child.key){
                    this.children.splice(i,1);
                    return;
                }
                // if(child.values.childkey == key){
                //     this.children.splice(i,1);
                //     return;
                // }
            });
            return;
        }
        const updatedChildren = this.children.map((child) =>{
            if(child.parentkey === key){
                //console.log("Hello");
                return {...child, values: event.detail};
            }

            return child;
        })
        this.children = updatedChildren;
    }
}

//