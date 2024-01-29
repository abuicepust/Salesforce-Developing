public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccountMethod() {
        List<Account> listAcc = [SELECT name FROM Account LIMIT 10];
        System.debug(listAcc);
        return listAcc;
    }
    @AuraEnabled
    public static void createContact(String Id, String lastName){
        Contact con = new Contact();
        con.LastName = lastName;
        con.AccountId = Id;

        insert con;        
    }

}