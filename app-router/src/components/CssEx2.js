"use client";

export default function CssEx2() {
  return (
    <>
      <h1>CssEx2 Page</h1>
      <button className="button">버튼2</button>
      <style jsx>
        {`
          .button {
            background: blue;
            color: yellow;
          }
        `}
      </style>
    </>
  );
}
