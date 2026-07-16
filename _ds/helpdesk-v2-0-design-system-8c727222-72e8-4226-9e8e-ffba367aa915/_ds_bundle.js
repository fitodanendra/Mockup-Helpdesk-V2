/* @ds-bundle: {"format":4,"namespace":"HelpdeskV20DesignSystem_8c7272","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"LinkButton","sourcePath":"components/core/LinkButton.jsx"},{"name":"PriorityBadge","sourcePath":"components/core/PriorityBadge.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"FieldLabel","sourcePath":"components/forms/FieldLabel.jsx"},{"name":"FileDropzone","sourcePath":"components/forms/FileDropzone.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PrioritySelector","sourcePath":"components/forms/PrioritySelector.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/foundation/Avatar.jsx"},{"name":"ICONS","sourcePath":"components/foundation/Icon.jsx"},{"name":"Icon","sourcePath":"components/foundation/Icon.jsx"},{"name":"IconButton","sourcePath":"components/foundation/IconButton.jsx"},{"name":"Logo","sourcePath":"components/foundation/Logo.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NavTab","sourcePath":"components/navigation/NavTab.jsx"}],"sourceHashes":{"components/core/Button.jsx":"be29bf985b6a","components/core/Card.jsx":"64f72130fbeb","components/core/Chip.jsx":"94f06f26a064","components/core/LinkButton.jsx":"d7f374611b87","components/core/PriorityBadge.jsx":"f2d415628b93","components/core/ProgressBar.jsx":"a3f02f6b1669","components/core/StatCard.jsx":"dd3892cf100b","components/core/StatusBadge.jsx":"46081f3bfca3","components/data/DataTable.jsx":"dca66db6d599","components/forms/FieldLabel.jsx":"ac7719d0e526","components/forms/FileDropzone.jsx":"86c04451da28","components/forms/Input.jsx":"aa9f74890e27","components/forms/PrioritySelector.jsx":"17725c13a5e0","components/forms/Select.jsx":"266f061d5033","components/forms/Textarea.jsx":"b9ba0b3e20e0","components/foundation/Avatar.jsx":"f99477d32d74","components/foundation/Icon.jsx":"110bfc42d53e","components/foundation/IconButton.jsx":"7ac687b60e3f","components/foundation/Logo.jsx":"5c858282569f","components/navigation/NavBar.jsx":"33d47e4d53f0","components/navigation/NavTab.jsx":"3b3f1a071bd7","ui_kits/helpdesk/screens.jsx":"bfe37171b313"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HelpdeskV20DesignSystem_8c7272 = window.HelpdeskV20DesignSystem_8c7272 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Neutral tag chip — the "SAP" / "SAP FICO" application labels in ticket
 * rows. Radius 8, chip-gray fill, 12px medium slate text.
 */
function Chip({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 26,
      padding: "0 12px",
      borderRadius: "var(--radius-sm)",
      background: "var(--hd-chip)",
      color: "var(--hd-slate-600)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/PriorityBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Solid priority pill — the "Medium"/"Critical"/… SLA badges in ticket
 * tables. Radius 99, 12px semibold label. Colors follow the iOS palette
 * used in the source.
 */
const PRIORITY = {
  low: {
    bg: "#ffcc00",
    fg: "#3d2f00",
    label: "Low"
  },
  medium: {
    bg: "var(--hd-warning)",
    fg: "#fff",
    label: "Medium"
  },
  high: {
    bg: "#ff6b6b",
    fg: "#fff",
    label: "High"
  },
  critical: {
    bg: "#ff3b30",
    fg: "#fff",
    label: "Critical"
  }
};
function PriorityBadge({
  level = "medium",
  children,
  style,
  ...rest
}) {
  const p = PRIORITY[level] || PRIORITY.medium;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 22,
      padding: "0 12px",
      borderRadius: 99,
      background: p.bg,
      color: p.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children || p.label);
}
Object.assign(__ds_scope, { PriorityBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriorityBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Labeled distribution bar — the dashboard "Ticket Priority Distribution"
 * rows. Track is 10px, rounded fully; fill uses the priority gradient.
 */
const GRAD = {
  critical: "var(--hd-grad-critical)",
  high: "var(--hd-grad-high)",
  medium: "var(--hd-grad-medium)",
  low: "var(--hd-grad-low)",
  blue: "var(--hd-grad-medium)"
};
function ProgressBar({
  label,
  value,
  percent,
  tone = "blue",
  style,
  ...rest
}) {
  const pct = percent != null ? percent : parseFloat(value) || 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, rest), (label || value) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 13,
      lineHeight: "19.5px",
      color: "var(--hd-slate-600)"
    }
  }, label), value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 13,
      lineHeight: "19.5px",
      color: "var(--hd-ink-900)"
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: 9999,
      background: "var(--hd-track)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(100, pct))}%`,
      height: "100%",
      borderRadius: 9999,
      background: GRAD[tone] || GRAD.blue
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status pill with leading dot — ticket workflow states.
 * Matches the "In Progress" pill (radius 99, soft-tint bg, dot + label).
 */
const STATUS = {
  "in-progress": {
    bg: "var(--hd-status-blue-bg)",
    fg: "var(--hd-blue-500)",
    label: "In Progress"
  },
  pending: {
    bg: "#f1f2f4",
    fg: "var(--hd-gray-500)",
    label: "Pending"
  },
  resolved: {
    bg: "#e7f8ec",
    fg: "#1a8a45",
    label: "Resolved"
  },
  rejected: {
    bg: "#fdecec",
    fg: "#d92d20",
    label: "Rejected"
  },
  open: {
    bg: "var(--hd-status-blue-bg)",
    fg: "var(--hd-blue-500)",
    label: "Open"
  }
};
function StatusBadge({
  status = "in-progress",
  children,
  style,
  ...rest
}) {
  const s = STATUS[status] || STATUS["in-progress"];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 22,
      padding: "0 12px",
      borderRadius: 99,
      background: s.bg,
      color: s.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: s.fg,
      flexShrink: 0
    }
  }), children || s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ticket data table — the dashboard "Tickets Nearing SLA" / "Tiket Terbaru"
 * lists. Uppercase muted header row over hairline-separated rows.
 *
 * columns: [{ key, label, align?, width? }]
 * data:    array of row objects
 * renderCell(row, col): optional custom cell content
 */
