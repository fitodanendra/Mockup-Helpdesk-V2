// ============================================================
// Kelola Role — User & Role Management (single source of truth)
// Support / PIC / Team Support data. Do NOT hand-write support
// dummies in screens; look up here by Application + support type.
//
// Role format:  "Support IT - <Application>"  /  "Support BPO - <Application>"
// Lookup:       KelolaRole.findSupport(application, "IT" | "BPO")
// ============================================================
(function () {
  const users = [
    // ---- IT Application Support ----
    { name: "Rizky Pratama",   type: "IT",  application: "SAP",     email: "rizky.pratama@adhi.co.id",   position: "IT Application Support", unit: "Dept. Strategi Korporasi" },
    { name: "Dimas Prasetyo",  type: "IT",  application: "ELISA",   email: "dimas.prasetyo@adhi.co.id",  position: "IT Application Support", unit: "Dept. Strategi Korporasi" },
    { name: "Arif Wibowo",     type: "IT",  application: "AISO",    email: "arif.wibowo@adhi.co.id",     position: "IT Application Support", unit: "Dept. Strategi Korporasi" },
    { name: "Fikri Ramadhan",  type: "IT",  application: "MAILIA",  email: "fikri.ramadhan@adhi.co.id",  position: "IT Application Support", unit: "Dept. Strategi Korporasi" },
    { name: "Galih Saputra",   type: "IT",  application: "NETWORK", email: "galih.saputra@adhi.co.id",   position: "IT Infrastructure Support", unit: "Dept. Strategi Korporasi" },
    { name: "Yusuf Maulana",   type: "IT",  application: "SILO",    email: "yusuf.maulana@adhi.co.id",   position: "IT Application Support", unit: "Dept. Strategi Korporasi" },
    { name: "Rendra Saputra",  type: "IT",  application: "HRIS",    email: "rendra.saputra@adhi.co.id",  position: "IT Application Support", unit: "Dept. Strategi Korporasi" },

    // ---- Business Process Owner (BPO) Support ----
    { name: "Hendra Gunawan",  type: "BPO", application: "SAP",     email: "hendra.gunawan@adhi.co.id",  position: "Business Process Owner", unit: "Dept. Supply Chain Management" },
    { name: "Jono Pratama",    type: "BPO", application: "ELISA",   email: "jono.pratama@adhi.co.id",    position: "Business Process Owner", unit: "Dept. Perkeretaapian" },
    { name: "Sari Melati",     type: "BPO", application: "HRIS",    email: "sari.melati@adhi.co.id",     position: "Business Process Owner", unit: "Dept. Human Capital" },
    { name: "Dedi Firmansyah", type: "BPO", application: "SAP",     email: "dedi.firmansyah@adhi.co.id", position: "Business Process Owner", unit: "Dept. Akuntansi" },
  ];

  function role(u) { return "Support " + u.type + " - " + u.application; }
  function initials(name) { return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase(); }

  // Normalize an application field ("SAP MM", "SAP PS" → "SAP") to a catalog key
  function appKey(application) {
    if (!application) return "";
    const a = ("" + application).toUpperCase();
    if (a.startsWith("SAP")) return "SAP";
    if (a.indexOf("MAIL") >= 0) return "MAILIA";
    if (a.indexOf("VPN") >= 0 || a.indexOf("WIFI") >= 0 || a.indexOf("NETWORK") >= 0 || a.indexOf("INTERNET") >= 0) return "NETWORK";
    if (a.indexOf("ELISA") >= 0) return "ELISA";
    if (a.indexOf("AISO") >= 0) return "AISO";
    if (a.indexOf("HRIS") >= 0 || a.indexOf("MAN-POWER") >= 0) return "HRIS";
    return a.split(" ")[0];
  }

  function findSupport(application, type) {
    const key = appKey(application);
    const t = (type || "IT").toUpperCase();
    let u = users.find((x) => x.application === key && x.type === t);
    if (!u) u = users.find((x) => x.application === key); // any type for that app
    if (!u) u = users.find((x) => x.type === t && x.application === "SILO"); // generic IT fallback
    if (!u) u = users[0];
    return {
      name: u.name, email: u.email, position: u.position, unit: u.unit,
      type: u.type, application: u.application, role: role(u), initials: initials(u.name),
    };
  }

  window.KelolaRole = { users, findSupport, appKey, role, initials };
})();
