package com.example.note.service;

import com.example.note.domain.NoteJpa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<NoteJpa, Long> {
}
