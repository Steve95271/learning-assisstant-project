package com.steve.learning_assisstant.model.respond;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class Topic {

    private Long id;
    private String title;
    private String description;
    private String lastUpdated;
    private Integer filesCount;
    private Integer conversationsCount;
    private List<String> filePreviews;

}
