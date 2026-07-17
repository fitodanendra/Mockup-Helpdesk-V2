// Profile popup for the Admin console, matching the other roles'
// profile menu (Team Lead dashboard is the reference: 256px card,
// avatar header, menu links, red "Log out" row).
//
// The Admin bundle's user chip has cursor:pointer but no click
// handler of its own, so this layer adds one without touching any
// bundle JS/DOM it manages: the popup lives in its own container
// appended to <body>, menu actions reuse the bundle's real nav
// buttons, and "Log out" clicks the bundle's real Keluar button.
(function () {
  var frame = document.getElementById('hd-admin-frame');
  if (!frame) return;

  // Icon paths copied from the Team Lead dashboard's ICON map.
  var ICON = {
    dashboard: "M4 4h6v7H4Z M14 4h6v5h-6Z M14 13h6v7h-6Z M4 15h6v5H4Z",
    tune: "M4 8h10 M18 8h2 M4 16h4 M12 16h8 M14 6v4 M8 14v4",
    assessment: "M4 5h16v14H4Z M8 15v-3 M12 15V9 M16 15v-5",
    help: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z M9.5 9a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3 M12 17h.01",
    logout: "M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3 M10 17l5-5-5-5 M15 12H3"
  };

  function svg(path, size) {
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + path + '"></path></svg>';
  }

  function init(doc) {
    if (doc.getElementById('hd-profile-pop')) return;
    var foot = doc.querySelector('.admin-head > div:last-child');
    if (!foot) return;
    var chip = foot.children[2];
    // ":scope >" — the logout button is the footer's direct child;
    // a plain descendant query would match the bell button first.
    var keluarBtn = foot.querySelector(':scope > button.admin-iconbtn');
    var navItems = doc.querySelectorAll('.admin-nav-item');
    if (!chip) return;

    var spans = chip.querySelectorAll('span span');
    var name = (spans[0] && spans[0].textContent.trim()) || 'Administrator';
    var initials = name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase();
    // Requester's popup shows the corporate email under the name.
    var email = name.toLowerCase().split(/\s+/).join('.') + '@adhi.co.id';
    // The initials circle in the chip is drawn by admin-unify.css via
    // content: attr(data-initials).
    chip.setAttribute('data-initials', initials);

    var pop = doc.createElement('div');
    pop.id = 'hd-profile-pop';
    pop.style.cssText =
      'position:fixed;width:256px;background:#fff;' +
      'border:1px solid var(--border,#e3e2e7);border-radius:14px;' +
      'box-shadow:0 12px 32px rgba(16,24,40,.16),0 2px 10px rgba(16,24,40,.08);' +
      'z-index:200;overflow:hidden;display:none;flex-direction:column;padding:6px;' +
      'font-family:var(--font-sans,-apple-system,sans-serif);';

    var header = doc.createElement('div');
    header.style.cssText = 'display:flex;align-items:center;gap:11px;padding:10px 12px;border-bottom:1px solid var(--border-soft,rgba(227,226,231,.3));margin-bottom:6px;';
    header.innerHTML =
      '<div style="width:40px;height:40px;border-radius:999px;background:var(--blue-050-alt,#e5eeff);color:var(--blue-ink,#0051d5);font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">' + initials + '</div>' +
      '<div style="display:flex;flex-direction:column;min-width:0;">' +
      '<span style="font-size:13px;font-weight:700;color:var(--ink-900,#1a1b1f);">' + name + '</span>' +
      '<span style="font-size:11px;color:var(--slate-500,#717786);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + email + '</span>' +
      '</div>';
    pop.appendChild(header);

    function findNav(label) {
      for (var i = 0; i < navItems.length; i++) {
        if (navItems[i].textContent.trim().indexOf(label) === 0) return navItems[i];
      }
      return null;
    }

    var menu = [
      { label: 'Dashboard Administrator', icon: ICON.dashboard, nav: findNav('Dashboard') },
      { label: 'Konfigurasi SLA', icon: ICON.tune, nav: findNav('Konfigurasi SLA') },
      { label: 'Audit Trail Viewer', icon: ICON.assessment, nav: findNav('Audit Trail') },
      { label: 'Bantuan & Dukungan', icon: ICON.help, nav: null }
    ];

    menu.forEach(function (m) {
      var a = doc.createElement('a');
      a.href = '#';
      a.style.cssText = 'display:flex;align-items:center;gap:11px;padding:9px 12px;border-radius:9px;color:var(--ink-700,#414755);font-size:13px;font-weight:500;text-decoration:none;';
      a.innerHTML = svg(m.icon, 16) + m.label;
      a.addEventListener('mouseenter', function () { a.style.background = 'var(--surface-tint,#f8f9ff)'; a.style.color = 'var(--ink-900,#1a1b1f)'; });
      a.addEventListener('mouseleave', function () { a.style.background = 'transparent'; a.style.color = 'var(--ink-700,#414755)'; });
      a.addEventListener('click', function (e) {
        e.preventDefault();
        close();
        if (m.nav) m.nav.click();
      });
      pop.appendChild(a);
    });

    var footRow = doc.createElement('div');
    footRow.style.cssText = 'border-top:1px solid var(--border-soft,rgba(227,226,231,.3));margin-top:6px;padding-top:6px;';
    var out = doc.createElement('a');
    out.href = '#';
    out.style.cssText = 'display:flex;align-items:center;gap:11px;padding:9px 12px;border-radius:9px;color:var(--red-600,#ba1a1a);font-size:13px;font-weight:600;text-decoration:none;';
    out.innerHTML = svg(ICON.logout, 16) + 'Log out';
    out.addEventListener('mouseenter', function () { out.style.background = 'rgba(186,26,26,.06)'; out.style.color = 'var(--red-700,#a30014)'; });
    out.addEventListener('mouseleave', function () { out.style.background = 'transparent'; out.style.color = 'var(--red-600,#ba1a1a)'; });
    out.addEventListener('click', function (e) {
      e.preventDefault();
      close();
      if (keluarBtn) keluarBtn.click();
    });
    footRow.appendChild(out);
    pop.appendChild(footRow);

    doc.body.appendChild(pop);

    function close() { pop.style.display = 'none'; }
    // Anchor to the chip at open time: below it when the chip sits in
    // the navbar (top half of the viewport, right-aligned like the
    // other roles' profile menus), above it if it ever lives near the
    // bottom again.
    function place() {
      var r = chip.getBoundingClientRect();
      var win = doc.defaultView;
      if (r.top < win.innerHeight / 2) {
        pop.style.top = Math.round(r.bottom + 8) + 'px';
        pop.style.bottom = 'auto';
      } else {
        pop.style.bottom = Math.round(win.innerHeight - r.top + 8) + 'px';
        pop.style.top = 'auto';
      }
      var left = Math.min(Math.round(r.right - 256), win.innerWidth - 264);
      pop.style.left = Math.max(8, left) + 'px';
      pop.style.right = 'auto';
    }
    function toggle() {
      if (pop.style.display === 'none') { place(); pop.style.display = 'flex'; }
      else { pop.style.display = 'none'; }
    }

    chip.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle();
    });
    doc.addEventListener('click', function (e) {
      if (!pop.contains(e.target) && !chip.contains(e.target)) close();
    });
  }

  frame.addEventListener('load', function () {
    var attempts = 0;
    var timer = setInterval(function () {
      attempts++;
      var doc;
      try { doc = frame.contentDocument; } catch (e) { doc = null; }
      if (doc && doc.querySelector('.admin-head > div:last-child')) {
        clearInterval(timer);
        init(doc);
      } else if (attempts > 100) {
        clearInterval(timer);
      }
    }, 100);
  });

  // The bundle may already be mounted (script loaded late).
  try {
    if (frame.contentDocument && frame.contentDocument.querySelector('.admin-head > div:last-child')) {
      init(frame.contentDocument);
    }
  } catch (e) { /* cross-origin or not ready — load handler covers it */ }
})();
