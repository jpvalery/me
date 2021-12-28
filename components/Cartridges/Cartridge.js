export default function Cartridge({ title, color }) {
  var gradient = "";

  if (color === "slate") {
    var gradient = "from-slate-800 to-slate-700";
  }
  if (color === "gray") {
    var gradient = "from-gray-800 to-gray-700";
  }
  if (color === "zinc") {
    var gradient = "from-zinc-800 to-zinc-700";
  }
  if (color === "neutral") {
    var gradient = "from-neutral-800 to-neutral-700";
  }
  if (color === "stone") {
    var gradient = "from-stone-800 to-stone-700";
  }
  if (color === "red") {
    var gradient = "from-red-800 to-red-700";
  }
  if (color === "orange") {
    var gradient = "from-orange-800 to-orange-700";
  }
  if (color === "amber") {
    var gradient = "from-amber-800 to-amber-700";
  }
  if (color === "yellow") {
    var gradient = "from-yellow-700 to-yellow-600";
  }
  if (color === "lime") {
    var gradient = "from-lime-800 to-lime-700";
  }
  if (color === "green") {
    var gradient = "from-green-800 to-green-700";
  }
  if (color === "emerald") {
    var gradient = "from-emerald-800 to-emerald-700";
  }
  if (color === "teal") {
    var gradient = "from-teal-800 to-teal-700";
  }
  if (color === "cyan") {
    var gradient = "from-cyan-800 to-cyan-700";
  }
  if (color === "sky") {
    var gradient = "from-sky-800 to-sky-700";
  }
  if (color === "blue") {
    var gradient = "from-blue-800 to-blue-700";
  }
  if (color === "indigo") {
    var gradient = "from-indigo-800 to-indigo-700";
  }
  if (color === "violet") {
    var gradient = "from-violet-800 to-violet-700";
  }
  if (color === "purple") {
    var gradient = "from-purple-800 to-purple-700";
  }
  if (color === "fuchsia") {
    var gradient = "from-fuchsia-800 to-fuchsia-700";
  }
  if (color === "pink") {
    var gradient = "from-pink-800 to-pink-700";
  }
  if (color === "rose") {
    var gradient = "from-rose-800 to-rose-700";
  }

  const style = `flex flex-wrap items-center justify-center rounded-b-lg bg-gradient-to-b ${gradient} shadow-[inset_0_2.4em_3.6em_-1em_rgba(0,0,0,0.1)] border-black border-b border-x`;

  return (
    <div className="w-72 px-3 pt-0 pb-3 bg-gradient-to-t from-zinc-500 to-neutral-600 rounded-t-md rounded-b-xl shadow-[inset_0_-0.3em_0_0_rgba(0,0,0,0.45)]">
      <div className={style}>
        <div className="pt-3 pb-2">
          <h2 className="text-3xl font-bold text-stone-300 font-cartridge">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
