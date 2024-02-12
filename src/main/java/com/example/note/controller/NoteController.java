package com.example.note.controller;

import com.example.note.domain.NoteJpa;
import com.example.note.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class NoteController {

    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping("/notejpa/insert")
    public void createNote(@RequestBody NoteJpa note) {
        noteService.insertNote(note);
    }

    @GetMapping("/notejpa/findById/{id}")
    public ResponseEntity<NoteJpa> findNotejpa(@PathVariable Long id) {
        Optional<NoteJpa>  result=  noteService.findnote(id);

        return  result
                .map(note -> ResponseEntity.ok().body(note))
                .orElseGet(() -> ResponseEntity.notFound().build());

    }



    @GetMapping("/notejpa/findall")
    public List<NoteJpa> findlist(){

        return noteService.findlistAll();
    }

}
