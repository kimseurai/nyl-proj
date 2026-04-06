package com.nyl_wireframes.main.service;

import org.springframework.stereotype.Service;

import com.nyl_wireframes.main.model.entity.Healthcheck;
import com.nyl_wireframes.main.model.dto.HealthcheckResponse;
import com.nyl_wireframes.main.repository.HealthcheckRepository;

import java.time.Instant;

@Service
public class HealthcheckService {
    private final HealthcheckRepository healthcheckRepository;

    public HealthcheckService(HealthcheckRepository healthcheckRepository) {
        this.healthcheckRepository = healthcheckRepository;
    }

    public HealthcheckResponse check() {
        Healthcheck hc = new Healthcheck("OK", Instant.now().toString());
        healthcheckRepository.save(hc);
        return new HealthcheckResponse(hc.getId(), hc.getStatus(), hc.getCheckedAt());
    }
    
}
