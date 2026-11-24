-- =====================================================================
-- Al-Ahli Hospital (Hebron) - Online Appointment Booking System
-- Database schema for MySQL 8.0  (SRS section 12)
-- Run:  mysql -u root -p < database/schema.sql
-- =====================================================================

CREATE DATABASE IF NOT EXISTS ahli_appointments
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ahli_appointments;

-- Drop in reverse dependency order so the script can be re-run in development
DROP TABLE IF EXISTS appointment_requests;
DROP TABLE IF EXISTS clinic_working_hours;
DROP TABLE IF EXISTS clinics;
DROP TABLE IF EXISTS users;

-- ---------------------------------------------------------------------
-- users: patients and receptionists (BR-02, BR-03, NFR-03, NFR-06)
-- ---------------------------------------------------------------------
CREATE TABLE users (
  user_id        INT UNSIGNED     NOT NULL AUTO_INCREMENT,
  full_name      VARCHAR(100)     NOT NULL,
  phone          VARCHAR(10)      NOT NULL COMMENT 'Login identifier, format 05XXXXXXXX',
  email          VARCHAR(100)     NULL,
  date_of_birth  DATE             NULL     COMMENT 'Required for patients (checked by the API)',
  password_hash  VARCHAR(255)     NOT NULL COMMENT 'bcrypt hash, never plain text',
  role           ENUM('PATIENT', 'RECEPTIONIST') NOT NULL DEFAULT 'PATIENT',
  failed_logins  TINYINT UNSIGNED NOT NULL DEFAULT 0,
  locked_until   DATETIME         NULL     COMMENT 'Set after 5 failed logins (15 minutes)',
  created_at     DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id),
  UNIQUE KEY uq_users_phone (phone),
  CONSTRAINT chk_users_phone CHECK (phone REGEXP '^05[0-9]{8}$')
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- clinics: outpatient clinics shown to visitors (BR-07, BR-13)
-- ---------------------------------------------------------------------
CREATE TABLE clinics (
  clinic_id    INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name         VARCHAR(100) NOT NULL,
  description  VARCHAR(500) NULL,
  location     VARCHAR(150) NOT NULL,
  is_active    BOOLEAN      NOT NULL DEFAULT TRUE,
  created_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (clinic_id),
  UNIQUE KEY uq_clinics_name (name)
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- clinic_working_hours: one row per working day of a clinic (BR-06, BR-11)
-- day_of_week: 0 = Sunday, 1 = Monday, ... 6 = Saturday
-- ---------------------------------------------------------------------
CREATE TABLE clinic_working_hours (
  hours_id     INT UNSIGNED     NOT NULL AUTO_INCREMENT,
  clinic_id    INT UNSIGNED     NOT NULL,
  day_of_week  TINYINT UNSIGNED NOT NULL,
  start_time   TIME             NOT NULL,
  end_time     TIME             NOT NULL,
  PRIMARY KEY (hours_id),
  UNIQUE KEY uq_hours_clinic_day (clinic_id, day_of_week),
  CONSTRAINT fk_hours_clinic FOREIGN KEY (clinic_id)
    REFERENCES clinics (clinic_id) ON DELETE CASCADE,
  CONSTRAINT chk_hours_day   CHECK (day_of_week BETWEEN 0 AND 6),
  CONSTRAINT chk_hours_range CHECK (start_time < end_time)
) ENGINE = InnoDB;

-- ---------------------------------------------------------------------
-- appointment_requests: one row per patient request (BR-04 to BR-12)
-- request_number is filled in the same transaction right after INSERT:
--   CONCAT('AH-', YEAR(created_at), '-', LPAD(request_id, 5, '0'))
-- ---------------------------------------------------------------------
CREATE TABLE appointment_requests (
  request_id        INT UNSIGNED NOT NULL AUTO_INCREMENT,
  request_number    VARCHAR(15)  NULL,
  patient_id        INT UNSIGNED NOT NULL,
  clinic_id         INT UNSIGNED NOT NULL,
  preferred_date    DATE         NOT NULL,
  notes             VARCHAR(300) NULL,
  status            ENUM('PENDING', 'CONFIRMED', 'REJECTED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
  appointment_time  TIME         NULL COMMENT 'Set when CONFIRMED',
  staff_note        VARCHAR(300) NULL COMMENT 'Optional note when CONFIRMED',
  rejection_reason  VARCHAR(300) NULL COMMENT 'Required when REJECTED',
  reviewed_by       INT UNSIGNED NULL COMMENT 'Receptionist who decided',
  reviewed_at       DATETIME     NULL,
  cancelled_at      DATETIME     NULL,
  created_at        DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at        DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (request_id),
  UNIQUE KEY uq_requests_number (request_number),
  KEY idx_requests_patient     (patient_id, created_at),
  KEY idx_requests_status      (status, created_at),
  KEY idx_requests_clinic_date (clinic_id, preferred_date),
  CONSTRAINT fk_requests_patient  FOREIGN KEY (patient_id)  REFERENCES users (user_id),
  CONSTRAINT fk_requests_clinic   FOREIGN KEY (clinic_id)   REFERENCES clinics (clinic_id),
  CONSTRAINT fk_requests_reviewer FOREIGN KEY (reviewed_by) REFERENCES users (user_id),
  CONSTRAINT chk_requests_confirmed CHECK (status <> 'CONFIRMED' OR appointment_time IS NOT NULL),
  CONSTRAINT chk_requests_rejected  CHECK (status <> 'REJECTED'  OR rejection_reason IS NOT NULL)
) ENGINE = InnoDB;
