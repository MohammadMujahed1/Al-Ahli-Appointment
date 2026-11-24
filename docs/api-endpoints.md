# REST API endpoints (planned)

Base URL: `/api/v1`. Full request and response examples are in the SRS, section 14.
Protected endpoints need the header `Authorization: Bearer <JWT>` (token valid 8 hours).
Until a story is implemented, its endpoint answers `501 NOT_IMPLEMENTED`.

| # | Method | Path | Access | FR | Story |
| --- | --- | --- | --- | --- | --- |
| 1 | POST | `/auth/register` | Public | FR-01 | US-01 |
| 2 | POST | `/auth/login` | Public | FR-02 | US-02 |
| 3 | GET | `/auth/me` | Patient, Receptionist | FR-02 | US-02 |
| 4 | GET | `/clinics?search=&day=` | Public | FR-04, FR-05 | US-04, US-05 |
| 5 | GET | `/clinics/:clinicId` | Public | FR-04, FR-06 | US-04 |
| 6 | POST | `/appointments` | Patient | FR-06 | US-06 |
| 7 | GET | `/appointments/mine` | Patient | FR-07 | US-07 |
| 8 | GET | `/appointments/:requestNumber` | Patient (own), Receptionist | FR-08 | US-08 |
| 9 | PATCH | `/appointments/:requestNumber/cancel` | Patient (own) | FR-09 | US-09 |
| 10 | GET | `/admin/appointments?status=&clinicId=&date=&q=&page=` | Receptionist | FR-10 | US-10 |
| 11 | PATCH | `/admin/appointments/:requestNumber/confirm` | Receptionist | FR-11 | US-11 |
| 12 | PATCH | `/admin/appointments/:requestNumber/reject` | Receptionist | FR-12 | US-12 |
| 13 | GET | `/admin/clinics` | Receptionist | FR-13 | US-13 |
| 14 | POST | `/admin/clinics` | Receptionist | FR-13 | US-13 |
| 15 | PUT | `/admin/clinics/:clinicId` | Receptionist | FR-13 | US-13 |
| 16 | PATCH | `/admin/clinics/:clinicId/status` | Receptionist | FR-14 | US-14 |

`GET /api/v1/health` answers `{ "status": "ok" }`.

## Error format

```json
{ "error": { "code": "VALIDATION_ERROR", "message": "Invalid request",
  "details": [ { "field": "preferredDate", "message": "The clinic does not work on this day" } ] } }
```

| Status | Codes |
| --- | --- |
| 400 | `VALIDATION_ERROR`, `INVALID_JSON` |
| 401 | `UNAUTHENTICATED`, `INVALID_CREDENTIALS` |
| 403 | `FORBIDDEN` |
| 404 | `NOT_FOUND` |
| 409 | `PHONE_TAKEN`, `DUPLICATE_REQUEST`, `PENDING_LIMIT`, `CLINIC_INACTIVE`, `INVALID_STATUS`, `TOO_LATE_TO_CANCEL`, `CLINIC_NAME_TAKEN` |
| 429 | `ACCOUNT_LOCKED` |
