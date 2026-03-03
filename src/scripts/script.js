/* ================================================================
   JARED'S 30TH BIRTHDAY PARTY — PUERTO VALLARTA 2026
   script.js
   ================================================================ */

// ── Schedule Data ─────────────────────────────────────────────
const SCHEDULE = [
  {
    date: 'Thursday, March 5',
    subtitle: 'Arrival Day',
    emoji: '✈️',
    events: [
      {
        id: 'mar5-checkin',
        time: '3:00 PM',
        title: 'Check-In',
        icon: '🏡',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Rooms are ready at 3PM. Drop your bags, claim your space, and start living your best villa life.',
        dtStart: '20260305T210000Z',
        dtEnd: '20260305T230000Z',
        highlight: false,
      },
      {
        id: 'mar5-snacks',
        time: '5:00 PM',
        title: 'Welcome Snacks',
        icon: '🧃',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Drop your bags, pop something cold, and take a breath. You made it. Vacation starts NOW.',
        dtStart: '20260305T230000Z',
        dtEnd: '20260306T000000Z',
        highlight: false,
      },
      {
        id: 'mar5-dinner',
        time: '7:00 PM',
        title: 'Welcome Dinner',
        icon: '🍽️',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'First dinner of the week, all 16 of us, together. Welcome to the group trip of the century.',
        dtStart: '20260306T010000Z',
        dtEnd: '20260306T030000Z',
        highlight: false,
      },
    ],
  },
  {
    date: 'Friday, March 6',
    subtitle: 'Birthday Dinner Day',
    emoji: '👑',
    events: [
      {
        id: 'mar6-breakfast',
        time: '10:00 AM',
        title: 'Breakfast',
        icon: '🥐',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Morning fuel at the villa. Ease into it.',
        dtStart: '20260306T160000Z',
        dtEnd: '20260306T180000Z',
        highlight: false,
      },
      {
        id: 'mar6-lunch',
        time: '1:00 PM',
        title: 'Lunch',
        icon: '🥗',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'A light poolside lunch to restore your energy before the evening.',
        dtStart: '20260306T190000Z',
        dtEnd: '20260306T210000Z',
        highlight: false,
      },
      {
        id: 'mar6-dinner',
        time: '7:00 PM',
        title: "Jared's Birthday Dinner — Bob Wigs Required",
        icon: '💅',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: "The main event. Bob wigs. Full look. Maximum drama. Don't you dare show up without the wig.",
        dtStart: '20260307T010000Z',
        dtEnd: '20260307T040000Z',
        highlight: true,
      },
      {
        id: 'mar6-out',
        time: 'Late Night',
        title: 'Go Out in Puerto Vallarta',
        icon: '🕺',
        location: 'Zona Romántica, Puerto Vallarta',
        locationMap: 'https://maps.google.com/?q=Zona+Romantica+Puerto+Vallarta+Mexico',
        desc: "The birthday dinner was just the pre-show. PV's nightlife awaits.",
        dtStart: '20260307T040000Z',
        dtEnd: '20260307T080000Z',
        highlight: false,
      },
    ],
  },
  {
    date: 'Saturday, March 7',
    subtitle: 'Mantamar Beach Club Day',
    emoji: '🏖️',
    events: [
      {
        id: 'mar7-breakfast',
        time: '10:00 AM',
        title: 'Breakfast',
        icon: '🥐',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Fuel up — beach day is imminent.',
        dtStart: '20260307T160000Z',
        dtEnd: '20260307T180000Z',
        highlight: false,
      },
      {
        id: 'mar7-mantamar',
        time: '12:00 PM – 6:00 PM',
        title: 'Mantamar Beach Club — Cabanas Reserved',
        icon: '🌊',
        location: 'Mantamar Beach Club, Puerto Vallarta',
        locationMap: 'https://maps.google.com/?q=Mantamar+Beach+Club+Bar+Sushi+Puerto+Vallarta+Jalisco+Mexico',
        desc: "Reserved cabanas at PV's iconic LGBT+ beach club. Pool, cocktails, and a crowd that does not miss.",
        dtStart: '20260307T180000Z',
        dtEnd: '20260308T000000Z',
        highlight: true,
      },
      {
        id: 'mar7-dinner',
        time: '7:00 PM',
        title: 'Dinner',
        icon: '🍽️',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Post-beach dinner at the villa. Recharge.',
        dtStart: '20260308T010000Z',
        dtEnd: '20260308T030000Z',
        highlight: false,
      },
      {
        id: 'mar7-out',
        time: 'Late Night',
        title: 'Go Out in Puerto Vallarta',
        icon: '🕺',
        location: 'Zona Romántica, Puerto Vallarta',
        locationMap: 'https://maps.google.com/?q=Zona+Romantica+Puerto+Vallarta+Mexico',
        desc: "Not done yet. Never done.",
        dtStart: '20260308T030000Z',
        dtEnd: '20260308T070000Z',
        highlight: false,
      },
    ],
  },
  {
    date: 'Sunday, March 8',
    subtitle: 'Alley Cat Day Cruise',
    emoji: '⛵',
    events: [
      {
        id: 'mar8-depart',
        time: '8:50 AM',
        title: 'Depart Villa — Boat Pickup',
        icon: '🚌',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: "Do not be late. The boat has exactly zero patience and we aren't missing it.",
        dtStart: '20260308T145000Z',
        dtEnd: '20260308T160000Z',
        highlight: false,
      },
      {
        id: 'mar8-cruise',
        time: '10:00 AM – 4:00 PM',
        title: 'Alley Cat Day Cruise — Open Bar',
        icon: '⛵',
        location: 'Alley Cat Sailing, Puerto Vallarta',
        locationMap: 'https://maps.google.com/?q=Alley+Cat+Sailing+Puerto+Vallarta+Mexico',
        desc: "Full day on the Pacific. Catamaran. Breakfast and lunch on board. Open. Bar. Pacific views as far as the eye can see. A genuine moment.",
        dtStart: '20260308T160000Z',
        dtEnd: '20260308T220000Z',
        highlight: true,
      },
      {
        id: 'mar8-return',
        time: '5:00 PM',
        title: 'Return to Villa · Snacks',
        icon: '🏡',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Back to base. Snacks waiting. You survived the Pacific. Congratulations.',
        dtStart: '20260308T230000Z',
        dtEnd: '20260309T000000Z',
        highlight: false,
      },
      {
        id: 'mar8-dinner',
        time: '7:00 PM',
        title: 'Dinner',
        icon: '🍽️',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Dinner at the villa before the night begins.',
        dtStart: '20260309T010000Z',
        dtEnd: '20260309T030000Z',
        highlight: false,
      },
      {
        id: 'mar8-out',
        time: 'Late Night',
        title: 'Go Out in Puerto Vallarta',
        icon: '🕺',
        location: 'Zona Romántica, Puerto Vallarta',
        locationMap: 'https://maps.google.com/?q=Zona+Romantica+Puerto+Vallarta+Mexico',
        desc: "After a full day on the water, obviously the correct decision is more.",
        dtStart: '20260309T030000Z',
        dtEnd: '20260309T070000Z',
        highlight: false,
      },
    ],
  },
  {
    date: 'Monday, March 9',
    subtitle: 'Recovery Day',
    emoji: '😌',
    events: [
      {
        id: 'mar9-breakfast',
        time: '10:00 AM',
        title: 'Breakfast',
        icon: '🥐',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'No rush. Take your time. This is a recovery day.',
        dtStart: '20260309T160000Z',
        dtEnd: '20260309T180000Z',
        highlight: false,
      },
      {
        id: 'mar9-lunch',
        time: '1:00 PM',
        title: 'Lunch',
        icon: '🥗',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'A slow, beautiful afternoon by the pool. Hydrate.',
        dtStart: '20260309T190000Z',
        dtEnd: '20260309T210000Z',
        highlight: false,
      },
      {
        id: 'mar9-dinner',
        time: '7:00 PM',
        title: 'Dinner',
        icon: '🍽️',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'Last real dinner of the trip. Soak it in.',
        dtStart: '20260310T010000Z',
        dtEnd: '20260310T030000Z',
        highlight: false,
      },
    ],
  },
  {
    date: 'Tuesday, March 10',
    subtitle: 'Checkout Day',
    emoji: '😭',
    events: [
      {
        id: 'mar10-breakfast',
        time: '10:00 AM',
        title: 'Breakfast',
        icon: '🥐',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: 'One last breakfast at the villa. Menu coming soon.',
        dtStart: '20260310T160000Z',
        dtEnd: '20260310T170000Z',
        highlight: false,
      },
      {
        id: 'mar10-checkout',
        time: 'By 11:00 AM',
        title: 'Check Out — Head Home',
        icon: '✈️',
        location: 'Las Villas PV',
        locationMap: 'https://maps.app.goo.gl/csg12ny6PfZZEig56',
        desc: "Pack your bags. Tip the staff. Hug everyone. Checkout is 11AM. It's not goodbye, it's see you on the group chat.",
        dtStart: '20260310T170000Z',
        dtEnd: '20260310T190000Z',
        highlight: false,
      },
    ],
  },
];

