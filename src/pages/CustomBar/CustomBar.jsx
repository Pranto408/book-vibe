import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const READ_COLOR = "#534AB7";
const WISH_COLOR = "#1D9E75";

const CustomBar = (props) => {
  const { x, y, width, height, fill, value } = props;
  if (!height || height <= 0) return null;
  const r = 5;
  return (
    <g>
      <path
        d={`M${x + r},${y} H${x + width - r} Q${x + width},${y} ${x + width},${y + r}
            V${y + height} H${x} V${y + r} Q${x},${y} ${x + r},${y}`}
        fill={fill}
      />
      <text
        x={x + width / 2}
        y={y - 7}
        textAnchor="middle"
        fontSize={11}
        fill="#888"
      >
        {value}
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e5e5e5",
        borderRadius: 8,
        padding: "10px 14px",
        fontSize: 13,
      }}
    >
      <p style={{ fontWeight: 500, marginBottom: 4 }}>{d.bookName}</p>
      <p
        style={{
          color: d.list === "read" ? READ_COLOR : WISH_COLOR,
          fontWeight: 500,
          margin: "0 0 3px",
        }}
      >
        {d.totalPages} Pages
      </p>
      <p style={{ color: "#888", margin: "0 0 3px" }}>
        {d.list === "read" ? "Read list" : "Wish list"}
      </p>
      <p style={{ color: "#EF9F27", margin: 0 }}>
        {"★".repeat(Math.floor(d.rating))}
        {"☆".repeat(5 - Math.floor(d.rating))} {d.rating}
      </p>
    </div>
  );
};

const BooksPageChart = () => {
  const { readlist, wishlist } = useContext(BookContext);

  const data = [
    ...readlist.map((b) => ({ ...b, list: "read" })),
    ...wishlist.map((b) => ({ ...b, list: "wish" })),
  ];

  const total = data.length;
  const avg = total
    ? Math.round(data.reduce((s, b) => s + b.totalPages, 0) / total)
    : 0;
  const max = total ? Math.max(...data.map((b) => b.totalPages)) : 0;
  const sum = data.reduce((s, b) => s + b.totalPages, 0);

  return (
    <div style={{ width: "100%", padding: "1.5rem" }}>
      <p style={{ fontSize: 18, fontWeight: 500, margin: "0 0 4px" }}>
        Books by page count
      </p>
      <p style={{ color: "#888", fontSize: 13, marginBottom: 24 }}>
        Custom Shape Bar Chart · Recharts
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 8,
          marginBottom: 24,
        }}
      >
        {[
          { label: "Total books", value: total },
          { label: "Avg pages", value: avg },
          { label: "Longest", value: max },
          { label: "Total pages", value: sum.toLocaleString() },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              background: "#f5f5f5",
              borderRadius: 8,
              padding: "12px 16px",
            }}
          >
            <p style={{ fontSize: 12, color: "#888", margin: "0 0 4px" }}>
              {label}
            </p>
            <p style={{ fontSize: 22, fontWeight: 500, margin: 0 }}>{value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 12,
            color: "#888",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: READ_COLOR,
              display: "inline-block",
            }}
          ></span>
          Read list
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontSize: 12,
            color: "#888",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: WISH_COLOR,
              display: "inline-block",
            }}
          ></span>
          Wish list
        </span>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <BarChart
          data={data}
          margin={{ top: 28, right: 12, left: 0, bottom: 8 }}
          barSize={40}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis
            dataKey="bookName"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="totalPages"
            isAnimationActive={true}
            shape={(props) => {
              const d = data[props.index];
              return (
                <CustomBar
                  {...props}
                  fill={d?.list === "read" ? READ_COLOR : WISH_COLOR}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BooksPageChart;
