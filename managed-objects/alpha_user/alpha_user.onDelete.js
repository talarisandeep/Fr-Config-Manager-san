/*(function () {
var requestURL = "https://webhook-test.com/27ed38cab1a23b4480669dc6c400f77f";
var request = new org.forgerock.http.protocol.Request();
request.setUri(requestURL);
request.setMethod("POST");
//request.getHeaders().add("Content-Type", "application/json;");
//request.setEntity(JSON.stringify({"username": "sss"}));

 var response = httpClient.send(request).get();
 
//logger.message("User REST Call. Status: " + response.getStatus() + ", Body: " + response.getEntity().getString());
})();

/*(function() {
    var requestURL = "https://webhook-test.com/27ed38cab1a23b4480669dc6c400f77f";
    var request = new org.forgerock.http.protocol.Request();
    request.setUri(requestURL);
    request.setMethod("POST");

    // Always set proper headers
    request.getHeaders().add("Content-Type", "application/json");

    // JSON body
    var payload = {
        "username": "sss"
    };
    request.setEntity(payload);

    try {
        var response = httpClient.send(request).get();
        logger.info("User REST Call. Status: " + response.getStatus().getCode() + ", Body: " + response.getEntity().getString());
    } catch (e) {
        logger.error("Webhook call failed: " + e);
    }
})();*/


// Replace with your actual endpoint (e.g., Svix or your custom backend)


/*var fr = JavaImporter(
    org.forgerock.openam.auth.node.api.Action);
    
var request = new org.forgerock.http.protocol.Request();
request.setMethod("POST");
request.setUri("https://webhook-test.com/46e4b3dc7dbd47237b424b4d8c6dda4b");

 
request.getHeaders().add("Content-Type", "application/json");

// Define the payload
var body = {
    "name":"Faizan",
    "email": "test@gmail.com"  
};

 
request.setEntity(JSON.stringify(body));

 var response = httpClient.send(request).get();
 
 if (responseCode === 200) {
    action = fr.Action.goTo("true").build();
} else {
    action = fr.Action.goTo("false").build();
}
 
 */
 
 
 
 // Replace with your actual endpoint (e.g., Svix or your custom backend)
/*var requestURL = "https://play.svix.com/in/e_nhht9yeTsXvCRF5v5j38Pp591yI/";

var request = new org.forgerock.http.protocol.Request();
request.setMethod("POST");
request.setUri(requestURL);

// Set headers
request.getHeaders().add("Content-Type", "application/json");

// Define the payload
var body = {
    
        "username": "Faizan",  // Assuming 'user' object is available
        "email": "test@gmail.com"      // Or user.getAttribute("email")
        
    
};

// Set the JSON body
request.setEntity(JSON.stringify(body));

// Send request
var response = org.forgerock.http.client.HttpClient
.send(request).get();

// (Optional) Debug output
//logger.info("Webhook response status: " + response.getStatus().getCode());


*/


// Replace with your actual endpoint (e.g., Svix or your custom backend)


// Define the URL to send the webhook
/*var requestURL = "https://jyyv8g86nb.execute-api.us-east-1.amazonaws.com/default/testFunction";

// Try to send the webhook request


// Create new HTTP request
    var request = new org.forgerock.http.protocol.Request();
    request.setMethod("POST");
    request.setUri(requestURL);

    // Set headers
    request.getHeaders().add("Content-Type", "application/json");

    // Create the body object
    var body = {
        "username": "Faizan",
        "email": "test@gmail.com"
    };

    // Set request body
    request.setEntity(JSON.stringify(body));

    // Send the request
   // var response = httpClient.send(request);

    // Log status and body (optional)
    logger.info("Webhook response status: " + response.getStatus().getCode());
    logger.info("Webhook response body: " + response.getEntity().getString());
 
 
*/



 


   