// ── Meals Data ────────────────────────────────────────────────
const MEALS = [
  {
    date: 'March 5 · Arrival Day',
    meals: [
      { type: 'dinner',    icon: '🍽️', title: 'Welcome Dinner',    time: '7:00 PM',    desc: 'Menu coming soon — trust that it will be iconic.' },
    ],
  },
  {
    date: 'March 6 · Birthday Dinner Day',
    meals: [
      { type: 'breakfast', icon: '🥐', title: 'Breakfast',         time: '10:00 AM',   desc: 'Menu coming soon.' },
      { type: 'lunch',     icon: '🥗', title: 'Lunch',             time: '1:00 PM',    desc: 'Menu coming soon.' },
      { type: 'dinner',    icon: '🍽️', title: 'Birthday Dinner',   time: '7:00 PM',    desc: 'Menu coming soon. Bob wig required, five-star energy mandatory.' },
    ],
  },
  {
    date: 'March 7 · Mantamar Day',
    meals: [
      { type: 'breakfast', icon: '🥐', title: 'Breakfast',                 time: '10:00 AM',    desc: 'Menu coming soon.' },
      { type: 'lunch',     icon: '🍹', title: 'Lunch at Mantamar',         time: 'At the club', desc: 'Beach club fare. Menu coming soon.' },
      { type: 'dinner',    icon: '🍽️', title: 'Dinner',                    time: '7:00 PM',    desc: 'Menu coming soon.' },
    ],
  },
  {
    date: 'March 8 · Cruise Day',
    meals: [
      { type: 'breakfast', icon: '🥐', title: 'Breakfast on the Alley Cat', time: '10:00 AM', desc: 'Fresh fruit · Coffee cake<br>Juice · Coffee' },
      { type: 'lunch',     icon: '🌮', title: 'Lunch on the Alley Cat',     time: 'On board',  desc: 'Grilled chicken &amp; veggie fajitas<br>Rice · Beans · Corn tortillas · Salsas<br>Nachos · Quesadillas · Chips &amp; salsa · Guacamole<br><strong>🍹 Full open bar</strong>' },
      { type: 'dinner',    icon: '🍽️', title: 'Dinner',                     time: '7:00 PM',  desc: 'Menu coming soon.' },
    ],
  },
  {
    date: 'March 9 · Recovery Day',
    meals: [
      { type: 'breakfast', icon: '🥐', title: 'Breakfast', time: '10:00 AM', desc: 'Menu coming soon.' },
      { type: 'lunch',     icon: '🥗', title: 'Lunch',     time: '1:00 PM',  desc: 'Menu coming soon.' },
      { type: 'dinner',    icon: '🍽️', title: 'Dinner',    time: '7:00 PM',  desc: 'Last dinner of the trip. Menu coming soon.' },
    ],
  },
  {
    date: 'March 10 · Checkout Day',
    meals: [
      { type: 'breakfast', icon: '🥐', title: 'Breakfast', time: '10:00 AM', desc: 'Menu coming soon.' },
    ],
  },
];

