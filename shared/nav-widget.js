// Floating role switcher, injected into every mockup screen so a reviewer
// can jump between Requester / Approver / Support / Team Lead / Admin
// without using the browser back button. Appends itself as a sibling of
// <x-dc> (the dc-runtime never touches anything outside that element), so
// it can't interfere with any screen's own template/logic.
(function () {
  var ROLES = [
    {
      label: "Requester",
      pages: [
        { label: "Dashboard", href: "/requester/dashboard.html" },
        { label: "My Tickets", href: "/requester/my-tickets.html" },
        { label: "Ticket Detail", href: "/requester/ticket-detail.html" },
        { label: "Ticket Detail (Rejected)", href: "/requester/ticket-detail-rejected.html" },
      ],
    },
    {
      label: "Approver",
      pages: [{ label: "Approval Workspace", href: "/approver/workspace.html" }],
    },
    {
      label: "Support",
      pages: [{ label: "Support Workspace", href: "/support/workspace.html" }],
    },
    {
      label: "Team Lead",
      pages: [{ label: "Dashboard", href: "/team-lead/dashboard.html" }],
    },
    {
      label: "Admin",
      pages: [{ label: "Admin Console", href: "/admin/index.html" }],
    },
  ];

  var CSS = [
    "#hd-nav-switcher{position:fixed;right:18px;bottom:18px;z-index:2147483000;",
    "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;}",
    "#hd-nav-switcher .hd-toggle{display:flex;align-items:center;gap:8px;",
    "background:#171B24;color:#fff;border:none;border-radius:999px;",
    "padding:11px 16px;font-size:13px;font-weight:600;cursor:pointer;",
    "box-shadow:0 6px 20px rgba(0,0,0,.25);}",
    "#hd-nav-switcher .hd-toggle:hover{background:#2F6BF0;}",
    "#hd-nav-switcher .hd-menu{display:none;position:absolute;right:0;bottom:calc(100% + 10px);",
    "width:240px;max-height:70vh;overflow-y:auto;background:#fff;border-radius:14px;",
    "box-shadow:0 12px 32px rgba(0,0,0,.28);padding:8px;}",
    "#hd-nav-switcher.hd-open .hd-menu{display:block;}",
    "#hd-nav-switcher .hd-group-label{font-size:11px;font-weight:700;text-transform:uppercase;",
    "letter-spacing:.04em;color:#6C7486;padding:10px 10px 4px;}",
    "#hd-nav-switcher .hd-link{display:block;padding:8px 10px;border-radius:8px;",
    "font-size:13px;color:#232937;text-decoration:none;}",
    "#hd-nav-switcher .hd-link:hover{background:#EAF3FF;color:#0051D5;}",
    "#hd-nav-switcher .hd-link.hd-active{background:#0051D5;color:#fff;font-weight:600;}",
    "#hd-nav-switcher .hd-home{display:block;margin-bottom:6px;padding:8px 10px;",
    "border-radius:8px;font-size:13px;font-weight:600;color:#0051D5;",
    "text-decoration:none;border:1px solid #DFE9FD;}",
    "#hd-nav-switcher .hd-home:hover{background:#EAF3FF;}",
  ].join("");

  function build() {
    var here = window.location.pathname.replace(/\/index\.html$/, "/");

    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    var root = document.createElement("div");
    root.id = "hd-nav-switcher";

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "hd-toggle";
    toggle.innerHTML = "&#8646; Switch Role";
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      root.classList.toggle("hd-open");
    });

    var menu = document.createElement("div");
    menu.className = "hd-menu";

    var home = document.createElement("a");
    home.className = "hd-home";
    home.href = "/index.html";
    home.textContent = "⌂ Role Switcher Home";
    menu.appendChild(home);

    ROLES.forEach(function (role) {
      var groupLabel = document.createElement("div");
      groupLabel.className = "hd-group-label";
      groupLabel.textContent = role.label;
      menu.appendChild(groupLabel);

      role.pages.forEach(function (page) {
        var a = document.createElement("a");
        a.className = "hd-link";
        a.href = page.href;
        a.textContent = page.label;
        if (page.href === here) a.classList.add("hd-active");
        menu.appendChild(a);
      });
    });

    root.appendChild(menu);
    root.appendChild(toggle);
    document.body.appendChild(root);

    document.addEventListener("click", function (e) {
      if (!root.contains(e.target)) root.classList.remove("hd-open");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
