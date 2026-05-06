package com.example.project.service;

import com.example.project.dto.DataDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApiService {

    private static final String API_URL = "https://data.europa.eu/api/hub/search/search?q=";
    @Autowired
    private RestTemplate restTemplate;

    public List<DataDTO> getData(String query){
        String url = API_URL + query;
        String json = restTemplate.getForObject(url, String.class);

        ObjectMapper mapper = new ObjectMapper();
        List<DataDTO> list = new ArrayList<>();

        try {
            JsonNode root = mapper.readTree(json);
            JsonNode results = root.get("result").path("results");

            for (JsonNode node : results) {

                DataDTO dto = new DataDTO();
                JsonNode publisher = node.path("publisher");
                dto.setTitle(node.path("title").path("en").asText());
                dto.setDescription(node.path("description").path("de").asText());

                dto.setHomepage(publisher.path("homepage").asText());
                System.out.println(publisher.path("homepage").toPrettyString());

                list.add(dto);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