// ── Room Data ─────────────────────────────────────────────────
const IMG_BASE = '/Jared30/PV%20site%20assets/';

const ROOMS = [
  { room: 'Forte Penthouse Suite', icon: '👑', guests: ['Jared Schifrien', 'Michael Restiano'], url: 'https://www.lasvillaspv.com/fonte-penthouse',  image: 'Forte_Penthouse_.JPG' },
  { room: 'Terraza Suite',         icon: '🌅', guests: ['Brandon Azoulai', 'Tristan James'],    url: 'https://www.lasvillaspv.com/terrazasuite',    image: 'Terraza_Suite.JPG' },
  { room: 'Terraza Room',          icon: '🏠', guests: ['Charlie Rodgers', 'David Herman'],     url: 'https://www.lasvillaspv.com/terrazaroom',     image: 'Terraza_Room.JPG' },
  { room: 'Pool Suite',            icon: '🏊', guests: ['Eric Miller', 'Stephan Giordani'],      url: 'https://www.lasvillaspv.com/poolsuite',       image: 'Pool_Suite.JPG' },
  { room: 'Garden Room',           icon: '🌿', guests: ['Sam Canning-Kaplan', 'Dylon Walker'],  url: 'https://www.lasvillaspv.com/gardenroom',      image: 'Garden_Room.JPG' },
  { room: 'Mia Horizon Suite',     icon: '🌊', guests: ['Katherine Droppa', 'Nick Lopresto'],   url: 'https://www.lasvillaspv.com/miahorizonsuite', image: 'Mia_Horizon_Suite.JPG' },
  { room: 'Mia Palmera Suite',     icon: '🌴', guests: ['Ryan Spatz', 'Matt Giddens'],          url: 'https://www.lasvillaspv.com/miapalmerasuite', image: 'Mia_Palmera_Suite.JPG' },
  { room: 'Mia Terraza Room',      icon: '✨', guests: ['Brandon Buchthal', 'Charlie Ainbender'], url: 'https://www.lasvillaspv.com/miaterrazaroom', image: 'Mia_Terrazza_Room.JPG' },
];