function DataTable({
  columns = [],
  data = [],
  renderCell,
  rowHeight = 72,
  style,
  ...rest
}) {
  const grid = columns.map(c => c.width ? c.width : "1fr").join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      alignItems: "center",
      padding: "14px 32px",
      background: "var(--hd-surface-tint)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: "0.6px",
      textTransform: "uppercase",
      color: "var(--hd-slate-500)",
      textAlign: c.align || "left"
    }
  }, c.label))), data.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: row.id || i,
    style: {
      display: "grid",
      gridTemplateColumns: grid,
      alignItems: "center",
      minHeight: rowHeight,
      padding: "0 32px",
      borderTop: "1px solid rgba(227,226,231,0.3)",
      fontFamily: "var(--font-sans)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      display: "flex",
      justifyContent: c.align === "right" ? "flex-end" : c.align === "center" ? "center" : "flex-start",
      fontSize: 13,
      lineHeight: "15.6px",
      letterSpacing: "0.13px",
      color: "var(--hd-slate-600)"
    }
  }, renderCell ? renderCell(row, c) : row[c.key])))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/FieldLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Form field label — warm-brown, 13px semibold, +0.65 tracking. The
 * distinctive mocha label color is a signature of the ticket form.
 */
function FieldLabel({
  children,
  htmlFor,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      display: "block",
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "18px",
      letterSpacing: "0.65px",
      color: "var(--hd-mocha-700)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { FieldLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FieldLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input — 15px radius, tint fill, hairline ring + soft warm drop.
 * Pass `label` to render the field label + input together.
 */
function Input({
  label,
  id,
  style,
  wrapStyle,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    style: {
      width: "100%",
      height: 37,
      padding: "9px 16px",
      border: "none",
      borderRadius: "var(--radius-md)",
      background: "var(--hd-surface-tint)",
      boxShadow: "var(--shadow-field)",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "17px",
      color: "var(--hd-navy-900)",
      outline: "none",
      boxSizing: "border-box",
      ...style
    },
    onFocus: e => e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px var(--hd-blue-450), 0 4px 4px 0 rgba(104,102,102,0.05)",
    onBlur: e => e.currentTarget.style.boxShadow = "var(--shadow-field)"
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...wrapStyle
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, {
    htmlFor: id
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Multi-line textarea — 8px radius, tint fill, hairline ring + soft drop.
 * Pass `label` to render the field label + textarea together.
 */
function Textarea({
  label,
  id,
  rows = 3,
  style,
  wrapStyle,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    style: {
      width: "100%",
      minHeight: 98,
      padding: "8px 16px",
      border: "none",
      borderRadius: "var(--radius-sm)",
      background: "var(--hd-surface-tint)",
      boxShadow: "var(--shadow-field)",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--hd-navy-900)",
      outline: "none",
      resize: "vertical",
      boxSizing: "border-box",
      ...style
    },
    onFocus: e => e.currentTarget.style.boxShadow = "inset 0 0 0 1.5px var(--hd-blue-450), 0 4px 4px 0 rgba(104,102,102,0.05)",
    onBlur: e => e.currentTarget.style.boxShadow = "var(--shadow-field)"
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...wrapStyle
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, {
    htmlFor: id
  }, label), field);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Round avatar with the file's warm-rose inset ring. `src` defaults to
 * the bundled placeholder portrait shipped in the design system.
 */
function Avatar({
  src,
  alt = "",
  size = 40,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      width: size,
      height: size,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden",
      background: "#0b1c30",
      boxShadow: "inset 0 0 0 1px rgba(228,189,186,0.2)",
      flexShrink: 0,
      ...style
    }
  }, rest), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon registry.
 *
 * Glyphs marked (file) are transcribed verbatim from Helpdesk.fig — the
 * exact SF-Symbols-style paths the source ships. Glyphs marked (supp)
 * are supplemental standard UI glyphs authored to match the same filled,
 * rounded SF style for stat/priority/action slots the source reused a
 * single component for (so they were never exported individually).
 */
const ICONS = {
  // ---- from the file -------------------------------------------------
  headset: {
    vb: "0 0 20 18",
    d: "M 9 18 L 9 16 L 17 16 L 17 8.9 C 17 6.95 16.321 5.296 14.962 3.938 C 13.604 2.579 11.95 1.9 10 1.9 C 8.05 1.9 6.396 2.579 5.037 3.938 C 3.679 5.296 3 6.95 3 8.9 L 3 15 L 2 15 C 1.45 15 0.979 14.804 0.587 14.413 C 0.196 14.021 0 13.55 0 13 L 0 11 C 0 10.65 0.087 10.321 0.262 10.012 C 0.438 9.704 0.683 9.458 1 9.275 L 1.075 7.95 C 1.208 6.817 1.538 5.767 2.063 4.8 C 2.588 3.833 3.246 2.992 4.037 2.275 C 4.829 1.558 5.737 1 6.762 0.6 C 7.787 0.2 8.867 0 10 0 C 11.133 0 12.208 0.2 13.225 0.6 C 14.242 1 15.15 1.554 15.95 2.263 C 16.75 2.971 17.408 3.808 17.925 4.775 C 18.442 5.742 18.775 6.792 18.925 7.925 L 19 9.225 C 19.317 9.375 19.563 9.6 19.737 9.9 C 19.912 10.2 20 10.517 20 10.85 L 20 13.15 C 20 13.483 19.912 13.8 19.737 14.1 C 19.563 14.4 19.317 14.625 19 14.775 L 19 16 C 19 16.55 18.804 17.021 18.413 17.413 C 18.021 17.804 17.55 18 17 18 L 9 18 M 7 11 C 6.717 11 6.479 10.904 6.287 10.712 C 6.096 10.521 6 10.283 6 10 C 6 9.717 6.096 9.479 6.287 9.288 C 6.479 9.096 6.717 9 7 9 C 7.283 9 7.521 9.096 7.713 9.288 C 7.904 9.479 8 9.717 8 10 C 8 10.283 7.904 10.521 7.713 10.712 C 7.521 10.904 7.283 11 7 11 M 13 11 C 12.717 11 12.479 10.904 12.288 10.712 C 12.096 10.521 12 10.283 12 10 C 12 9.717 12.096 9.479 12.288 9.288 C 12.479 9.096 12.717 9 13 9 C 13.283 9 13.521 9.096 13.712 9.288 C 13.904 9.479 14 9.717 14 10 C 14 10.283 13.904 10.521 13.712 10.712 C 13.521 10.904 13.283 11 13 11 M 4.025 9.45 C 3.908 7.683 4.442 6.167 5.625 4.9 C 6.808 3.633 8.283 3 10.05 3 C 11.533 3 12.837 3.471 13.962 4.412 C 15.087 5.354 15.767 6.558 16 8.025 C 14.483 8.008 13.087 7.6 11.813 6.8 C 10.538 6 9.558 4.917 8.875 3.55 C 8.608 4.883 8.046 6.071 7.188 7.113 C 6.329 8.154 5.275 8.933 4.025 9.45"
  },
  ticket: {
    vb: "0 0 20 16",
    d: "M 10 13 C 10.283 13 10.521 12.904 10.712 12.712 C 10.904 12.521 11 12.283 11 12 C 11 11.717 10.904 11.479 10.712 11.288 C 10.521 11.096 10.283 11 10 11 C 9.717 11 9.479 11.096 9.288 11.288 C 9.096 11.479 9 11.717 9 12 C 9 12.283 9.096 12.521 9.288 12.712 C 9.479 12.904 9.717 13 10 13 M 10 9 C 10.283 9 10.521 8.904 10.712 8.712 C 10.904 8.521 11 8.283 11 8 C 11 7.717 10.904 7.479 10.712 7.287 C 10.521 7.096 10.283 7 10 7 C 9.717 7 9.479 7.096 9.288 7.287 C 9.096 7.479 9 7.717 9 8 C 9 8.283 9.096 8.521 9.288 8.712 C 9.479 8.904 9.717 9 10 9 M 10 5 C 10.283 5 10.521 4.904 10.712 4.713 C 10.904 4.521 11 4.283 11 4 C 11 3.717 10.904 3.479 10.712 3.287 C 10.521 3.096 10.283 3 10 3 C 9.717 3 9.479 3.096 9.288 3.287 C 9.096 3.479 9 3.717 9 4 C 9 4.283 9.096 4.521 9.288 4.713 C 9.479 4.904 9.717 5 10 5 M 18 16 L 2 16 C 1.45 16 0.979 15.804 0.587 15.413 C 0.196 15.021 0 14.55 0 14 L 0 10 C 0.55 10 1.021 9.804 1.413 9.413 C 1.804 9.021 2 8.55 2 8 C 2 7.45 1.804 6.979 1.413 6.588 C 1.021 6.196 0.55 6 0 6 L 0 2 C 0 1.45 0.196 0.979 0.587 0.587 C 0.979 0.196 1.45 0 2 0 L 18 0 C 18.55 0 19.021 0.196 19.413 0.587 C 19.804 0.979 20 1.45 20 2 L 20 6 C 19.45 6 18.979 6.196 18.587 6.588 C 18.196 6.979 18 7.45 18 8 C 18 8.55 18.196 9.021 18.587 9.413 C 18.979 9.804 19.45 10 20 10 L 20 14 C 20 14.55 19.804 15.021 19.413 15.413 C 19.021 15.804 18.55 16 18 16 M 18 14 L 18 11.45 C 17.383 11.083 16.896 10.596 16.538 9.988 C 16.179 9.379 16 8.717 16 8 C 16 7.283 16.179 6.621 16.538 6.012 C 16.896 5.404 17.383 4.917 18 4.55 L 18 2 L 2 2 L 2 4.55 C 2.617 4.917 3.104 5.404 3.463 6.012 C 3.821 6.621 4 7.283 4 8 C 4 8.717 3.821 9.379 3.463 9.988 C 3.104 10.596 2.617 11.083 2 11.45 L 2 14 L 18 14"
  },
  grid: {
    vb: "0 0 18 18",
    d: "M 10 6 L 10 0 L 18 0 L 18 6 L 10 6 M 0 10 L 0 0 L 8 0 L 8 10 L 0 10 M 10 18 L 10 8 L 18 8 L 18 18 L 10 18 M 0 18 L 0 12 L 8 12 L 8 18 L 0 18 M 2 8 L 6 8 L 6 2 L 2 2 L 2 8 M 12 16 L 16 16 L 16 10 L 12 10 L 12 16 M 12 4 L 16 4 L 16 2 L 12 2 L 12 4 M 2 16 L 6 16 L 6 14 L 2 14 L 2 16"
  },
  bell: {
    vb: "0 0 16 20",
    d: "M 0 17 L 0 15 L 2 15 L 2 8 C 2 6.617 2.417 5.387 3.25 4.313 C 4.083 3.237 5.167 2.533 6.5 2.2 L 6.5 1.5 C 6.5 1.083 6.646 0.729 6.938 0.438 C 7.229 0.146 7.583 0 8 0 C 8.417 0 8.771 0.146 9.063 0.438 C 9.354 0.729 9.5 1.083 9.5 1.5 L 9.5 2.2 C 10.833 2.533 11.917 3.237 12.75 4.313 C 13.583 5.387 14 6.617 14 8 L 14 15 L 16 15 L 16 17 L 0 17 M 8 20 C 7.45 20 6.979 19.804 6.588 19.413 C 6.196 19.021 6 18.55 6 18 L 10 18 C 10 18.55 9.804 19.021 9.413 19.413 C 9.021 19.804 8.55 20 8 20 M 4 15 L 12 15 L 12 8 C 12 6.9 11.608 5.958 10.825 5.175 C 10.042 4.392 9.1 4 8 4 C 6.9 4 5.958 4.392 5.175 5.175 C 4.392 5.958 4 6.9 4 8 L 4 15"
  },
  "doc-edit": {
    vb: "0 0 19 20",
    d: "M 10 20 L 10 16.925 L 15.525 11.425 C 15.675 11.275 15.842 11.167 16.025 11.1 C 16.208 11.033 16.392 11 16.575 11 C 16.775 11 16.967 11.038 17.15 11.113 C 17.333 11.188 17.5 11.3 17.65 11.45 L 18.575 12.375 C 18.708 12.525 18.813 12.692 18.888 12.875 C 18.963 13.058 19 13.242 19 13.425 C 19 13.608 18.967 13.796 18.9 13.988 C 18.833 14.179 18.725 14.35 18.575 14.5 L 13.075 20 L 10 20 M 11.5 18.5 L 12.45 18.5 L 15.475 15.45 L 15.025 14.975 L 14.55 14.525 L 11.5 17.55 L 11.5 18.5 M 2 20 C 1.45 20 0.979 19.804 0.587 19.413 C 0.196 19.021 0 18.55 0 18 L 0 2 C 0 1.45 0.196 0.979 0.587 0.587 C 0.979 0.196 1.45 0 2 0 L 10 0 L 16 6 L 16 9 L 14 9 L 14 7 L 9 7 L 9 2 L 2 2 L 2 18 L 8 18 L 8 20 L 2 20"
  },
  "cloud-upload": {
    vb: "0 0 36.667 26.667",
    d: "M 9.167 26.667 C 6.639 26.667 4.479 25.792 2.688 24.042 C 0.896 22.292 0 20.153 0 17.625 C 0 15.458 0.653 13.528 1.958 11.833 C 3.264 10.139 4.972 9.056 7.083 8.583 C 7.778 6.028 9.167 3.958 11.25 2.375 C 13.333 0.792 15.694 0 18.333 0 C 21.583 0 24.34 1.132 26.604 3.396 C 28.868 5.66 30 8.417 30 11.667 C 31.917 11.889 33.507 12.715 34.771 14.146 C 36.035 15.576 36.667 17.25 36.667 19.167 C 36.667 21.25 35.938 23.021 34.479 24.479 C 33.021 25.938 31.25 26.667 29.167 26.667 L 20 26.667 C 19.083 26.667 18.299 26.34 17.646 25.688 C 16.993 25.035 16.667 24.25 16.667 23.333 L 16.667 14.75 L 14 17.333 L 11.667 15 L 18.333 8.333 L 25 15 L 22.667 17.333 L 20 14.75 L 20 23.333 L 29.167 23.333 C 30.333 23.333 31.319 22.931 32.125 22.125 C 32.931 21.319 33.333 20.333 33.333 19.167 C 33.333 18 32.931 17.014 32.125 16.208 C 31.319 15.403 30.333 15 29.167 15 L 26.667 15 L 26.667 11.667 C 26.667 9.361 25.854 7.396 24.229 5.771 C 22.604 4.146 20.639 3.333 18.333 3.333 C 16.028 3.333 14.063 4.146 12.438 5.771 C 10.813 7.396 10 9.361 10 11.667 L 9.167 11.667 C 7.556 11.667 6.181 12.236 5.042 13.375 C 3.903 14.514 3.333 15.889 3.333 17.5 C 3.333 19.111 3.903 20.486 5.042 21.625 C 6.181 22.764 7.556 23.333 9.167 23.333 L 13.333 23.333 L 13.333 26.667 L 9.167 26.667"
  },
  "priority-skip": {
    vb: "0 0 20 16",
    d: "M 2 6.475 C 2 7.658 2.396 8.675 3.188 9.525 C 3.979 10.375 4.967 10.85 6.15 10.95 L 4.6 9.4 L 6 8 L 10 12 L 6 16 L 4.6 14.6 L 6.2 13 C 4.45 12.9 2.979 12.225 1.788 10.975 C 0.596 9.725 0 8.233 0 6.5 C 0 4.683 0.629 3.146 1.888 1.888 C 3.146 0.629 4.683 0 6.5 0 L 10 0 L 10 2 L 6.5 2 C 5.25 2 4.188 2.433 3.313 3.3 C 2.438 4.167 2 5.225 2 6.475 M 12 13 L 12 11 L 20 11 L 20 13 L 12 13 M 12 7.5 L 12 5.5 L 20 5.5 L 20 7.5 L 12 7.5 M 12 2 L 12 0 L 20 0 L 20 2 L 12 2"
  },
  send: {
    vb: "0 0 19 16",
    d: "M 0 16 L 0 0 L 19 8 L 0 16 M 2 13 L 13.85 8 L 2 3 L 2 6.5 L 8 8 L 2 9.5 L 2 13"
  },
  // ---- supplemental (match SF filled style) --------------------------
  "check-circle": {
    vb: "0 0 24 24",
    d: "M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 M 10.6 16.2 L 6.4 12 L 7.81 10.59 L 10.6 13.38 L 16.19 7.79 L 17.6 9.2 L 10.6 16.2"
  },
  clipboard: {
    vb: "0 0 24 24",
    d: "M 19 3 L 15 3 C 14.58 1.84 13.39 1 12 1 C 10.61 1 9.42 1.84 9 3 L 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 M 12 3 C 12.55 3 13 3.45 13 4 C 13 4.55 12.55 5 12 5 C 11.45 5 11 4.55 11 4 C 11 3.45 11.45 3 12 3 M 13 17 L 11 17 L 11 11 L 13 11 L 13 17 M 13 9 L 13 9 C 13 9.55 12.55 10 12 10 C 11.45 10 11 9.55 11 9 C 11 8.45 11.45 8 12 8 C 12.55 8 13 8.45 13 9"
  },
  archive: {
    vb: "0 0 24 24",
    d: "M 20.54 5.23 L 19.15 3.55 C 18.88 3.21 18.47 3 18 3 L 6 3 C 5.53 3 5.12 3.21 4.84 3.55 L 3.46 5.23 C 3.17 5.57 3 6.02 3 6.5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 6.5 C 21 6.02 20.83 5.57 20.54 5.23 M 12 17.5 L 6.5 12 L 10 12 L 10 10 L 14 10 L 14 12 L 17.5 12 L 12 17.5 M 5.12 5 L 5.93 4 L 17.93 4 L 18.87 5 L 5.12 5"
  },
  "chevron-down": {
    vb: "0 0 24 24",
    d: "M 7.41 8.59 L 12 13.17 L 16.59 8.59 L 18 10 L 12 16 L 6 10 L 7.41 8.59"
  },
  "chevron-right": {
    vb: "0 0 24 24",
    d: "M 8.59 16.59 L 13.17 12 L 8.59 7.41 L 10 6 L 16 12 L 10 18 L 8.59 16.59"
  },
  "arrow-right": {
    vb: "0 0 24 24",
    d: "M 12 4 L 10.59 5.41 L 16.17 11 L 4 11 L 4 13 L 16.17 13 L 10.59 18.59 L 12 20 L 20 12 L 12 4"
  },
  filter: {
    vb: "0 0 24 24",
    d: "M 3 5 L 21 5 L 21 7 L 3 7 L 3 5 M 6 11 L 18 11 L 18 13 L 6 13 L 6 11 M 10 17 L 14 17 L 14 19 L 10 19 L 10 17"
  },
  logout: {
    vb: "0 0 24 24",
    d: "M 17 7 L 15.59 8.41 L 18.17 11 L 8 11 L 8 13 L 18.17 13 L 15.59 15.58 L 17 17 L 22 12 L 17 7 M 4 5 L 12 5 L 12 3 L 4 3 C 2.9 3 2 3.9 2 5 L 2 19 C 2 20.1 2.9 21 4 21 L 12 21 L 12 19 L 4 19 L 4 5"
  },
  equals: {
    vb: "0 0 24 24",
    d: "M 4 9 L 20 9 L 20 11 L 4 11 L 4 9 M 4 13 L 20 13 L 20 15 L 4 15 L 4 13"
  },
  exclamation: {
    vb: "0 0 24 24",
    d: "M 11 3 L 13 3 L 13 15 L 11 15 L 11 3 M 11 18 L 13 18 L 13 21 L 11 21 L 11 18"
  },
  warning: {
    vb: "0 0 24 24",
    d: "M 1 21 L 23 21 L 12 2 L 1 21 M 13 18 L 11 18 L 11 16 L 13 16 L 13 18 M 13 14 L 11 14 L 11 10 L 13 10 L 13 14"
  }
};

/**
 * @param {{ name: keyof typeof ICONS, size?: number, color?: string,
 *   strokeAlign?: boolean, style?: object, className?: string }} props
 */
function Icon({
  name,
  size = 20,
  color = "currentColor",
  style,
  className,
  ...rest
}) {
  const g = ICONS[name];
  if (!g) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: g.vb,
    fill: color,
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      flexShrink: 0,
      display: "block",
      ...style
    },
    "aria-hidden": "true"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: g.d,
    fillRule: "nonzero"
  }));
}
Object.assign(__ds_scope, { ICONS, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill button. Matches the "Kirim Tiket" / "Batal" / "Filter" buttons
 * from the Helpdesk ticket form and dashboard.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  disabled = false,
  style,
  ...rest
}) {
  const sizes = {
    md: {
      height: 40,
      padX: 32,
      font: 16,
      lh: "24px"
    },
    sm: {
      height: 32,
      padX: 16,
      font: 13,
      lh: "16px"
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--hd-blue-450)",
      color: "#fff",
      boxShadow: "var(--shadow-btn)"
    },
    secondary: {
      background: "#fff",
      color: "var(--hd-blue-600)",
      boxShadow: "var(--shadow-btn-secondary)"
    },
    outline: {
      background: "#fff",
      color: "var(--hd-ink-900)",
      boxShadow: "inset 0 0 0 1px var(--hd-border)"
    },
    danger: {
      background: "var(--hd-danger)",
      color: "#fff",
      boxShadow: "var(--shadow-btn)"
    }
  };
  const iconSize = size === "sm" ? 15 : 18;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: s.height,
      padding: `0 ${s.padX}px`,
      border: "none",
      borderRadius: "var(--radius-btn)",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: s.font,
      lineHeight: s.lh,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "filter .15s ease, transform .05s ease",
      whiteSpace: "nowrap",
      ...variants[variant],
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * White surface card — 24px radius, 1px inset hairline (drawn as an inset
 * ring, no offset shadow). Optional heading row (title + right-side action)
 * or a tinted header band (the ticket-form "Informasi Tiket" style).
 */
