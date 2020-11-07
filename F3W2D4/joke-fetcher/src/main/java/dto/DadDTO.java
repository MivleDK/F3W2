package dto;

import entities.Dad;

/**
 *
 * @author Mickl
 */
public class DadDTO {

    private String joke;
    private String url = "https://icanhazdadjoke.com";

    public DadDTO(Dad dad, String url) {
        this.joke = dad.getJoke();
        this.url = url;
    }

    public DadDTO() {
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