// Build lookup: lowercase name -> { room, icon, roommate, url, image }
const ROOM_LOOKUP = {};
ROOMS.forEach(r => {
  r.guests.forEach((g, i) => {
    ROOM_LOOKUP[g.toLowerCase()] = {
      room: r.room,
      icon: r.icon,
      roommate: r.guests[1 - i] || null,
      url: r.url,
      image: r.image,
    };
  });
});

// ── Flights Data ──────────────────────────────────────────────

const FLIGHTS = {
  arrivals: [
    { flight: 'AS248',  date: '2026-03-05', airline: 'Alaska Airlines',  guests: ['Michael Restiano', 'Jared Schifrien', 'Nicholas Lopresto', 'Katherine Droppa', 'Charlie Rodgers', 'Charlie Ainbender'] },
    { flight: 'Y4280',  date: '2026-03-05', airline: 'Volaris',          guests: ['Stephan Giordani', 'Eric Miller'] },
    { flight: 'AM334',  date: '2026-03-05', airline: 'Aeroméxico',       guests: ['Brandon Buchthal'] },
    { flight: 'UA1452', date: '2026-03-05', airline: 'United Airlines',  guests: ['Ryan Spatz', 'Matt Giddens'] },
    { flight: 'DL1941', date: '2026-03-05', airline: 'Delta',            guests: ['Tristan Azoulai-James', 'Brandon Azoulai-James', 'Sam Kanning-Caplan'] },
    { flight: 'AM336',  date: '2026-03-05', airline: 'Aeroméxico',       guests: ['Dylon Walker'] },
    { flight: 'AS248',  date: '2026-03-06', airline: 'Alaska Airlines',  guests: ['David Herman'] },
  ],
  departures: [
    { flight: 'AS249',  date: '2026-03-10', airline: 'Alaska Airlines',  guests: ['Michael Restiano', 'Jared Schifrien', 'Nicholas Lopresto', 'Katherine Droppa', 'Charlie Rodgers', 'Charlie Ainbender', 'Stephan Giordani', 'Eric Miller', 'David Herman'] },
    { flight: 'DL1816', date: '2026-03-10', airline: 'Delta',            guests: ['Brandon Buchthal', 'Tristan Azoulai-James', 'Brandon Azoulai-James', 'Sam Kanning-Caplan'] },
    { flight: 'AA2503', date: '2026-03-10', airline: 'American Airlines', guests: ['Ryan Spatz', 'Matt Giddens'] },
    { flight: 'VB1167', date: '2026-03-10', airline: 'VivaAerobus',      guests: ['Dylon Walker'] },
  ],
};

const FLIGHT_CACHE = {};
let activeFlightTab = 'arrivals';

function flightCardKey(f) {
  return `${f.flight}-${f.date.replace(/-/g, '')}`;
}

function formatFlightNum(f) {
  // "AS248" → "AS 248", "Y4280" → "Y4 280"
  return f.replace(/^([A-Z]{2}|[A-Z]\d)(\d+)$/, '$1 $2');
}

