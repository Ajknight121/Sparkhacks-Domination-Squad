import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class geo_code{
    public static void main(String[] args, int zipCode) {
        try {
            String rain_url = (
                "https://maps.googleapis.com/maps/api/geocode/json?postal_code=" +
                String.valueOf(zipCode) +
                "CA&key=" 
                + "ae62075c8ac9cdc7770d0006dce529c629095ea"
                );

            URL url = new URL(rain_url);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "+ conn.getResponseCode());
            }
            
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("Exception in NetClientGet:- " + e);
        }
    }
}