package com.nyl_wireframes.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nyl_wireframes.main.model.entity.Healthcheck;

public interface HealthcheckRepository extends JpaRepository<Healthcheck, Integer> { }