function flightStatusInfo(status) {
  const map = {
    Expected:  { cls: 'expected',  text: 'On Schedule' },
    EnRoute:   { cls: 'active',    text: 'In the Air' },
    Landed:    { cls: 'landed',    text: 'Landed' },
    Departed:  { cls: 'departed',  text: 'Departed' },
    Delayed:   { cls: 'delayed',   text: 'Delayed' },
    Cancelled: { cls: 'cancelled', text: 'Cancelled' },
    Diverted:  { cls: 'diverted',  text: 'Diverted' },
    Unknown:   { cls: 'unknown',   text: 'Unknown' },
  };
  return map[status] || { cls: 'unknown', text: '—' };
}

function parseAeroTime(str) {
  // "2026-03-05 10:00-08:00" → "10:00 AM"
  if (!str) return null;
  const m = str.match(/\s(\d{2}):(\d{2})/);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const min = m[2];
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${min} ${ampm}`;
}

function getRelevantSegment(dataArray, type) {
  if (!Array.isArray(dataArray) || !dataArray.length) return null;
  if (type === 'arrivals') {
    return dataArray.find(s => s.arrival?.airport?.iata === 'PVR') || dataArray[0];
  }
  return dataArray.find(s => s.departure?.airport?.iata === 'PVR') || dataArray[0];
}

function buildTimeHTML(sched, revised) {
  if (!sched) return '<div class="flight-route-time">—</div>';
  const hasDelay = revised && revised !== sched;
  if (hasDelay) {
    return `<div class="flight-route-time flight-route-time--original">${sched}</div>
            <div class="flight-route-time flight-route-time--revised">${revised}</div>`;
  }
  return `<div class="flight-route-time">${sched}</div>`;
}

function renderFlightCardHTML(f, defaultDate) {
  const key = flightCardKey(f);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const [, mo, dy] = f.date.split('-');
  const dateBadge = f.date !== defaultDate
    ? `<span class="flight-date-tag">${months[+mo - 1]} ${+dy}</span>`
    : '';
  const guestChips = f.guests.map(g => `<span class="flight-guest">${g}</span>`).join('');

  return `
    <div class="flight-card" data-flight-key="${key}">
      <div class="flight-card-header">
        <div>
          <div class="flight-number">${formatFlightNum(f.flight)}${dateBadge}</div>
          <div class="flight-airline">${f.airline}</div>
        </div>
        <div class="flight-status-badge flight-status--loading" id="fstatus-${key}">
          <span class="flight-status-dot"></span>
          <span class="flight-status-text">Loading</span>
        </div>
      </div>
      <div class="flight-route" id="froute-${key}">
        <div class="flight-route-node">
          <div class="flight-route-airport">—</div>
          <div class="flight-route-city"></div>
          <div class="flight-route-time">—</div>
        </div>
        <div class="flight-route-mid">
          <span class="flight-route-arrow">✈</span>
        </div>
        <div class="flight-route-node flight-route-node--dest">
          <div class="flight-route-airport">—</div>
          <div class="flight-route-city"></div>
          <div class="flight-route-time">—</div>
        </div>
      </div>
      <div class="flight-guests">${guestChips}</div>
    </div>
  `;
}

function updateFlightCard(key, liveData, type) {
  const statusEl = document.getElementById(`fstatus-${key}`);
  const routeEl  = document.getElementById(`froute-${key}`);
  if (!statusEl || !routeEl) return;

  if (!liveData || liveData.error) {
    console.error(`[flights] card ${key}:`, liveData?.error || 'null response', liveData?.detail || '');
    statusEl.className = 'flight-status-badge flight-status--error';
    statusEl.querySelector('.flight-status-text').textContent = 'Unavailable';
    return;
  }

  const seg = getRelevantSegment(liveData, type);
  if (!seg) {
    statusEl.className = 'flight-status-badge flight-status--unknown';
    statusEl.querySelector('.flight-status-text').textContent = 'No Data';
    return;
  }

  // Status badge
  const info = flightStatusInfo(seg.status);
  statusEl.className = `flight-status-badge flight-status--${info.cls}`;
  statusEl.querySelector('.flight-status-text').textContent = info.text;

  // Route
  const dep = seg.departure;
  const arr = seg.arrival;
  routeEl.innerHTML = `
    <div class="flight-route-node">
      <div class="flight-route-airport">${dep?.airport?.iata || '—'}</div>
      <div class="flight-route-city">${dep?.airport?.shortName || dep?.airport?.municipalityName || ''}</div>
      ${buildTimeHTML(parseAeroTime(dep?.scheduledTime?.local), parseAeroTime(dep?.revisedTime?.local))}
    </div>
    <div class="flight-route-mid">
      <span class="flight-route-arrow">✈</span>
    </div>
    <div class="flight-route-node flight-route-node--dest">
      <div class="flight-route-airport">${arr?.airport?.iata || '—'}</div>
      <div class="flight-route-city">${arr?.airport?.shortName || arr?.airport?.municipalityName || ''}</div>
      ${buildTimeHTML(parseAeroTime(arr?.scheduledTime?.local), parseAeroTime(arr?.revisedTime?.local))}
    </div>
  `;
}

async function fetchFlightData(flightNum, date) {
  const key = `${flightNum}|${date}`;
  const cached = FLIGHT_CACHE[key];
  if (cached && (Date.now() - cached.fetchedAt) < 5 * 60 * 1000) return cached.data;

  try {
    const base = import.meta.env.BASE_URL; // e.g. /Jared30
    const resp = await fetch(`${base}/api/flight-status?flight=${flightNum}&date=${date}`);
    const text = await resp.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error(`[flights] ${flightNum}/${date} → HTTP ${resp.status}, non-JSON:`, text.slice(0, 300));
      data = { error: `HTTP ${resp.status}` };
    }
    if (!resp.ok) {
      console.error(`[flights] ${flightNum}/${date} → HTTP ${resp.status}:`, data);
    }
    FLIGHT_CACHE[key] = { data, fetchedAt: Date.now() };
    return data;
  } catch (err) {
    console.error(`[flights] ${flightNum}/${date} → fetch failed:`, err);
    return null;
  }
}

function renderFlightsPanel(tab) {
  const panel = document.getElementById('flightsPanel');
  const defaultDate = tab === 'arrivals' ? '2026-03-05' : '2026-03-10';
  panel.innerHTML = FLIGHTS[tab].map(f => renderFlightCardHTML(f, defaultDate)).join('');
}

async function loadFlightData(tab) {
  const flights = FLIGHTS[tab];

  // Fetch sequentially with a small delay to avoid hitting rate limits
  for (let i = 0; i < flights.length; i++) {
    if (i > 0) await new Promise(r => setTimeout(r, 300));
    const data = await fetchFlightData(flights[i].flight, flights[i].date);
    updateFlightCard(flightCardKey(flights[i]), data, tab);
  }

  const footer = document.getElementById('flightsFooter');
  const lastUpdated = document.getElementById('flightsLastUpdated');
  if (footer && lastUpdated) {
    footer.hidden = false;
    lastUpdated.textContent = `Updated ${new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
  }
}

