export function loader() {
  return { name: "React Router" };
}

export function meta() {
  return [
    { title: "React Task App" },
    { name: "description", content: "Welcome to React Task App!" },
  ];
}

export default function Home(loaderData) {
  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-2xl">Hello...</h1>
      </div>
    </>
  );
}
