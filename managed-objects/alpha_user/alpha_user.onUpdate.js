/*// Replace with your actual endpoint (e.g., Svix or your custom backend)
var requestURL = "https://jyyv8g86nb.execute-api.us-east-1.amazonaws.com/default/testFunction";

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
//request.setEntity(JSON.stringify(body));

// Send request
//var response = httpClient.send(request).get();

// (Optional) Debug output
logger.info("Webhook response status: " + response.getStatus().getCode());
*/