function Card({
  children,
  title,
  action,
  bandTitle,
  bandIcon,
  padding = 32,
  radius = 24,
  glow = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: "var(--hd-surface)",
      borderRadius: radius,
      boxShadow: glow ? "inset 0 0 0 1px rgba(0,0,0,0.05), 0 1px 2px 0 var(--hd-blue-glow)" : "var(--shadow-card)",
      overflow: "hidden",
      ...style
    }
  }, rest), bandTitle && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 24px",
      minHeight: 53,
      background: "var(--hd-surface-header)"
    }
  }, bandIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: bandIcon,
    size: 20,
    color: "var(--hd-blue-450)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: "24px",
      color: "var(--hd-navy-900)"
    }
  }, bandTitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "31.2px",
      color: "var(--hd-ink-900)"
    }
  }, title), action), children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text link button — "View Distribution", "See All Activity".
 * 13px medium, brand blue, optional trailing arrow.
 */
function LinkButton({
  children,
  icon,
  iconRight,
  size = 13,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: 0,
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: size,
      letterSpacing: "0.13px",
      color: "var(--hd-blue-500)",
      transition: "opacity .15s ease",
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.opacity = "0.7",
    onMouseLeave: e => e.currentTarget.style.opacity = "1"
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size + 3
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size + 3
  }));
}
Object.assign(__ds_scope, { LinkButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Dashboard KPI card — rounded icon tile, uppercase eyebrow label, and a
 * 48px value. Matches "ACTIVE TICKETS / 142". Tile tint follows the tone.
 */
const TONES = {
  blue: {
    tile: "var(--hd-status-blue-bg)",
    icon: "var(--hd-blue-500)"
  },
  green: {
    tile: "#e7f8ec",
    icon: "var(--hd-success)"
  },
  red: {
    tile: "#fdecec",
    icon: "var(--hd-danger)"
  },
  neutral: {
    tile: "#f1f2f4",
    icon: "var(--hd-ink-900)"
  }
};
function StatCard({
  icon,
  label,
  value,
  tone = "blue",
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      padding: 32,
      background: "var(--hd-surface)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      borderRadius: "var(--radius-tile)",
      background: t.tile,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    color: t.icon
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 21,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "18px",
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: "var(--hd-slate-500)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "52.8px",
      letterSpacing: "-0.96px",
      color: "var(--hd-ink-900)"
    }
  }, value));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileDropzone.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * File attachment dropzone — the "Lampiran (Opsional)" area. Dashed
 * outline over a pale-blue fill, centered cloud-upload glyph and hints.
 */
