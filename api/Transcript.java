public class Transcript {
    private String audio_url;
    private String id;

    public String getId() {
        return id;
    }

    public void setID(String id) {
        this.id = id;
    }

    public String getAudio_url() {
        return audio_url;
    }

    public void setAudio_url(String audio_url) {
        this.audio_url = audio_url;//makes the json post file for geo_code might not be necessary
    }
}
