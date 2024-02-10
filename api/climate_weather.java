import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.util.Map;
import java.net.URL;

public class climate_weather {
    private String lattidude, longitude;  

    public static void main(String[] args) {
        // try {
        //     String climate_url = (
        //         "http://climateapi.scottpinkelman.com/api/v1/location/" +
        //         "[" + lattidude + "]" +
        //         "/" +
        //         "[" + longitude + "]"
        //         //"/json?api_key=" dont think we need this either
        //         //climate_key() we will see about this one
        //         );

        //     URL url = new URL(climate_url);
        //     HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        //     conn.setRequestMethod("GET");
        //     conn.setRequestProperty("Accept", "application/json");
        //     if (conn.getResponseCode() != 200) {
        //         throw new RuntimeException("Failed : HTTP Error code : "
        //                 + conn.getResponseCode());
        //     }
        //     //add something here that sends info about the climate zone back to the user
        //     conn.disconnect();

        // } catch (Exception e) {
        //     System.out.println("(climate_weather.java) Exception in NetClientGet:- " + e);
        // }
    }

    public void SetCoordinates(String latte, String longt){
        lattidude = latte;
        longitude = longt;
    }

    public String getClimate(){
        if (longitude != "" && lattidude != ""){ // see if the coords are empty
            try {
                String climate_url = (
                    "http://climateapi.scottpinkelman.com/api/v1/location/" +
                    "[" + lattidude + "]" +
                    "/" +
                    "[" + longitude + "]"
                    //"/json?api_key=" dont think we need this either
                    //climate_key() we will see about this one
                    );

                URL url = new URL(climate_url);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");
                conn.setRequestProperty("Accept", "application/json");
                if (conn.getResponseCode() != 200) {
                    throw new RuntimeException("Failed : HTTP Error code : "
                            + conn.getResponseCode());
                }
                //add something here that sends info about the climate zone back to the user
                InputStream input = (InputStream) conn.getInputStream();

                Map<String, String> content;
                
                String result = "Something something";
                conn.disconnect();
                return result;

            } catch (Exception e) {
                System.out.println("(climate_weather.java) Exception in NetClientGet:- " + e);
            }
        }
        // in case stuff happends
        return "";
    }


}