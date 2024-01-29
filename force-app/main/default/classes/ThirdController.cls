public with sharing class ThirdController {
    @AuraEnabled
    public static List<Contact> getContact(){
        return [SELECT Name, Title, AccountId FROM Contact LIMIT 10];
    }
    // @AuraEnabled
    // public static List<Contact> getContactList() {
    //     return [SELECT Id, FirstName, LastName, Title, Phone, Email FROM Contact LIMIT 10];
    // }
    public static void insertContact(){

    }
    public static void getAccount(){
        
    }
}