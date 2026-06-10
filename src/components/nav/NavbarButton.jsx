import { NavLink, Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const BEAM_GRADIENT =
  "bg-[conic-gradient(from_90deg_at_50%_50%,#f6df9a_0%,#d4af37_50%,#f6df9a_100%)]";

const BEAM_WIDTH = {
  thin: "p-px",
  medium: "p-1",
  thick: "p-2 sm:p-2.5",
};

/** Animated gold border frame (same beam as nav buttons) for cards and panels */
export function BorderBeamFrame({
  children,
  className = "",
  innerClassName = "",
  beamWidth = "thin",
  innerBg = "bg-white",
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", BEAM_WIDTH[beamWidth] ?? BEAM_WIDTH.thin, className)}>
      <span
        className={cn(
          "pointer-events-none absolute inset-[-1000%] animate-[spin_3s_linear_infinite]",
          BEAM_GRADIENT
        )}
        aria-hidden
      />
      <div className={cn("relative w-full overflow-hidden", innerBg, innerClassName)}>{children}</div>
    </div>
  );
}

function BorderBeamNav({ children, active = false, className = "" }) {
  return (
    <span
      className={cn(
        "group relative inline-flex h-10 overflow-hidden rounded-full p-px",
        "transition-transform duration-300 ease-out hover:scale-[1.05] active:scale-[0.98]",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-[#d4af37]/40 focus-within:ring-offset-2",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-[-1000%]",
          BEAM_GRADIENT,
          active
            ? "animate-[spin_1.5s_linear_infinite] group-hover:animate-[spin_0.9s_linear_infinite]"
            : "animate-[spin_2s_linear_infinite] group-hover:animate-[spin_1.1s_linear_infinite]"
        )}
      />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 py-1 text-sm font-medium backdrop-blur-3xl",
          "transition-all duration-300 ease-out",
          active
            ? "bg-gradient-to-r from-[#d4af37] to-[#f6df9a] text-black group-hover:from-[#c9a227] group-hover:to-[#fff0b3] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
            : "bg-white text-slate-900 group-hover:bg-[#fffbeb] group-hover:text-[#92400e] group-hover:shadow-[0_6px_22px_rgba(212,175,55,0.28)]"
        )}
      >
        {children}
      </span>
    </span>
  );
}

export function NavbarLinkButton({ to, label, active, onClick, className = "" }) {
  const beam = (
    <BorderBeamNav active={active} className={className}>
      {label}
    </BorderBeamNav>
  );

  if (to) {
    return (
      <NavLink to={to} onClick={onClick} className="inline-flex no-underline">
        {beam}
      </NavLink>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-flex border-0 bg-transparent p-0">
      {beam}
    </button>
  );
}

export function NavbarMobileLinkButton({ to, label, active, onClick, className = "" }) {
  return (
    <Link to={to} onClick={onClick} className="inline-flex w-fit no-underline">
      <BorderBeamNav active={active} className={className}>
        {label}
      </BorderBeamNav>
    </Link>
  );
}

export function NavbarCtaButton({ onClick, children, className = "" }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex border-0 bg-transparent p-0">
      <BorderBeamNav active className={className}>
        {children}
      </BorderBeamNav>
    </button>
  );
}
