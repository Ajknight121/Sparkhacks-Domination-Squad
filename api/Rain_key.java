import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Base64;



public class Rain_key {
    private static void main(String[] args) throws Exception {
        String username = "uic_stuckey_sam";
        String password = "Slx0Ra7jR1";
        String auth = username + ":" + password;
        byte[] encodedAuth = Base64.getEncoder().encode(auth.getBytes());
        String authHeaderValue = "Basic " + new String(encodedAuth);

        URL url = new URL("https://login.meteomatics.com/api/v1/token");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Authorization", authHeaderValue);

        int responseCode = connection.getResponseCode();
        BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }
        in.close();
        connection.disconnect();

        // Assuming the response is JSON and contains an access_token field
        String token = extractTokenFromJson(content.toString());
        System.out.println("Token: " + token);
    }

    public static String extractTokenFromJson(String jsonString) {
        // Implement JSON parsing logic here to extract the access_token value
        // This requires a JSON parsing library such as org.json or Jackson
        return ""; // Placeholder return value
    }
}

