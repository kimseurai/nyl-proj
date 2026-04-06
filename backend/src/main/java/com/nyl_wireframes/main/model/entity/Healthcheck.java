package com.nyl_wireframes.main.model.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Healthcheck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String status;

    @Column(name = "checked_at", nullable = false)
    private String checkedAt;

    public Healthcheck() {}

    public Healthcheck(String status, String checkedAt) {
        this.status = status;
        this.checkedAt = checkedAt;
    }
    
    public Integer getId() { return id; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getCheckedAt() { return checkedAt; }
    public void   setCheckedAt(String checkedAt) { this.checkedAt = checkedAt; }
    
}
