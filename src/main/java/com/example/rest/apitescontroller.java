package com.example.rest;

import com.example.note.service.NoteRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class apitescontroller {
    @GetMapping("api/demo")
    public String hello(){
        return "jeon hello";
    }

}
