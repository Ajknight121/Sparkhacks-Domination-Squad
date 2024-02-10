import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class geo_code.java{
    public static void main(String[] args, String yesterday_time, String today_time, double lattitude, double longitude,) {
        try {
            private String rain_url = (
                "https://api.meteomatics.com/" +
                yesterday_time +
                today_time +
                "/precip_24h:mm/" +
                Double.toString(lattitude) +
                "," +
                Double.toString(longitude) +
                "/json?api_key=" +
                Rain_key.
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