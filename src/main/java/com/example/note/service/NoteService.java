package com.example.note.service;

import com.example.note.domain.NoteJpa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoteService {

    private final NoteRepository noteRepository;


    @Autowired
    public  NoteService(NoteRepository noteRepository){
        this.noteRepository = noteRepository;
    }


    public void insertNote(NoteJpa notejpa){
        noteRepository.save(notejpa);
    }

    public List<NoteJpa> findlistAll(){
      return  noteRepository.findAll();
    }


    public Optional<NoteJpa> findnote(Long id){
        return  noteRepository.findById(id);
    }
}
