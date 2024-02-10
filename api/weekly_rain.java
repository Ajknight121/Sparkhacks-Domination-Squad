import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;


public class weekly_rain {
    public static void main(String[] args, String yesterday_time, String today_time, double lattitude, double longitude) {
        try {
            String rain_url = (
                "https://api.meteomatics.com/" +
                yesterday_time +
                today_time +
                "/precip_24h:mm/" +
                Double.toString(lattitude) +
                "," +
                Double.toString(longitude) +
                "/json?api_key=" + 
                "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoidWljX3N0dWNrZXlfc2FtIiwiaXNzIjoibG9naW4ubWV0ZW9tYXRpY3MuY29tIiwiZXhwIjoxNzA3NTkwMjIxLCJzdWIiOiJhY2Nlc3MifQ.ELJpMbywkKnLl87AOhg12wrFAj63TFXfOg4ih54s2pB4Fw10WcKaUNuqT8X92OWf2u5KNItOmHw6sWgURYCi7A"
                ); // This is temporaty, need to get it from Rin_key

            URL url = new URL(rain_url);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "
                        + conn.getResponseCode());
            }
            
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("(weekly_rain.java) Exception in NetClientGet:- " + e);
        }
    }
}