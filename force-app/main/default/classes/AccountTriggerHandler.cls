public with sharing class AccountTriggerHandler {
    // public AccountTriggerHandler() {

    // }
    public static void setAnnualRevenue(List<Account> accList){
        // acc.AnnualRevenue = 10000;
        //acc.Rating = 'Hot';
        for (Account acc : accList) {
            if (acc.Industry != null && acc.Industry.equals('Banking') && acc.AnnualRevenue == null) {
                acc.AnnualRevenue = 10000;
            }
        }
    }
}