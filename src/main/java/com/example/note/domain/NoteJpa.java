package com.example.note.domain;
import javax.persistence.*;

@Entity
public class NoteJpa {

    @Id
    @GeneratedValue
    private Long Number;

    private String title;
    @Lob
    private String detail;

    private String summary;

    public Long getNumber() {
        return Number;
    }

    public void setNumber(Long number) {
        Number = number;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}
