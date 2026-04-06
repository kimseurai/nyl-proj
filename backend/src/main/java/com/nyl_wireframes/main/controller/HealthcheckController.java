package com.nyl_wireframes.main.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nyl_wireframes.main.model.dto.HealthcheckResponse;
import com.nyl_wireframes.main.service.HealthcheckService;

@RestController
public class HealthcheckController {
    private final HealthcheckService healthcheckService;

    public HealthcheckController(HealthcheckService healthcheckService) {
        this.healthcheckService = healthcheckService;
    }

    @GetMapping("/healthcheck")
    public ResponseEntity<HealthcheckResponse> healthcheck() {
        return ResponseEntity.ok(healthcheckService.check());
    }
    
}