function initFlights() {
  renderFlightsPanel('arrivals');
  loadFlightData('arrivals');

  document.querySelectorAll('#flightTabs .flight-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const ftab = tab.dataset.ftab;
      activeFlightTab = ftab;
      document.querySelectorAll('#flightTabs .flight-tab').forEach(t => {
        const active = t.dataset.ftab === ftab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderFlightsPanel(ftab);
      loadFlightData(ftab);
    });
  });

  document.getElementById('flightsRefreshBtn')?.addEventListener('click', () => {
    FLIGHTS[activeFlightTab].forEach(f => { delete FLIGHT_CACHE[`${f.flight}|${f.date}`]; });
    renderFlightsPanel(activeFlightTab);
    loadFlightData(activeFlightTab);
  });

  // Auto-refresh every 5 minutes
  setInterval(() => loadFlightData(activeFlightTab), 5 * 60 * 1000);
}

// ── iCal Utilities ────────────────────────────────────────────
function escapeICS(str) {
  return str.replace(/[\\,;]/g, ch => '\\' + ch).replace(/\n/g, '\\n');
}

function eventToVEVENT(ev) {
  return [
    'BEGIN:VEVENT',
    `UID:${ev.id}@jared30bday.pvmx2026`,
    `DTSTART:${ev.dtStart}`,
    `DTEND:${ev.dtEnd}`,
    `SUMMARY:${escapeICS("Jared's 30th — " + ev.title)}`,
    `DESCRIPTION:${escapeICS(ev.desc + ' | Location: ' + ev.location + ', Puerto Vallarta, Mexico')}`,
    `LOCATION:${escapeICS(ev.location + ', Puerto Vallarta, Mexico')}`,
    `URL:${ev.locationMap}`,
    'END:VEVENT',
  ].join('\r\n');
}

