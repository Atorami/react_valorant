const Navigation = () => {
  const nav = ["Home", "Agents", "Stats"];
  return (
    <ul>
      {nav.map((val) => (
        <li>{val}</li>
      ))}
    </ul>
  );
};

export default Navigation;
