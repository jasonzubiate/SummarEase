"use client";

function Footer() {
  return (
    <footer className="flex gap-2">
      <button
        type="button"
        onClick={() =>
          window.open("https://github.com/jasonzubiate/SummarEase")
        }
        className="btn"
      >
        GitHub
      </button>
      <button
        type="button"
        onClick={() => window.open("https://jasonzubiate.com")}
        className="btn"
      >
        Creator
      </button>
    </footer>
  );
}

export default Footer;
