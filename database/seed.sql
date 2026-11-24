-- =====================================================================
-- Development seed data. Run after schema.sql:
--   mysql -u root -p < database/seed.sql
-- Clinic hours below are SAMPLE data for testing, not the hospital's real schedule.
-- Change both passwords before any real deployment.
-- =====================================================================
USE ahli_appointments;

-- Receptionist account (BR-03: staff accounts are created here, never via the website)
--   mobile: 0590000001   password: Reception@2026
-- Demo patient for testing
--   mobile: 0599000001   password: Patient@2026
INSERT INTO users (full_name, phone, email, date_of_birth, password_hash, role) VALUES
  ('موظف الاستقبال', '0590000001', NULL, NULL,
   '$2b$10$ZnKVCSTyTu8HUN/F9Ak5qO.trcVdHVdyo/g0nG1DKQNEuZHZn3Ahu', 'RECEPTIONIST'),
  ('مريض تجريبي', '0599000001', NULL, '1995-05-20',
   '$2b$10$EIELQ.DDZI.gdTKDSFXsKu1Zt1emsKWeZwEPRnByvQfSr9gaemrxG', 'PATIENT');

INSERT INTO clinics (name, description, location) VALUES
  ('عيادة الباطنية (Internal Medicine)',            'تشخيص ومتابعة أمراض الباطنية العامة',        'قسم العيادات الخارجية - الطابق الأرضي'),
  ('عيادة الأطفال (Pediatrics)',                     'متابعة صحة الأطفال وعلاج أمراضهم',          'قسم العيادات الخارجية - الطابق الأرضي'),
  ('عيادة النسائية والتوليد (Obstetrics & Gynecology)', 'متابعة الحمل وأمراض النساء',               'قسم العيادات الخارجية - الطابق الأرضي'),
  ('عيادة العظام (Orthopedics)',                     'إصابات وأمراض العظام والمفاصل',             'قسم العيادات الخارجية - الطابق الأرضي'),
  ('عيادة القلب (Cardiology)',                       'فحص ومتابعة أمراض القلب والشرايين',          'قسم العيادات الخارجية - الطابق الأرضي'),
  ('عيادة الأنف والأذن والحنجرة (ENT)',               'أمراض الأنف والأذن والحنجرة',               'قسم العيادات الخارجية - الطابق الأرضي'),
  ('عيادة الجلدية (Dermatology)',                    'أمراض الجلد والشعر',                        'قسم العيادات الخارجية - الطابق الأرضي'),
  ('عيادة الجراحة العامة (General Surgery)',          'الاستشارات الجراحية والمتابعة بعد العمليات', 'قسم العيادات الخارجية - الطابق الأرضي');

-- day_of_week: 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 6 = Saturday
-- Clinics 1-4: Saturday to Thursday, 08:00-14:00
INSERT INTO clinic_working_hours (clinic_id, day_of_week, start_time, end_time)
SELECT c.clinic_id, d.day_of_week, '08:00:00', '14:00:00'
FROM clinics c
JOIN (SELECT 6 AS day_of_week UNION ALL SELECT 0 UNION ALL SELECT 1
      UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4) d
WHERE c.clinic_id BETWEEN 1 AND 4;

-- Clinics 5-8: three days a week, 09:00-13:00
INSERT INTO clinic_working_hours (clinic_id, day_of_week, start_time, end_time) VALUES
  (5, 0, '09:00:00', '13:00:00'), (5, 2, '09:00:00', '13:00:00'), (5, 4, '09:00:00', '13:00:00'),
  (6, 6, '09:00:00', '13:00:00'), (6, 1, '09:00:00', '13:00:00'), (6, 3, '09:00:00', '13:00:00'),
  (7, 0, '09:00:00', '13:00:00'), (7, 2, '09:00:00', '13:00:00'), (7, 4, '09:00:00', '13:00:00'),
  (8, 6, '09:00:00', '13:00:00'), (8, 1, '09:00:00', '13:00:00'), (8, 3, '09:00:00', '13:00:00');
