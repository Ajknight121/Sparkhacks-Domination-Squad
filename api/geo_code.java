import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class geo_code{
    public static void main(String[] args) {
        try {
            String rain_url = (
                "https://maps.googleapis.com/maps/api/geocode/json?" +
                "address=1600+Amphitheatre+Parkway,+Mountain+View," +
                "+CA&key=" 
                + "ae62075c8ac9cdc7770d0006dce529c629095ea"
                );

            URL url = new URL(rain_url);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Accept", "application/json");
            if (conn.getResponseCode() != 200) {
                throw new RuntimeException("Failed : HTTP Error code : "+ conn.getResponseCode());
            }

                String inline = "";
    Scanner scanner = new Scanner(url.openStream());
  
   //Write all the JSON data into a string using a scanner
    while (scanner.hasNext()) {
       inline += scanner.nextLine();
    }
    

    
    //Close the scanner
    scanner.close();
    System.out.println("67676776", scanner);
    
            
            conn.disconnect();

        } catch (Exception e) {
            System.out.println("(geo_code.java) Exception in NetClientGet:- " + e);
        }
    }
}