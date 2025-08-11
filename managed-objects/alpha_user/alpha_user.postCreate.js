
// PATCH the user to update custom_description after creation
 //openidm.patch("managed/alpha_user/" + object._id, null, [{"operation": "replace","field": "/accountStatus","value": "approve"}]);
 
 //openidm.patch("managed/alpha_user/" + object._id, null, [{"operation": "replace","field": "/description","value": "Test description"}]);

 //openidm.patch("managed/alpha_user/" + object._id, null, [{"operation": "replace","field": "/custom_lifecycleState","value": "Pending"}]);

// openidm.patch("managed/alpha_user/" + object._id, null, [{"operation": "replace","field": "/custom_testfield","value": "Testing"}]);
 
 
   
   //  var url = "http://ec2-13-235-90-29.ap-south-1.compute.amazonaws.com:8080/test";

      //  var request = new org.forgerock.http.protocol.Request();
     //   request.setMethod("GET");
      //  request.setUri(url);

        // Use the global pre-injected httpClient — do NOT create a new one
      //   var response = httpClient.send(request).get();
             // comment
 /* var triggerConfig = {
    externalUserEndpoint: "demo-sync"
  }
  
  var response = openidm.action(
    "endpoint/" + triggerConfig.externalUserEndpoint,
    "action",
    { operation: "create", userProfile: object }
  );
  
  
  */
  
  
  
// ForgeRock IDM server-side Javascript (Rhino)


/*var URL = Packages.java.net.URL;
var HttpURLConnection = Packages.java.net.HttpURLConnection;

var url = new URL("https://webhook-test.com/2d971e023517e014424f85b91a70d861");
var connection = url.openConnection();
connection.setRequestMethod("POST");
connection.setRequestProperty("Content-Type", "application/json");
connection.setDoOutput(true);

var OutputStreamWriter = Packages.java.io.OutputStreamWriter;
var writer = new OutputStreamWriter(connection.getOutputStream());
writer.write('{"username":"test","password":"faizan"}');
writer.close();

var responseCode = connection.getResponseCode();
logger.info("HTTP Response code: " + responseCode);

*/
logger.info("HTTP Sandeep Response code: " );
