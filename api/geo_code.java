import java.net.http.HttpRequest;

public class RestApiTutorial{
    public static void main(String[] args) throws Exception {
        
        Transcript transcript = new Transcript();
        transcript.setAudio_url(null);
        Gson gson = new Gson();
        String jsonRequest = gson.toJson(transcript);

        HttpRequest postRequest = HttpRequest.newBuilder()
        .uri(new URI("url"))
        .header("authorization", Constants.api_key)
        .POST(BodyPublishers.ofString(
            jsonrequest//might not be needed json
            ))
        .build();//post request

        HttpClient httpClient = HttpClient.newHttpClient();
        
        HttpResponse<string> postResponse = httpClient.send(postRequest, BodyHandlers.ofString())
    
        postResponse.body();

        transcript = gson.fromJson(postResponse.body(), Transcript.class);
        transcript.getID()

        HttpRequest getRequest = HttpRequest.newBuilder()
        .uri(new URI("url" + .getID))
        .header("authorization", Constants.api_key)
        .Get(BodyPublishers.ofString(
            jsonrequest//might not be needed json
            ))
        .build();//get request
    }
    //have to add in the gson dependencies 14:00 https://www.youtube.com/watch?v=9oq7Y8n1t00&ab_channel=CodingwithJohn
    // have to look at websites for specific documentation how to hide api key
}