function FileDropzone({
  title = "Klik untuk unggah atau seret file ke sini",
  hint = "PNG, JPG, PDF (Maks. 5MB)",
  onFiles,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
      minHeight: 122.667,
      padding: 24,
      borderRadius: "var(--radius-sm)",
      background: "var(--hd-surface-dropzone)",
      outline: "2px dashed var(--hd-border)",
      outlineOffset: "-2px",
      boxShadow: "0 4px 4px 0 rgba(104,102,102,0.05)",
      cursor: "pointer",
      textAlign: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "file",
    multiple: true,
    style: {
      display: "none"
    },
    onChange: e => onFiles && onFiles(e.target.files)
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "cloud-upload",
    size: 34,
    color: "var(--hd-mocha-700)",
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--hd-navy-900)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "16px",
      color: "var(--hd-mocha-700)"
    }
  }, hint));
}
Object.assign(__ds_scope, { FileDropzone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileDropzone.jsx", error: String((e && e.message) || e) }); }

// components/forms/PrioritySelector.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Priority segmented selector — the four big Low/Medium/High/Critical
 * buttons in the ticket form. Active button is bright-blue with white
 * icon + label; the group sits in a tinted rail.
 */
const OPTIONS = [{
  key: "low",
  label: "Low",
  icon: "priority-skip"
}, {
  key: "medium",
  label: "Medium",
  icon: "equals"
}, {
  key: "high",
  label: "High",
  icon: "exclamation"
}, {
  key: "critical",
  label: "Critical",
  icon: "warning"
}];
const INACTIVE_ICON = {
  low: "var(--hd-slate-600)",
  medium: "var(--hd-slate-600)",
  high: "var(--hd-danger-alt)",
  critical: "var(--hd-danger-alt)"
};
function PrioritySelector({
  value = "low",
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 24,
      padding: 10,
      borderRadius: "var(--radius-sm)",
      background: "var(--hd-surface-tint)",
      ...style
    }
  }, rest), OPTIONS.map(o => {
    const active = value === o.key;
    return /*#__PURE__*/React.createElement("button", {
      key: o.key,
      type: "button",
      onClick: () => onChange && onChange(o.key),
      style: {
        flex: 1,
        height: 67,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        border: "none",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        background: active ? "rgba(65,154,255,0.929)" : "var(--hd-chip)",
        boxShadow: active ? "var(--shadow-priority)" : "none",
        transition: "background .15s ease"
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: 20,
      color: active ? "#fff" : INACTIVE_ICON[o.key]
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 12,
        lineHeight: "12px",
        letterSpacing: "0.6px",
        color: active ? "#fff" : "var(--hd-ink-900)"
      }
    }, o.label));
  }));
}
Object.assign(__ds_scope, { PrioritySelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PrioritySelector.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select / dropdown trigger — 8px radius, tint fill, soft ring, trailing
 * chevron. Renders a native <select> for real behavior while matching the
 * source styling. Pass `label` for the field label.
 */
function Select({
  label,
  id,
  placeholder = "Pilih…",
  options = [],
  value,
  style,
  wrapStyle,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    defaultValue: value == null ? "" : undefined,
    style: {
      width: "100%",
      height: 38,
      padding: "8px 40px 8px 16px",
      border: "none",
      borderRadius: "var(--radius-sm)",
      background: "var(--hd-surface-tint)",
      boxShadow: "var(--shadow-field-soft)",
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--hd-navy-900)",
      appearance: "none",
      WebkitAppearance: "none",
      outline: "none",
      cursor: "pointer",
      boxSizing: "border-box"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === "string" ? o : o.value;
    const lbl = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--hd-gray-500)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  })));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...wrapStyle
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, {
    htmlFor: id
  }, label), field);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/foundation/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button — the nav notification bell / logout. Optional
 * dot badge (the red unread indicator, rgb(163,0,20) with a white ring).
 */
