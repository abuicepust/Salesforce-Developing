# Getting Started with Salesforce.com

In this repository you can find some Apex classes, LWCs, AURA apps, Triggers, Parent-Child relationship and so On. 

## Tasks


- Task-1: 

Senario:
Scenario: Creating a Sales Team for House Selling
A determined leader is eager to assemble a high-performing team to sell houses within a house-selling organization. To kick-start this initiative, the leader initiates the process by creating an account for the team and adding four team members. Each team member's contact information is collected, ensuring uniqueness of email addresses. Once the team is successfully registered, confirmation emails are sent to all team members.
Steps:
1. Account Creation:
   - The leader navigates to the organization's team creation page and provides details for creating an account.
   - Information includes the team name, leader's name, and relevant account details.
2. Contact Information Entry - Team Members:
   - After creating the account, the leader proceeds to enter contact information for each team member.
   - The system prompts the leader to enter details for the first team member, including name, email, and phone number.
   - Email uniqueness is enforced to ensure each team member has a distinct email address.
3. Repeat for Additional Team Members:
   - The leader repeats the process for the remaining three team members, entering unique contact details for each.
   - The system performs email uniqueness checks for each team member's email address.
4. Team Registration:
   - Upon successful entry of account and contact information for all team members, the system registers the team within the organization.
   - The account is associated with each team member, forming a cohesive sales team.
5. Confirmation Emails:
   - Following successful team registration, confirmation emails are automatically sent to all team members.
   - The emails contain details about the newly formed team, including the team name, leader's information, and a welcome message.


- My-Work-1:

The below HTML code was created for the UI, which will take the name of the account and the details of the account.

```bash
<div><br>
<label class="slds-var-m-around_medium" for="tname">Enter Team's Name:</label><br>
<input class="slds-var-m-around_medium" type="text" value="" onchange={teamsName}/><br>
<input class="slds-var-m-around_medium" type="text" value="" onchange={teamDetails}/><br>
</div>
```



The below HTML code was created for the UI, which will take the contact's Last Name which is required to create the Contact, 

```bash
<p>
For creating Contact
</p>
<div>
<h1 class="slds-text-heading_large">Fill up for contact 1</h1>
<label class="slds-var-m-around_medium" for="cname">Enter Contact Name: </label>
<input class="slds-var-m-around_medium" type="text" value="" onchange={contactName1}/>
<label class="slds-var-m-around_medium" for="email">Enter Email: </label>
<input class="slds-var-m-around_medium" type="email" value="" onchange={Email1}/>
<label class="slds-var-m-around_medium" for="text">Enter Phone Number: </label>
<input class="slds-var-m-around_medium" type="text" value="" onchange={phoneNumber1}/>
</div>

```

**For creating 4 contact I’ve created the above UI for 4 times.

Importing the Lightning Element, API, Track and Apex methods to the JavaScript file

```bash
import { LightningElement, api, track } from 'lwc';
import createAnAccount from '@salesforce/apex/CreateNewAccount.CreateAcc';
import createAnContact from '@salesforce/apex/CreateNewAccount.insertContact';

```

Creating all the required variables like this

```bash
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
```
Handling all the methods used in the HTML file

