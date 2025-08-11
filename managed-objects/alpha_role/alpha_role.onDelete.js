/*// Replace with your actual webhook URL
var requestURL = "https://webhook-test.com/46e4b3dc7dbd47237b424b4d8c6dda4b";

// Create the HTTP POST request
var request = new org.forgerock.http.protocol.Request();
request.setMethod("POST");
request.setUri(requestURL);
request.getHeaders().add("Content-Type", "application/json");

// Prepare the payload from the resource object (new user)
var payload = {
  event: eventName,                    // e.g., "user.created"
  userId: resource._id,                // The user’s internal ID
  username: resource.userName || "",   // May be null if not set
  email: resource.email || "",         // May be null if not set
  createdAt: new Date().toISOString()
};

// Log the payload
logger.info("Event Hook Triggered: " + eventName);
logger.info("Payload: " + JSON.stringify(payload));

// Set the request body
request.setEntity(JSON.stringify(payload));

// Send the request and handle the response
try {
    var response = httpClient.send(request).get();
    logger.info("Webhook POST response status: " + response.getStatus().getCode());
} catch (e) {
    logger.error("Error sending webhook: " + e);
}
*/


/*(function(httpClient, logger) {
    try {
        var requestURL = "https://webhook-test.com/9a990568b8da90b35afb2eb83c0e1119";

        var request = new org.forgerock.http.protocol.Request();
        request.setMethod("POST");
        request.setUri(requestURL);

        request.getHeaders().add("Content-Type", "application/json");

        var body = {
            "username": "Faizan",
            "email": "test@gmail.com"
        };

        request.setEntity(JSON.stringify(body));

        var response = httpClient.send(request).get();
        logger.info("Webhook response status: " + response.getStatus().getCode());
    } catch (e) {
        logger.error("Webhook failed: " + e);
    }
})(httpClient, logger);
*/
