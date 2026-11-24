# services/

Business logic lives here, one file per resource. Controllers call services; services call models.
Every business rule from the SRS (BR-01 to BR-13) is checked in this layer, so all clients get the same rules.

Planned files:

| File | Rules it enforces |
| --- | --- |
| `auth.service.js` | BR-02, BR-03, NFR-03 (bcrypt), NFR-06 (lockout after 5 failed logins) |
| `clinics.service.js` | BR-07, BR-13 |
| `appointments.service.js` | BR-04 to BR-12, NFR-09 (one transaction per change) |
