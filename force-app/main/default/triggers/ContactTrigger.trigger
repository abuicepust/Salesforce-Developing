trigger ContactTrigger on Contact (after insert) {
    // List<Messaging.SingleEmailMessage> mailList =  new List<Messaging.SingleEmailMessage>();

    // for(Contact con: trigger.new){
    //     if(con.Email != null && con.LastName != null){
    //         Messaging.SingleEmailMessage newMail = new Messaging.SingleEmailMessage();

    //         // Specify who receives the email
    //         List<String> sendToAddressesList = new List<String>();

    //         sendToAddressesList.add(con.Email);

    //         newMail.setToAddresses(sendToAddressesList);
    //         // Set the attributes of the email.
    //         newMail.setSubject('Your contact detail have been added');

    //         String body = 'Hello ' + con.LastName + ', '; 
    //         body += 'Congratulations';
    //         body += 'Your details have been added and your contact has been created.';     
    //         newMail.setHtmlBody(body);
    //         mailList.add(newMail);
    //     }
    // }
    // // Send all emails in the list
    // Messaging.sendEmail(mailList);
}