/* Tiny browser-side helper to POST to the BGA API.
   Usage in any form's onSubmit:

     try {
       const result = await bgaApi("/api/apply", payload);
       if (!result.ok) { setErrors(result.errors); return; }
       setSubmitted(true);
     } catch (err) { setError("Something went wrong."); }
*/
window.bgaApi = async function bgaApi(path, payload = {}) {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, _hp: "" }), // honeypot, must stay empty
  });
  let data = {};
  try { data = await res.json(); } catch {}
  return {
    ok: res.ok && data.ok !== false,
    status: res.status,
    errors: data.errors || null,
    message: data.message || null,
    raw: data,
  };
};
