public with sharing class CreateNewAccount {
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
    @AuraEnabled
    public static boolean insertContact( String lastName, String email, String mobile){
        system.debug('Contact Data'+Id +lastName +email +mobile);
        List<Contact> contact = [SELECT Email FROM Contact WHERE Email=:email];
        if(contact.isEmpty()){
            Contact con = new Contact();
            //String Id,con.AccountId = Id;
            con.LastName = lastName;
            con.Email = email;
            con.MobilePhone = mobile;

            insert con;
            return true;
        }else{
            return false;
        }
    }    
}