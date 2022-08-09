import Marquee from "react-fast-marquee";

export const RowRun = () => {
  return (
    <div
      className="container footer"
      style={{
        color: "#c2c2c2",
        fontSize: "10px",
        fontWeight: 700,
        padding: "10px 0 25px",
      }}
    >
      <Marquee>
        DROP ARCHIVE DROP ARCHIVE DROP ARCHIVE DROP ARCHIVE DROP ARCHIVE DROP
        ARCHIVE DROP ARCHIVE DROP ARCHIVE DROP ARCHIVE DROP ARCHIVE DROP ARCHIVE
        DROP ARCHIVE DROP ARCHIVE DROP ARCHIVE
      </Marquee>
    </div>
  );
};
