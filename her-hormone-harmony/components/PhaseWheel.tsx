const CX = 200;
const CY = 200;
const R_OUTER = 190;
const R_INNER = 128;
const R_LABEL = (R_OUTER + R_INNER) / 2;

type Segment = {
  name: string;
  days: string;
  fill: string;
  startDeg: number;
  endDeg: number;
};

// Approximate share of a 28-day cycle. Individual cycles vary in length
// and in how each phase feels, this wheel is a starting orientation,
// not a diagnosis.
const segments: Segment[] = (() => {
  const order: [string, string, number][] = [
    ["Menstrual", "Days 1\u20135", 5],
    ["Follicular", "Days 6\u201314", 9],
    ["Ovulatory", "Days 15\u201318", 4],
    ["Luteal", "Days 19\u201328", 10],
  ];
  const colors: Record<string, string> = {
    Menstrual: "#D9A79C",
    Follicular: "#8A9A7E",
    Ovulatory: "#D4B599",
    Luteal: "#BF836D",
  };
  let cursor = 0;
  return order.map(([name, days, span]) => {
    const startDeg = cursor;
    const endDeg = cursor + (span / 28) * 360;
    cursor = endDeg;
    return { name, days, fill: colors[name], startDeg, endDeg };
  });
})();

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function ringSegmentPath(startDeg: number, endDeg: number) {
  const gap = 1.4; // degrees of breathing room between segments
  const s = startDeg + gap / 2;
  const e = endDeg - gap / 2;
  const large = e - s > 180 ? 1 : 0;

  const p1 = polar(CX, CY, R_OUTER, s);
  const p2 = polar(CX, CY, R_OUTER, e);
  const p3 = polar(CX, CY, R_INNER, e);
  const p4 = polar(CX, CY, R_INNER, s);

  return [
    `M ${p1.x} ${p1.y}`,
    `A ${R_OUTER} ${R_OUTER} 0 ${large} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${R_INNER} ${R_INNER} 0 ${large} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

export default function PhaseWheel() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Wheel showing the four menstrual cycle phases: menstrual, follicular, ovulatory, and luteal"
      className="h-auto w-full max-w-md"
    >
      {segments.map((seg) => {
        const mid = (seg.startDeg + seg.endDeg) / 2;
        const labelPos = polar(CX, CY, R_LABEL, mid);
        return (
          <g key={seg.name}>
            <path d={ringSegmentPath(seg.startDeg, seg.endDeg)} fill={seg.fill} />
            <text
              x={labelPos.x}
              y={labelPos.y - 6}
              textAnchor="middle"
              className="fill-ink text-[13px] font-medium"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              {seg.name}
            </text>
            <text
              x={labelPos.x}
              y={labelPos.y + 10}
              textAnchor="middle"
              className="fill-ink/60 text-[10px]"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              {seg.days}
            </text>
          </g>
        );
      })}
      <circle cx={CX} cy={CY} r={R_INNER - 6} fill="#F7F4ED" stroke="#D4B599" strokeWidth="1.5" />
      <text
        x={CX}
        y={CY - 6}
        textAnchor="middle"
        className="fill-forest text-[15px]"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        Your cycle,
      </text>
      <text
        x={CX}
        y={CY + 16}
        textAnchor="middle"
        className="fill-forest text-[15px]"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        your rhythm
      </text>
    </svg>
  );
}