function IconButton({
  icon,
  size = 40,
  iconSize = 20,
  color = "var(--hd-mocha-650)",
  badge = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      position: "relative",
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "var(--radius-pill)",
      background: "transparent",
      color,
      cursor: "pointer",
      transition: "background .15s ease",
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.background = "rgba(0,0,0,0.04)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: size * 0.25,
      right: size * 0.25,
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--hd-danger-deep)",
      boxShadow: "inset 0 0 0 2px #fff"
    }
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/foundation/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Product lockup: the headset support mark (from the file) + "Helpdesk IT"
 * wordmark in bold rounded type. The source ships no separate logo image —
 * the wordmark is set in type beside the glyph.
 */
function Logo({
  label = "Helpdesk IT",
  markColor = "var(--hd-blue-500)",
  size = 20,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "headset",
    size: size,
    color: markColor
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: size,
      lineHeight: `${size + 8}px`,
      color: "var(--hd-ink-900)",
      whiteSpace: "nowrap"
    }
  }, label));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/foundation/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Top-nav tab pill. Active = bright-blue fill, white icon + label.
 * Inactive = transparent with slate label.
 */
function NavTab({
  icon,
  children,
  active = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      height: 40,
      padding: "0 16px",
      border: "none",
      borderRadius: "var(--radius-sm)",
      background: active ? "var(--hd-blue-450)" : "transparent",
      color: active ? "#fff" : "var(--hd-slate-600)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "15.6px",
      letterSpacing: "0.13px",
      cursor: "pointer",
      transition: "background .15s ease",
      ...style
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = "rgba(0,0,0,0.03)";
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = "transparent";
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), children);
}
Object.assign(__ds_scope, { NavTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavTab.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sticky top navigation — frosted white bar (rgba .8 + 24px blur), logo +
 * tabs on the left, notification bell, divider, and user block on the right.
 *
 * `tabs`: [{ key, label, icon }]. `active`: key of the selected tab.
 */
function NavBar({
  tabs = [{
    key: "dashboard",
    label: "Dashboard",
    icon: "grid"
  }, {
    key: "tickets",
    label: "Tiket Saya",
    icon: "ticket-alt"
  }],
  active = "dashboard",
  onTab,
  userName = "LIONEL JAMSUT",
  userRole = "USER",
  avatarSrc = "assets/avatar.jpg",
  notify = true,
  onLogout,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72,
      padding: "16px 40px",
      background: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement(__ds_scope.NavTab, {
    key: t.key,
    icon: t.icon,
    active: active === t.key,
    onClick: () => onTab && onTab(t.key)
  }, t.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "bell",
    badge: notify
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 32,
      background: "var(--hd-divider-rose)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "17.5px",
      color: "var(--hd-ink-850)"
    }
  }, userName), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-meta)",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "15px",
      color: "var(--hd-mocha-650)"
    }
  }, userRole)), /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    alt: userName
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "logout",
    iconSize: 18,
    onClick: onLogout
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/helpdesk/screens.jsx
try { (() => {
/* Helpdesk v2.0 — UI kit screens. Composes the design-system components
   from window.HelpdeskV20DesignSystem_8c7272. Loaded as a Babel script;
   exports screens + App to window. */
(function () {
  const NS = window.HelpdeskV20DesignSystem_8c7272;
  const {
    NavBar,
    StatCard,
    Card,
    ProgressBar,
    LinkButton,
    Button,
    Chip,
    StatusBadge,
    PriorityBadge,
    DataTable,
    Icon,
    Input,
    Textarea,
    Select,
    PrioritySelector,
    FileDropzone
  } = NS;

  /* ---- simple two-line trend chart (Created vs Resolved) ------------ */
  function TrendChart() {
    const W = 516,
      H = 250,
      pad = 8;
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];
    const created = [30, 55, 120, 150, 90, 205];
    const resolved = [20, 45, 80, 130, 160, 175];
    const max = 220;
    const x = i => pad + i * (W - pad * 2) / (months.length - 1);
    const y = v => H - 30 - v / max * (H - 60);
    const smooth = pts => {
      let d = `M ${pts[0][0]} ${pts[0][1]}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const [x0, y0] = pts[i],
          [x1, y1] = pts[i + 1];
        const cx = (x0 + x1) / 2;
        d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
      }
      return d;
    };
    const cPts = created.map((v, i) => [x(i), y(v)]);
    const rPts = resolved.map((v, i) => [x(i), y(v)]);
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${W} ${H}`,
      style: {
        width: "100%",
        height: 250
      }
    }, [0, 1, 2, 3].map(g => /*#__PURE__*/React.createElement("line", {
      key: g,
      x1: pad,
      x2: W - pad,
      y1: 30 + g * 55,
      y2: 30 + g * 55,
      stroke: "var(--hd-border)",
      strokeWidth: "1",
      strokeDasharray: g === 0 ? "0" : "0",
      opacity: "0.6"
    })), /*#__PURE__*/React.createElement("path", {
      d: smooth(rPts),
      fill: "none",
      stroke: "#34c759",
      strokeWidth: "3",
      strokeDasharray: "6 6",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: smooth(cPts),
      fill: "none",
      stroke: "var(--hd-blue-500)",
      strokeWidth: "3.5",
      strokeLinecap: "round"
    }), cPts.map((p, i) => (i === 2 || i === 4) && /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: "5",
      fill: "var(--hd-blue-500)"
    })), months.map((m, i) => /*#__PURE__*/React.createElement("text", {
      key: m,
      x: x(i),
      y: H - 6,
      fontSize: "11",
      fontWeight: "500",
      fill: "var(--hd-slate-500)",
      textAnchor: "middle",
      fontFamily: "var(--font-sans)",
      letterSpacing: "0.5"
    }, m)));
  }
  function ChartHeader({
    title,
    subtitle,
    legend
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 24,
        lineHeight: "31.2px",
        color: "var(--hd-ink-900)"
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--hd-slate-600)"
      }
    }, subtitle)), legend);
  }
  function Legend() {
    const dot = c => ({
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: c
    });
    const item = {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--hd-slate-600)"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: item
    }, /*#__PURE__*/React.createElement("span", {
      style: dot("var(--hd-blue-500)")
    }), "Created"), /*#__PURE__*/React.createElement("span", {
      style: item
    }, /*#__PURE__*/React.createElement("span", {
      style: dot("#34c759")
    }), "Resolved"));
  }
  const slaRows = [{
    id: "#HD-4088",
    subject: "Kegagalan pembuatan laporan bulanan",
    app: "SAP",
    status: "in-progress",
    priority: "medium",
    sla: "22 minutes left"
  }, {
    id: "#HD-4085",
    subject: "New laptop provisioning request",
    app: "SAP",
    status: "in-progress",
    priority: "critical",
    sla: "1h 40m left"
  }, {
    id: "#HD-4082",
    subject: "Reset Password",
    app: "SAP",
    status: "in-progress",
    priority: "low",
    sla: "6 hours left"
  }, {
    id: "#HD-4090",
    subject: "VPN tidak dapat terhubung",
    app: "VPN",
    status: "in-progress",
    priority: "high",
    sla: "6 hours left"
  }];
  const slaColumns = [{
    key: "id",
    label: "Ticket ID",
    width: "150px"
  }, {
    key: "subject",
    label: "Subject"
  }, {
    key: "app",
    label: "Application",
    width: "150px"
  }, {
    key: "status",
    label: "Status",
    width: "150px"
  }, {
    key: "priority",
    label: "Priority",
    width: "120px"
  }, {
    key: "sla",
    label: "SLA Remaining",
    width: "160px"
  }];
  function renderTicketCell(row, col) {
    if (col.key === "id") return /*#__PURE__*/React.createElement(LinkButton, {
      style: {
        fontWeight: 700,
        fontSize: 16
      }
    }, row.id);
    if (col.key === "subject") return /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 13,
        color: "var(--hd-ink-900)"
      }
    }, row.subject);
    if (col.key === "app") return /*#__PURE__*/React.createElement(Chip, null, row.app);
    if (col.key === "status") return /*#__PURE__*/React.createElement(StatusBadge, {
      status: row.status
    });
    if (col.key === "priority") return /*#__PURE__*/React.createElement(PriorityBadge, {
      level: row.priority
    });
    return /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--hd-slate-600)"
      }
    }, row[col.key]);
  }
  function TableFooter({
    label = "See All Activity"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "24px 0 4px"
      }
    }, /*#__PURE__*/React.createElement(LinkButton, {
      iconRight: "arrow-right",
      size: 16,
      style: {
        fontWeight: 700
      }
    }, label));
  }

  /* ---- Dashboard ---------------------------------------------------- */
  function DashboardScreen({
    onNew
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 32,
        letterSpacing: "-0.32px",
        color: "var(--hd-ink-900)"
      }
    }, "Dashboard Overview"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--hd-slate-600)",
        opacity: 0.7
      }
    }, "Real-time performance and ticket monitoring.")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "doc-edit",
      onClick: onNew
    }, "Buat Tiket")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      icon: "ticket",
      label: "Active Tickets",
      value: "142",
      tone: "blue"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "check-circle",
      label: "Resolved Month",
      value: "1,284",
      tone: "green"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "clipboard",
      label: "Pending Action",
      value: "28",
      tone: "red"
    }), /*#__PURE__*/React.createElement(StatCard, {
      icon: "archive",
      label: "Closed Total",
      value: "5,912",
      tone: "neutral"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement(Card, {
      title: "Ticket Priority Distribution",
      action: /*#__PURE__*/React.createElement(LinkButton, null, "View Distribution")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 32
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      label: "Critical",
      value: "12%",
      tone: "critical"
    }), /*#__PURE__*/React.createElement(ProgressBar, {
      label: "High",
      value: "38%",
      tone: "high"
    }), /*#__PURE__*/React.createElement(ProgressBar, {
      label: "Medium",
      value: "35%",
      tone: "medium"
    }), /*#__PURE__*/React.createElement(ProgressBar, {
      label: "Low",
      value: "15%",
      tone: "low"
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(ChartHeader, {
      title: "Created vs Resolved Tickets",
      subtitle: "Monthly performance trend",
      legend: /*#__PURE__*/React.createElement(Legend, null)
    }), /*#__PURE__*/React.createElement(TrendChart, null))), /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 24,
        color: "var(--hd-ink-900)"
      }
    }, "Tickets Nearing SLA"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--hd-slate-600)"
      }
    }, "tickets with the tightest SLA remaining")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "filter",
      size: "sm"
    }, "Filter")), /*#__PURE__*/React.createElement(DataTable, {
      columns: slaColumns,
      data: slaRows,
      renderCell: renderTicketCell
    }), /*#__PURE__*/React.createElement(TableFooter, null)));
  }

  /* ---- My Tickets --------------------------------------------------- */
  const recentRows = [{
    id: "#HD-4092",
    subject: "SAP FICO lambat saat closing",
    app: "SAP FICO",
    status: "rejected",
    updated: "12 mins ago",
    created: "1 Juli 2026"
  }, {
    id: "#HD-4088",
    subject: "Kegagalan pembuatan laporan bulanan",
    app: "SAP",
    status: "in-progress",
    updated: "45 mins ago",
    created: "1 Juli 2026"
  }, {
    id: "#HD-4085",
    subject: "New laptop provisioning request",
    app: "SAP",
    status: "pending",
    updated: "1 hour ago",
    created: "1 Juli 2026"
  }, {
    id: "#HD-4082",
    subject: "Reset Password",
    app: "SAP",
    status: "resolved",
    updated: "3 hours ago",
    created: "1 Juli 2026"
  }, {
    id: "#HD-4079",
    subject: "Akses folder finance share",
    app: "File Server",
    status: "resolved",
    updated: "5 hours ago",
    created: "30 Juni 2026"
  }];
  const recentColumns = [{
    key: "id",
    label: "Ticket ID",
    width: "150px"
  }, {
    key: "subject",
    label: "Subject"
  }, {
    key: "app",
    label: "Application",
    width: "160px"
  }, {
    key: "status",
    label: "Status",
    width: "150px"
  }, {
    key: "updated",
    label: "Last Updated",
    width: "150px"
  }, {
    key: "created",
    label: "Dibuat",
    width: "140px"
  }];
  function MyTicketsScreen({
    onNew
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 32,
        letterSpacing: "-0.32px",
        color: "var(--hd-ink-900)"
      }
    }, "Dashboard Overview"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "doc-edit",
      onClick: onNew
    }, "Buat Tiket")), /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 24,
        color: "var(--hd-ink-900)"
      }
    }, "Tiket Terbaru"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--hd-slate-600)"
      }
    }, "Last 5 active requests across all departments.")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "filter",
      size: "sm"
    }, "Filter")), /*#__PURE__*/React.createElement(DataTable, {
      columns: recentColumns,
      data: recentRows,
      renderCell: renderTicketCell
    }), /*#__PURE__*/React.createElement(TableFooter, null)));
  }

  /* ---- Create Ticket ------------------------------------------------ */
  function CreateTicketScreen({
    onCancel,
    onSubmit
  }) {
    const [priority, setPriority] = React.useState("low");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 904,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 32,
        letterSpacing: "-0.32px",
        color: "var(--hd-ink-900)"
      }
    }, "Buat Tiket Baru"), /*#__PURE__*/React.createElement(Card, {
      bandTitle: "Informasi Tiket",
      bandIcon: "doc-edit",
      padding: 24,
      glow: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Subjek",
      placeholder: "Masukkan judul singkat masalah Anda"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Select, {
      label: "Aplikasi atau Layanan",
      placeholder: "Pilih Layanan",
      options: ["SAP", "SAP FICO", "Email", "VPN", "File Server"]
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Kategori Masalah",
      placeholder: "Pilih Kategori",
      options: ["Incident", "Service Request", "Access Request"]
    })), /*#__PURE__*/React.createElement(Textarea, {
      label: "Deskripsi Detail",
      placeholder: "Jelaskan secara detail masalah yang Anda hadapi\u2026",
      rows: 3
    }), /*#__PURE__*/React.createElement(PrioritySelector, {
      value: priority,
      onChange: setPriority
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 4,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: "0.65px",
        color: "var(--hd-mocha-700)"
      }
    }, "Lampiran (Opsional)"), /*#__PURE__*/React.createElement(FileDropzone, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 16,
        paddingTop: 24,
        borderTop: "1px solid var(--hd-border)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onCancel
    }, "Batal"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      icon: "send",
      onClick: onSubmit
    }, "Kirim Tiket")))));
  }

  /* ---- App shell ---------------------------------------------------- */
  function App() {
    const [tab, setTab] = React.useState("dashboard");
    const [creating, setCreating] = React.useState(false);
    const [toast, setToast] = React.useState(false);
    const submit = () => {
      setCreating(false);
      setToast(true);
      setTimeout(() => setToast(false), 2600);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        background: "var(--hd-canvas)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 20
      }
    }, /*#__PURE__*/React.createElement(NavBar, {
      active: tab,
      onTab: k => {
        setTab(k);
        setCreating(false);
      },
      avatarSrc: "../../assets/avatar.jpg"
    })), /*#__PURE__*/React.createElement("main", {
      style: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: 40,
        boxSizing: "border-box"
      }
    }, creating ? /*#__PURE__*/React.createElement(CreateTicketScreen, {
      onCancel: () => setCreating(false),
      onSubmit: submit
    }) : tab === "dashboard" ? /*#__PURE__*/React.createElement(DashboardScreen, {
      onNew: () => setCreating(true)
    }) : /*#__PURE__*/React.createElement(MyTicketsScreen, {
      onNew: () => setCreating(true)
    })), toast && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 20px",
        borderRadius: 20,
        background: "#fff",
        boxShadow: "var(--shadow-btn), inset 0 0 0 1px var(--hd-border)",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 14,
        color: "var(--hd-ink-900)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check-circle",
      size: 20,
      color: "var(--hd-success)"
    }), "Tiket berhasil dikirim"));
  }
  window.HelpdeskUIKit = {
    App,
    DashboardScreen,
    MyTicketsScreen,
    CreateTicketScreen
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/helpdesk/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.LinkButton = __ds_scope.LinkButton;

__ds_ns.PriorityBadge = __ds_scope.PriorityBadge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.FieldLabel = __ds_scope.FieldLabel;

__ds_ns.FileDropzone = __ds_scope.FileDropzone;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PrioritySelector = __ds_scope.PrioritySelector;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NavTab = __ds_scope.NavTab;

})();
