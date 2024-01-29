public with sharing class NewAccountTriggerHandler {
    public static void ifEmail(List<Account> accList){
        // acc.AnnualRevenue = 10000;
        //acc.Rating = 'Hot';
        for (Account acc : accList) {
            if (acc.Industry != null && acc.Industry.equals('Banking') && acc.AnnualRevenue == null) {
                acc.AnnualRevenue = 10000;
            }
        }
    }
}