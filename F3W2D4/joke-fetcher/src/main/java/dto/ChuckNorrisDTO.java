package dto;

import entities.ChuckNorris;

/**
 *
 * @author Mickl
 */
public class ChuckNorrisDTO {

    private String url;
    private String value;
    private ChuckNorris chuck;

    public ChuckNorrisDTO() {
    }

    public ChuckNorrisDTO(ChuckNorris chuck) {
        this.url = chuck.getUrl();
        this.value = chuck.getValue();
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public ChuckNorris getChuck() {
        return chuck;
    }

    public void setChuck(ChuckNorris chuck) {
        this.chuck = chuck;
    }

}