function wrapInCalendar(vevents) {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Jared 30th Birthday PV 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    "X-WR-CALNAME:Jared's 30th Birthday – Puerto Vallarta 2026",
    'X-WR-TIMEZONE:America/Mexico_City',
    ...vevents,
    'END:VCALENDAR',
  ].join('\r\n');
}

function downloadICS(content, filename) {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ── Render: Schedule ─────────────────────────────────────────
function renderScheduleDay(dayIndex) {
  const day = SCHEDULE[dayIndex];
  const panel = document.getElementById('schedulePanel');

  const eventsHTML = day.events.map(ev => `
    <div class="event-card ${ev.highlight ? 'event-card--highlight' : ''}">
      <div class="event-time">${ev.time}</div>
      <div class="event-main">
        <div class="event-icon-title">
          <span class="event-icon">${ev.icon}</span>
          <span class="event-title">${ev.title}</span>
        </div>
        <p class="event-desc">${ev.desc}</p>
        <div class="event-location">
          📍 <a href="${ev.locationMap}" target="_blank" rel="noopener">${ev.location}</a>
        </div>
      </div>
      <div class="event-actions">
        <button class="event-dl-btn" data-event-id="${ev.id}" data-day="${dayIndex}">
          ⬇ Add to Calendar
        </button>
      </div>
    </div>
  `).join('');

  panel.innerHTML = `
    <div class="day-header">
      <div class="day-header-emoji">${day.emoji}</div>
      <div class="day-header-text">
        <h3>${day.date}</h3>
        <p>${day.subtitle}</p>
      </div>
    </div>
    <div class="events-list">${eventsHTML}</div>
  `;

  panel.querySelectorAll('.event-dl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const evId = btn.dataset.eventId;
      const di = parseInt(btn.dataset.day);
      const ev = SCHEDULE[di].events.find(e => e.id === evId);
      if (!ev) return;
      downloadICS(wrapInCalendar([eventToVEVENT(ev)]), `jared-30-${evId}.ics`);
    });
  });
}

// ── Render: Meals ─────────────────────────────────────────────
function renderMealsDay(dayIndex) {
  const day = MEALS[dayIndex];
  const panel = document.getElementById('mealsPanel');

  panel.innerHTML = `
    <div class="meals-day-header">${day.date}</div>
    <div class="meals-grid">
      ${day.meals.map(m => `
        <div class="meal-card" data-meal-type="${m.type}">
          <div class="meal-card-icon">${m.icon}</div>
          <div class="meal-card-time">${m.time}</div>
          <div class="meal-card-title">${m.title}</div>
          <p class="meal-card-desc">${m.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// ── Render: Room List ─────────────────────────────────────────
function renderRoomList() {
  const list = document.getElementById('roomList');
  list.innerHTML = ROOMS.map(r => `
    <a class="room-list-card" href="${r.url}" target="_blank" rel="noopener">
      <div class="rlc-room-name">${r.icon} ${r.room}</div>
      <div class="rlc-guests">${r.guests.join(' & ')}</div>
    </a>
  `).join('');
}

// ── Room Finder ───────────────────────────────────────────────
function lookupRoom(name) {
  const result = document.getElementById('roomResult');
  const trimmed = name.trim();
  if (!trimmed) { result.innerHTML = ''; result.style.display = 'none'; return; }

  const key = trimmed.toLowerCase();
  let match = ROOM_LOOKUP[key];

  // Try partial match on first name
  if (!match) {
    const allKeys = Object.keys(ROOM_LOOKUP);
    const firstName = key.split(' ')[0];
    const found = allKeys.find(k => k.startsWith(firstName) || k.includes(key));
    if (found) match = ROOM_LOOKUP[found];
  }

  result.style.display = 'block';
  if (!match) {
    result.className = 'room-result room-result--not-found';
    result.innerHTML = `
      <div class="room-result-icon">🤷</div>
      <div class="room-result-label">Hmm, not finding you…</div>
      <div class="room-result-name" style="font-size:1.1rem;color:rgba(255,255,255,0.65)">Try your full name, or check the full list below.</div>
    `;
    return;
  }

  result.className = 'room-result';
  result.innerHTML = `
    <div class="room-result-icon">${match.icon}</div>
    <div class="room-result-label">Your room</div>
    <div class="room-result-name">${match.room}</div>
    <div class="room-result-roomie">Rooming with <strong>${match.roommate || 'yourself — luxurious!'}</strong></div>
    <div class="room-result-preview" style="background-image:url('${IMG_BASE}${match.image}')"></div>
    <a href="${match.url}" target="_blank" rel="noopener" class="room-result-link">View your room ↗</a>
  `;
}

// ── Countdown ─────────────────────────────────────────────────
function updateCountdown() {
  const target = new Date('2026-03-05T06:00:00Z'); // midnight CST (UTC-6)
  const diff = target - Date.now();

  if (diff <= 0) {
    ['cdDays','cdHours','cdMins'].forEach(id => { document.getElementById(id).textContent = '0'; });
    return;
  }
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  document.getElementById('cdDays').textContent  = days;
  document.getElementById('cdHours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cdMins').textContent  = String(mins).padStart(2, '0');
}

// ── Nav ───────────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  const ham   = document.getElementById('navHamburger');
  const links = document.getElementById('navLinks');
  ham.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// ── Scroll Reveal ─────────────────────────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('.fade-up');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

// ── Tabs ──────────────────────────────────────────────────────
function initTabs() {
  document.querySelectorAll('#dayTabs .day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#dayTabs .day-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      renderScheduleDay(parseInt(tab.dataset.day));
    });
  });

  document.querySelectorAll('#mealTabs .day-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#mealTabs .day-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
      tab.classList.add('active'); tab.setAttribute('aria-selected','true');
      renderMealsDay(parseInt(tab.dataset.mday));
    });
  });
}

