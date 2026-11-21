// Abstract UI mockups used as project preview images (replace with real screenshots anytime).
const Line = ({ w = "w-full", c = "bg-white/10" }) => (
  <div className={`h-1.5 rounded ${w} ${c}`} />
);

function VerifyPreview() {
  return (
    <div className="w-[78%] rounded-lg bg-[#0A1226] border border-line p-3 shadow-glow">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-gradient-brand" />
        <Line w="w-1/3" />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 rounded bg-white/5 border border-line" />
        ))}
      </div>
      <div className="flex items-center justify-between rounded bg-green-400/10 border border-green-400/30 px-2.5 py-2">
        <Line w="w-1/2" c="bg-green-300/40" />
        <span className="text-[9px] text-green-300 font-mono">VERIFIED</span>
      </div>
    </div>
  );
}

function FoodPreview() {
  return (
    <div className="flex gap-3 items-end">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`rounded-xl bg-[#0A1226] border border-line p-2 shadow-glow ${i === 1 ? "w-20 h-32 -translate-y-2" : "w-16 h-28"}`}
        >
          <div className="h-10 rounded bg-gradient-to-br from-purple/50 to-accent/40 mb-2" />
          <Line w="w-3/4" />
          <div className="h-1.5" />
          <Line w="w-1/2" c="bg-white/5" />
        </div>
      ))}
    </div>
  );
}

function ShopPreview() {
  return (
    <div className="w-[78%] rounded-lg bg-[#0A1226] border border-line p-3 shadow-glow">
      <div className="flex justify-between mb-3">
        <Line w="w-1/4" />
        <div className="w-4 h-4 rounded bg-purple/50" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded bg-white/5 border border-line p-1.5">
            <div className="h-6 rounded bg-gradient-to-br from-purple/40 to-accent/30 mb-1.5" />
            <Line w="w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}

const MAP = { verify: VerifyPreview, food: FoodPreview, shop: ShopPreview };

export default function ProjectPreview({ variant }) {
  const View = MAP[variant] ?? VerifyPreview;
  return <View />;
}
