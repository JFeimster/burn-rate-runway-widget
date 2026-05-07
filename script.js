const form = document.getElementById("runway-form");
const errorEl = document.getElementById("form-error");
const results = document.getElementById("results");
const calendarButton = document.getElementById("calendar-button");

let latestResult = null;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric"
});

function getNumber(id) {
  const value = Number(document.getElementById(id).value);
  return Number.isFinite(value) ? value : 0;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatICSDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeICS(text) {
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function buildICS(result) {
  const start = result.deathDate;
  start.setHours(14, 0, 0, 0);
  const end = new Date(start);
  end.setHours(14, 30, 0, 0);

  const summary = "Death Date: Runway Review";
  const description = [
    "Burn Rate Runway Extender estimate.",
    `Cash on hand: ${money.format(result.cash)}`,
    `Monthly expenses: ${money.format(result.expenses)}`,
    `Monthly revenue: ${money.format(result.revenue)}`,
    `Net monthly burn: ${money.format(result.netBurn)}`,
    `Estimated runway: ${result.months.toFixed(1)} months`,
    "",
    "CTA: Get Same-Day Instant Funding - https://bankbreezy.com/funding/jason",
    "CTA: Funding for Any Reason - https://tally.so/r/w4R2Ad",
    "",
    "Disclaimer: Estimates only. Terms depend on underwriting / eligibility."
  ].join("\n");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Burn Rate Runway Extender//Death Date Invite//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@burn-rate-runway-extender`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:${escapeICS(summary)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");
}

function downloadICS() {
  if (!latestResult) return;
  const ics = buildICS(latestResult);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "death-date-runway-review.ics";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function setStatus(months, netBurn) {
  const pill = document.getElementById("status-pill");
  pill.className = "status-pill";

  if (netBurn <= 0) {
    pill.textContent = "Not burning cash";
    pill.classList.add("good");
    return;
  }

  if (months < 3) {
    pill.textContent = "Red zone";
    pill.classList.add("danger");
  } else if (months < 6) {
    pill.textContent = "Fix it now";
  } else {
    pill.textContent = "Monitor weekly";
    pill.classList.add("good");
  }
}

function calculate(event) {
  event.preventDefault();
  errorEl.textContent = "";

  const cash = getNumber("cash");
  const expenses = getNumber("expenses");
  const revenue = getNumber("revenue");

  if (cash <= 0) {
    errorEl.textContent = "Enter your cash on hand. Zero cash means the death date is already holding the shovel.";
    results.classList.add("is-hidden");
    return;
  }

  if (expenses <= 0) {
    errorEl.textContent = "Enter monthly expenses. Runway math needs a burn number.";
    results.classList.add("is-hidden");
    return;
  }

  const netBurn = expenses - revenue;
  const dailyBurn = netBurn > 0 ? netBurn / 30.4375 : 0;
  const months = netBurn > 0 ? cash / netBurn : Infinity;
  const days = netBurn > 0 ? Math.floor(months * 30.4375) : 3650;
  const deathDate = addDays(new Date(), days);

  latestResult = {
    cash,
    expenses,
    revenue,
    netBurn: Math.max(netBurn, 0),
    months: Number.isFinite(months) ? months : 120,
    dailyBurn,
    deathDate
  };

  document.getElementById("months-out").textContent = Number.isFinite(months) ? months.toFixed(1) : "∞";
  document.getElementById("death-date-out").textContent = netBurn > 0 ? dateFormatter.format(deathDate) : "No death date at current burn";
  document.getElementById("net-burn-out").textContent = netBurn > 0 ? money.format(netBurn) : "$0";
  document.getElementById("daily-burn-out").textContent = netBurn > 0 ? money.format(dailyBurn) : "$0";
  document.getElementById("cash-out").textContent = money.format(cash);

  const note = document.getElementById("scenario-note");
  if (netBurn <= 0) {
    note.textContent = "Revenue covers expenses. Beautiful. Keep cash reserves high and do not let optimism hire a marching band.";
  } else if (months < 3) {
    note.textContent = "Under 3 months of runway. This is not a vibe check. Cut burn, collect receivables, and pursue funding immediately.";
  } else if (months < 6) {
    note.textContent = "Less than 6 months. You still have options, but the room is getting smaller. Move before underwriting says no.";
  } else {
    note.textContent = "You have breathing room. Protect it. Review weekly, trim waste, and keep funding options warm before you need them.";
  }

  setStatus(months, netBurn);
  results.classList.remove("is-hidden");

  // Helps parent pages that listen for iframe resize messages.
  window.parent?.postMessage({
    type: "burn-rate-runway-extender:height",
    height: document.documentElement.scrollHeight
  }, "*");
}

form.addEventListener("submit", calculate);
calendarButton.addEventListener("click", downloadICS);

window.addEventListener("load", () => {
  window.parent?.postMessage({
    type: "burn-rate-runway-extender:height",
    height: document.documentElement.scrollHeight
  }, "*");
});
