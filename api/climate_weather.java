import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;


public class climate {
    public static void main(String[] args) {
        try {
            private String rain_url = (
                "http://climateapi.scottpinkelman.com/api/v1/location/" +
                "[" + lattitude + "]" +
                "/" +
                "[" + longitude + "]" +
                "/json?api_key=" +
                rain_api_key()
                )

            URL url = new URL(rain_url)
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "
                        + conn.getResponseCode());
            }
            
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
    }
}