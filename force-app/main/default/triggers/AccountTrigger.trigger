trigger AccountTrigger on Account (before insert, before update) {
    // for (Account acc : Trigger.new) {
    //     if (acc.Industry != null && acc.Industry.equals('Banking') && acc.AnnualRevenue == null) {
    //         // acc.AnnualRevenue = 10000;
    //         // acc.Rating = 'Hot';
    //         AccountTriggerHandler.setAnnualRevenue(acc);
    //     }
    // }
    AccountTriggerHandler.setAnnualRevenue(Trigger.new);
}