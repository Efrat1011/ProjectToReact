export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <ul>
        <li>💼 Шоттар</li>
        <li>📄 Қызметтер</li>
        <li>📊 Аналитика</li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    padding: "20px",
    backgroundColor: "#f1f1f1",
    height: "100%",
  },
};
