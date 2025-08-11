/**
 * Ping AIC Event Hook or Scripted Node – invoke external API
 */

/*try {
  // Extract the newly created user object
  var user = object;  // In Event Hook scripts, 'object' holds the new user

  // Construct JSON payload
  var payload = {
    id: user._id,
    username: user.userName,
    email: user.mail,
    givenName: user.givenName,
    familyName: user.sn
  };

  // Build HTTP request options
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  };

  // Send the request synchronously
  var response = httpClient.send("https://webhook-test.com/27ed38cab1a23b4480669dc6c400f77f", options).get();

  // Log result
  if (response.status === 200) {
    logger.info("User-deleted webhook sent successfully. Response: {}", response.text());
  } else {
    logger.error("Failed webhook. Status: {}, Body: {}", response.status, response.text());
  }

} catch (e) {
  logger.error("Error sending user-delete webhook: {}", e.toString());
}

*/





// ForgeRock Event Hook Script (Managed User - onCreate / onUpdate)

//var http = org.forgerock.http; // or "forgerock/http" depending on the context


/*(function () {
    // Define the webhook URL
var webhookUrl = "https://webhook-test.com/2ec199d03defb57488bd2393176bedb5";
var httpClient = new org.forgerock.http.Client();
    // Prepare the payload
    var payload = {
       
        userName: "faizanAhmad",
        email: "faizanhafiz928@gmail.com"  
         
    };
    
      var requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
         
    },
    body: JSON.stringify(payload)
    }
    // Create HTTP request
     var request = new org.forgerock.http.protocol.Request();
    request.setMethod("POST");
    request.setUri(webhookUrl);
    request.getHeaders().add("Content-Type", "application/json");
    request.setEntity(JSON.stringify(payload));
 
    // Send HTTP request
   logger.error("Api triggered");
    
       var response = httpClient.send(request).get();
     
})();
*/



 var triggerConfig = {
    externalUserEndpoint: "gen-token"
  }
  
  var response = openidm.action(
    "endpoint/" + triggerConfig.externalUserEndpoint,
    "action",
    { operation: "create", userProfile: object }
  );






