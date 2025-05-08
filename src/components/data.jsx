// components/DataTables.jsx
import React from 'react';

// dataTables.jsx
export const technicalIssuesLog = [
    { date: "2025-04-01", ticketId: "T-1001", subject: "Calibration Error", user: "Alice", source: "System", status: "Resolved" },
    { date: "2025-04-03", ticketId: "T-1002", subject: "Laser Misalignment", user: "Bob", source: "User", status: "In Progress" },
    { date: "2025-04-07", ticketId: "T-1003", subject: "Fan Noise", user: "Ivy", source: "System", status: "Open" },
    { date: "2025-04-10", ticketId: "T-1004", subject: "Software Crash", user: "Jack", source: "User", status: "Resolved" },

  ];
  
  export const upcomingReservations = [
    { instrument: "Microscope XZ-200", facility: "Bio Lab", user: "Carol", sessionType: "Training", start: "2025-05-08 10:00", end: "2025-05-08 12:00" },
    { instrument: "Centrifuge 9000", facility: "Chem Lab", user: "Dave", sessionType: "Experiment", start: "2025-05-08 13:00", end: "2025-05-08 15:00" },
    { instrument: "Spectrometer Z2", facility: "Physics Lab", user: "Emma", sessionType: "Calibration", start: "2025-05-09 09:00", end: "2025-05-09 11:00" },
    { instrument: "PCR Machine", facility: "Gen Lab", user: "Nina", sessionType: "Testing", start: "2025-05-10 10:00", end: "2025-05-10 12:00" },

  ];
  
  export const serviceRequestSubmissions = [
    { date: "2025-04-25", formName: "RNA Prep Request", user: "Eve", type: "Sample Processing", status: "Initiated" },
    { date: "2025-04-26", formName: "DNA Seq Service", user: "Frank", type: "Sequencing", status: "Billed" },
    { date: "2025-04-28", formName: "Protein Analysis", user: "Sam", type: "Processing", status: "Initiated" },
    { date: "2025-04-30", formName: "Gene Mapping", user: "Tina", type: "Sequencing", status: "Billed" },

  ];
  
  export const maintenancePlans = [
    { planName: "Quarterly Calibration", inCharge: "Grace", startDate: "2025-04-01", duration: "7 Days", status: "Completed" },
    { planName: "Annual Service", inCharge: "Hank", startDate: "2025-06-01", duration: "14 Days", status: "Scheduled" },
    { planName: "Sensor Calibration", inCharge: "Leo", startDate: "2025-07-15", duration: "3 Days", status: "Planned" },

  ];
  

  