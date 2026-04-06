package com.nyl_wireframes.main.model.dto;

public class HealthcheckResponse {
    private Integer id;
    private String status;
    private String checkedAt;

    public HealthcheckResponse(Integer id, String status, String checkedAt) {
        this.id = id;
        this.status = status;
        this.checkedAt = checkedAt;
    }

    public Integer getId() { return id; }
    public String getStatus() { return status; }
    public String getCheckedAt() { return checkedAt; }
}
