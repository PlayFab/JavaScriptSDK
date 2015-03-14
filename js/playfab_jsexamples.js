/**
 * Created by markval on 3/13/15.
 */

var exampleNames = ["LoginWithPlayFab","GetLeaderboard"];

function getExample(examplename,username,password,session){

    var username = username ? username:"test11";
    var password = password ? password:"test11";
    var session = session;

    var example = "";
    switch(examplename){
        case (exampleNames[0]) :
            example = 'settings.title_id = "8D34";';
            example += '\nvar requestExample = {"Username":"'+username+'","Password":"'+password+'"};';
            example += '\nexports.client.LoginWithPlayFab(requestExample,printResult);';
        break;
        case (exampleNames[1]) :
            example = 'settings.session_ticket = "'+session+'";';
            example += '\nvar requestExample = {"StatisticName":"Score","MaxResultsCount":"50"};';
            example += '\nexports.client.GetLeaderboard(requestExample,printResult);';
            break;

    }
    return example = example ? example : "Invalid example name";
}
