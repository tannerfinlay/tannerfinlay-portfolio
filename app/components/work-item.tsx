export default function WorkItem({ items }) {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index} className="pt-4">
            {item}
          </div>
        );
      })}
    </div>
  );
}
