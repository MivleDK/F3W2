package rest;

import com.google.gson.Gson;
import dto.ChuckNorrisDTO;
import dto.DadDTO;
import dto.MyDTO;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;
import utils.HttpUtils;
import webscraper.TagCounter;
import webscraper.TagDTO;
import webscraper.Tester;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
public class JokeResource {

    @Context
    private UriInfo context;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() throws IOException {
        Gson gson = new Gson();
        String chuck = HttpUtils.fetchData("https://api.chucknorris.io/jokes/random");
        ChuckNorrisDTO chuckDTO = gson.fromJson(chuck, ChuckNorrisDTO.class);

        String dad = HttpUtils.fetchData("https://icanhazdadjoke.com");
        DadDTO dadDTO = gson.fromJson(dad, DadDTO.class);

        MyDTO combinedDTO = new MyDTO(chuckDTO, dadDTO);

//This is what your endpoint should return       
        String combinedJSON = gson.toJson(combinedDTO);
        return combinedJSON;
    }

    @Path("sequental")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getTagsSequental() {
        long startTime = System.nanoTime();
        List<TagCounter> dataFeched = Tester.runSequental();
        long endTime = System.nanoTime() - startTime;
        return TagDTO.getTagsAsJson("Sequental fetching", dataFeched, endTime);
    }

    @Path("parallel")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getTagsParrallel() throws NotImplementedException, InterruptedException, ExecutionException {
        long startTime = System.nanoTime();
        List<TagDTO> dataFeched = Tester.runParrallel();
        long endTime = System.nanoTime() - startTime;
        return TagDTO.getTagsAsJsonPara("Parralel fetching", dataFeched, endTime);
        //return "[Make me return results, fetched by a parrallel strategy";
    }

}
