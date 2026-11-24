# models/

Data access only: one file per table in `database/schema.sql`, using the pool in `src/config/db.js`.
Always pass values as parameters (`pool.execute('... WHERE phone = ?', [phone])`), never by string concatenation (NFR-07).

Planned files: `user.model.js`, `clinic.model.js`, `workingHours.model.js`, `appointmentRequest.model.js`.
