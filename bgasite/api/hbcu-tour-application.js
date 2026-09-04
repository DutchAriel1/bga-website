import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendConfirmation, sendNoticeTo, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

/* HBCU Tour, South Carolina, full application (out-of-state flight travel).
   Reviewer copy routed to ariel@theblackgirladvocate.org. */
const REVIEWER = "ariel@theblackgirladvocate.org";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 3, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    legalFirstName: "required",
    legalLastName: "required",
    dob: "required",
    email: "email",
    phone: "required",
    school: "required",
    gpa: (v) => v && !isNaN(parseFloat(v)) && parseFloat(v) >= 0 && parseFloat(v) <= 5,
    graduationYear: "required",
    street: "required",
    city: "required",
    state: "required",
    zip: "required",
    hasValidId: "required",
    parentName: "required",
    parentRelationship: "required",
    parentPhone: "required",
    parentEmail: "email",
    emergencyName: "required",
    emergencyRelationship: "required",
    emergencyPhone: "required",
    whyJoin: "required",
    agreeConduct: (v) => v === true,
    agreeMedia: (v) => v === true,
    agreeTravel: (v) => v === true,
    parentSignature: "required",
  });
  if (!valid) return bad(res, errors);

  try {
    const fields = {
      "Legal First Name": s(body.legalFirstName, 80),
      "Legal Last Name": s(body.legalLastName, 80),
      "Preferred Name": s(body.preferredName, 80),
      "Date of Birth": s(body.dob, 20),
      "Email": s(body.email, 200),
      "Phone": s(body.phone, 40),
      "Street Address": s(body.street, 200),
      "City": s(body.city, 100),
      "State": s(body.state, 60),
      "ZIP": s(body.zip, 20),
      "School": s(body.school, 200),
      "GPA": parseFloat(body.gpa),
      "Graduation Year": s(body.graduationYear, 8),
      "Has Valid Photo ID": s(body.hasValidId, 10),
      "ID Type": s(body.idType, 60),
      "TSA Known Traveler Number": s(body.tsaNumber, 40),
      "Parent/Guardian Name": s(body.parentName, 160),
      "Parent/Guardian Relationship": s(body.parentRelationship, 60),
      "Parent/Guardian Phone": s(body.parentPhone, 40),
      "Parent/Guardian Email": s(body.parentEmail, 200),
      "Emergency Contact Name": s(body.emergencyName, 160),
      "Emergency Contact Relationship": s(body.emergencyRelationship, 60),
      "Emergency Contact Phone": s(body.emergencyPhone, 40),
      "Allergies": s(body.allergies, 1000),
      "Medical Conditions": s(body.medicalConditions, 1000),
      "Medications": s(body.medications, 1000),
      "Dietary Restrictions": s(body.dietaryRestrictions, 500),
      "Accessibility Needs": s(body.accessibilityNeeds, 1000),
      "Roommate Preference": s(body.roommatePreference, 300),
      "Why She Wants To Go": s(body.whyJoin, 4000),
      "Agreed To Code Of Conduct": true,
      "Agreed To Media Release": true,
      "Agreed To Travel Consent": true,
      "Parent E-Signature": s(body.parentSignature, 160),
      "Signature Date": s(body.signatureDate, 20),
      "Status": "New",
      "Submitted At": new Date().toISOString(),
    };
    try { await createRecord(TABLES.hbcuInterest, fields); } catch (e) { console.error("Airtable write failed:", e); }

    await sendNoticeTo(
      REVIEWER,
      `HBCU Tour application — ${s(body.legalFirstName)} ${s(body.legalLastName)}`,
      wrap(
        "New HBCU Tour (South Carolina) application",
        `<p><strong>${s(body.legalFirstName)} ${s(body.legalLastName)}</strong>${body.preferredName ? ` (goes by ${s(body.preferredName)})` : ""} · DOB ${s(body.dob)}</p>
         <p><strong>School:</strong> ${s(body.school)} · GPA ${s(body.gpa)} · Grad ${s(body.graduationYear)}</p>
         <p><strong>Contact:</strong> ${s(body.email)} · ${s(body.phone)}</p>
         <p><strong>Address:</strong> ${s(body.street)}, ${s(body.city)}, ${s(body.state)} ${s(body.zip)}</p>
         <p><strong>Valid photo ID for flight:</strong> ${s(body.hasValidId)}${body.idType ? ` (${s(body.idType)})` : ""}${body.tsaNumber ? ` · TSA# ${s(body.tsaNumber)}` : ""}</p>
         <p><strong>Parent/Guardian:</strong> ${s(body.parentName)} (${s(body.parentRelationship)}) — ${s(body.parentEmail)} · ${s(body.parentPhone)}</p>
         <p><strong>Emergency Contact:</strong> ${s(body.emergencyName)} (${s(body.emergencyRelationship)}) — ${s(body.emergencyPhone)}</p>
         ${body.allergies ? `<p><strong>Allergies:</strong> ${s(body.allergies)}</p>` : ""}
         ${body.medicalConditions ? `<p><strong>Medical conditions:</strong> ${s(body.medicalConditions)}</p>` : ""}
         ${body.medications ? `<p><strong>Medications:</strong> ${s(body.medications)}</p>` : ""}
         ${body.dietaryRestrictions ? `<p><strong>Dietary restrictions:</strong> ${s(body.dietaryRestrictions)}</p>` : ""}
         ${body.accessibilityNeeds ? `<p><strong>Accessibility needs:</strong> ${s(body.accessibilityNeeds)}</p>` : ""}
         ${body.roommatePreference ? `<p><strong>Roommate preference:</strong> ${s(body.roommatePreference)}</p>` : ""}
         <p><em>Why she wants to go:</em><br/>${s(body.whyJoin, 4000).replace(/\n/g, "<br/>")}</p>
         <p style="opacity:.7">Code of conduct, media release, and travel consent all agreed. Parent e-signature: ${s(body.parentSignature)}, ${s(body.signatureDate)}</p>`
      )
    );

    await sendConfirmation(
      body.email,
      "Your HBCU Tour application is in",
      wrap(
        `Thank you, ${s(body.preferredName || body.legalFirstName, 80)}.`,
        `<p>Your application for the HBCU Tour in South Carolina has been received. Our team will review your file and follow up with your parent or guardian about next steps, including flight details.</p>
         <p style="opacity:.7">The Black Girl Advocate HBCU Tour</p>`
      )
    );

    return ok(res, { message: "Application received" });
  } catch (err) {
    return serverError(res, err);
  }
}