```bash
teamsName(evt){
        this.teamName = evt.target.value;
    }
```
After clicking the SUBMIT button, the handleChange method is executed
```bash
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
                    createAnContact({Id:this.recordId, lastName:this.cName1, email:this.email1, mobile:this.mobileNumber1})
                    .then((res) =>{
                        //alert("This is alert 2",this.recordId);
                        if(res == false){
                            this.errorMessage = "Email1 exist";
                        }else{
                            this.success = "Contact1 Created Successfully";
                        }
                    })
                    .catch(err =>{
                        console.log("ContactCreateError",err);
                    })
                    createAnContact({Id:this.recordId, lastName:this.cName2, email:this.email2, mobile:this.mobileNumber2})
                    .then((res) =>{
                        //alert("This is alert 2",this.recordId);
                        if(res == false){
                            this.errorMessage = "Email2 exist";
                        }else{
                            this.success = "Contact2 Created Successfully";
                        }
                    })
                    .catch(err =>{
                        console.log("ContactCreateError",err);
                    })
                    createAnContact({Id:this.recordId, lastName:this.cName3, email:this.email3, mobile:this.mobileNumber3})
                    .then((res) =>{
                        //alert("This is alert 2",this.recordId);
                        if(res == false){
                            this.errorMessage = "Email3 exist";
                        }else{
                            this.success = "Contact3 Created Successfully";
                        }
                    })
                    .catch(err =>{
                        console.log("ContactCreateError",err);
                    })
                    createAnContact({Id:this.recordId, lastName:this.cName4, email:this.email4, mobile:this.mobileNumber4})
                    .then((res) =>{
                        //alert("This is alert 2",this.recordId);
                        if(res == false){
                            this.errorMessage = "Email4 exist";
                        }else{
                            this.success = "Contact4 Created Successfully";
                        }
                    })
                    .catch(err =>{
                        console.log("ContactCreateError",err);
                    })
                }
            })
            .catch((err) =>{
                console.log("AccountError",err);
            })
        
    } 
}
```

The Apex method below was created for:
- It’ll check whether the account's name is unique or not
- If it’s unique, then the aoouncList will be empty, and hence it’ll execute the if statement
- If statement creates the account
- Else statement return null string

```bash
@AuraEnabled
public static String CreateAcc(String accName, String des){
    system.debug('This is'+accName +des);
    List<Account> accountList = [SELECT Name from Account WHERE Name=:accName];
    system.debug(accountList);
    if(accountList.isEmpty()){
    Account acc = new Account();
    acc.Name = accName;
    acc.Description = des;

    insert acc;
    system.debug(acc.Id);
    return acc.Id;
    }else{
    return null;
    }
}
```

This Apex method below was created for:
- Checking whether the email is unique or not
- If it’s unique, then it’ll execute the if statement and, hence, create a contact under the account ID it gets.

```bash
@AuraEnabled
public static boolean insertContact(String Id, String lastName, String email, String mobile){
    system.debug('Contact Data'+Id +lastName +email +mobile);
    List<Contact> contact = [SELECT Email FROM Contact WHERE Email=:email];
    if(contact.isEmpty()){
    Contact con = new Contact();
    con.AccountId = Id;
    con.LastName = lastName;
    con.Email = email;
    con.MobilePhone = mobile;

    insert con;
    return true;
    }else{
    return false;
    }
}

```
**The below Trigger method will send Email to those contact automatically after successful insertion of the contact**

```bash
trigger ContactTrigger on Contact (after insert) {
     List<Messaging.SingleEmailMessage> mailList =  new     
List<Messaging.SingleEmailMessage>();
     for(Contact con: trigger.new){
         if(con.Email != null && con.LastName != null){
             Messaging.SingleEmailMessage newMail = new Messaging.SingleEmailMessage();

             // Specify who receives the email
            List<String> sendToAddressesList = new List<String>();

             sendToAddressesList.add(con.Email);

             newMail.setToAddresses(sendToAddressesList);
             // Set the attributes of the email.
             newMail.setSubject('Your contact detail have been added');

             String body = 'Hello ' + con.LastName + ', '; 
             body += 'Congratulations';
            body += 'Your details have been added and your contact has been created.';     
             newMail.setHtmlBody(body);
             mailList.add(newMail);
       }
     }
     Send all emails in the list
     Messaging.sendEmail(mailList);
}
```

***Verdict of this work: After Clicking the SUBMIT button If the account name is unique, then the account is created, and if all the contact emails are unique, then the contact will be created. After successful contact insertion, a successful message will automatically be sent to all of the successfully created contacts; in this case, it’s four contacts.***


-Task-2:
Create a form, add “+” button, which will create another form of same type, add “-” button, which will remove one form of same type.

**Approach:**
At first, I created Parent LWC, added some input fields, a “+” button, and a “Submit” button.
Thereafter, I created Child LWC, same as Parent LWC I created some input fields. a “-” button.
Furthermore, I connected the Parent LWC with Child LWC.
Lastly, whenever the “+” button or “-” button is clicked, the input field will change automatically to it’s defined values.