// ── Room Finder Events ────────────────────────────────────────
function initRoomFinder() {
  const input      = document.getElementById('roomInput');
  const btn        = document.getElementById('roomSearchBtn');
  const toggleBtn  = document.getElementById('roomListToggle');
  const roomList   = document.getElementById('roomList');

  btn.addEventListener('click',  () => lookupRoom(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') lookupRoom(input.value); });

  toggleBtn.addEventListener('click', () => {
    const hidden = roomList.hasAttribute('hidden');
    roomList.toggleAttribute('hidden');
    toggleBtn.textContent = hidden ? 'Hide room assignments ↑' : 'Show all room assignments ↓';
  });

  renderRoomList();
}

// ── Download All ──────────────────────────────────────────────
function initDownloadAll() {
  document.getElementById('downloadAllBtn').addEventListener('click', () => {
    const vevents = SCHEDULE.flatMap(day => day.events.map(ev => eventToVEVENT(ev)));
    downloadICS(wrapInCalendar(vevents), 'jared-30th-bday-pv-full-trip.ics');
  });
}

// ── Villa Requests Form ───────────────────────────────────────
function initRequestsForm() {
  const form     = document.getElementById('requestsForm');
  const feedback = document.getElementById('requestsFeedback');
  const submitBtn = document.getElementById('requestsSubmit');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name    = document.getElementById('requestName').value;
    const request = document.getElementById('requestText').value;

    if (!name || !request.trim()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    feedback.hidden = true;

    try {
      const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxLWr6YaU1881CMshQtzoeoX98xMsUx_76cf5PAjYURI3D3jxCWnmOmcph0dWVPojQ/exec';
      const params = new URLSearchParams({
        name: name.trim(),
        request: request.trim(),
        timestamp: new Date().toISOString(),
      });
      const resp = await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`);
      const data = await resp.json();

      if (data.ok) {
        feedback.textContent = '✓ Request submitted! We\'ve got you covered.';
        feedback.className = 'requests-feedback requests-feedback--success';
        form.reset();
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      feedback.textContent = `✗ Something went wrong: ${detail}`;
      feedback.className = 'requests-feedback requests-feedback--error';
    } finally {
      feedback.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Request';
    }
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFlights();
  initTabs();
  initDownloadAll();
  initRoomFinder();
  initRequestsForm();
  initScrollReveal();
  renderScheduleDay(0);
  renderMealsDay(0);
  updateCountdown();
  setInterval(updateCountdown, 60000);
});
