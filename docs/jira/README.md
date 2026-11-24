# Jira backlog import

`AHL-backlog-import.csv` holds the 27 tickets of the SRS (section 16): 14 user stories and 13 tasks,
100 story points over Sprints 1–4. Each story's description contains its acceptance criteria,
traceability (FR, US, UC, TC), API endpoint and page.

Columns: `Summary, Issue Type, Story Points, Assignee, Sprint, Labels, Description`.

## Before importing

Replace the four names in the **Assignee** column with each member's Atlassian account e-mail
(Jira matches users by e-mail or account ID):

- Mohammad Mujahed
- Islam Jaradat
- Raneem Masalmeh
- Murad Atawneh

## Import (site admin)

1. Jira **Settings → System → External system import → CSV**.
2. Choose the existing space **AHL**, upload the CSV (encoding UTF-8).
3. Map the columns: Summary, Issue Type (work type), Story Points (or *Story point estimate*),
   Assignee, Sprint, Labels, Description.
4. Start the import and check the report.

Importing in file order into the empty AHL space gives keys AHL-1 to AHL-27, matching the SRS.
If the keys differ, update the RTM (SRS section 17).

If story points or sprints are not filled by the import (team-managed spaces can ignore them),
set them on the board: create Sprints 1–4, filter the backlog by the labels `sprint-1` … `sprint-4`
and move the tickets, then type the points from the CSV.
