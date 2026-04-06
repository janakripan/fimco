/**
 * StrokeText — artifact-free outlined text
 *
 * The WebkitTextStroke + color:transparent combo creates triangular artifacts
 * at glyph corners because the stroke renders on BOTH sides of the path.
 * Fix: use paintOrder:"stroke fill" so the stroke renders BEHIND the fill.
 * Set `fillColor` to match the background so it masks the inner stroke halves.
 *
 * Usage:
 *   // White background:
 *   <StrokeText strokeColor="#0E2A47" strokeWidth="3px" fillColor="#ffffff">
 *     Services
 *   </StrokeText>
 *
 *   // Dark/primary background:
 *   <StrokeText strokeColor="#ffffff" strokeWidth="3px" fillColor="#0E2A47">
 *     Vision
 *   </StrokeText>
 *
 * All extra props (className, style, etc.) are forwarded to the outer <span>.
 */
export default function StrokeText({
  children,
  strokeColor = "#0E2A47",
  strokeWidth = "2px",
  fillColor = "#ffffff",
  className = "",
  style = {},
  ...rest
}) {
  return (
    <span
      className={className}
      style={{
        WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
        color: fillColor,
        paintOrder: "stroke fill",
        WebkitPaintOrder: "stroke fill",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
