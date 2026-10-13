/**
 * A small photo placeholder clipped to the notebook page with a paperclip.
 * The photo area is a dashed-bordered empty frame the user can replace later.
 */
export default function PhotoPlaceholder() {
  return (
    <div className="photo-placeholder">
      <svg className="paperclip" viewBox="0 0 24 60" aria-hidden="true">
        <path
          d="M6 5 L6 50 Q6 56 12 56 Q18 56 18 50 L18 14 Q18 8 12 8 Q6 8 6 14 L6 44 Q6 49 12 49 Q16 49 16 44 L16 20"
          fill="none"
          stroke="#A8A8A8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="photo-frame">
        <div className="photo-inner">
          <span className="photo-text">
            ✿ your<br />photo<br />here ✿
          </span>
        </div>
      </div>
    </div>
  )
}
