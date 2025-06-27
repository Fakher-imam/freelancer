import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const stored = JSON.parse(localStorage.getItem("portfolios")) || [];

    const updated = stored.map((p) => {
      if (!p.createdAt) {
        return { ...p, createdAt: new Date().toISOString() };
      }
      return p;
    });

    localStorage.setItem("portfolios", JSON.stringify(updated));

    const userPortfolios = updated.filter((p) => p.userEmail === currentUser?.email);
    setPortfolios(userPortfolios);
  }, []);

  const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this portfolio?");
  if (!confirmDelete) return;

  const updated = portfolios.filter((p) => p.id !== id);
  const allPortfolios = JSON.parse(localStorage.getItem("portfolios")) || [];

  const filteredAll = allPortfolios.filter((p) => p.id !== id);

  localStorage.setItem("portfolios", JSON.stringify(filteredAll));
  setPortfolios(updated);
};


  return (
    <div
      className="min-vh-100 py-5 px-3"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: "#f1f1f1",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="mb-5">
          <h1 className="display-5 fw-bold">Welcome To Dashboard 👋</h1>
          <p className="text-muted">Your personalized dashboard</p>
        </div>

        <div className="row g-3 mb-5">
          {[
            { label: "Portfolios", value: portfolios.length, color: "#00f7ff" },
            { label: "Clients", value: 5, color: "#00ffb7" },
            { label: "Total Views", value: 112, color: "#ffe600" },
            { label: "AI Assistant", value: "24/7", color: "#ff77ff" },
          ].map((stat, i) => (
            <div className="col-md-3" key={i}>
              <div
                className="card text-center border-0 shadow"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  color: stat.color,
                }}
              >
                <div className="card-body">
                  <h5>{stat.value}</h5>
                  <p className="text-white-50">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5">
          <h3 className="fw-semibold mb-4">📁 Your Portfolios</h3>
          <div className="row g-4">
            {portfolios.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="col-md-4"
              >
                <div
                  className="card h-100 shadow border-0"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                  }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{item.name || "Untitled"}</h5>
                    <p className="text-white-50 mb-2">
                      Created:{" "}
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString()
                        : "Unknown"}
                    </p>
                    <p className="text-white-50 small">
                      Template: <strong>{item.template}</strong> | Design: <strong>{item.design}</strong>
                    </p>
                 <Link
  to={`/editor/${item.id}`}
  className="btn btn-outline-info btn-sm me-2"
>
  ✏️ Edit
</Link>
<Link
  to={`/preview/${item.id}`}
  className="btn btn-outline-success btn-sm me-2"
>
  👁️ Preview
</Link>
<button
  onClick={() => handleDelete(item.id)}
  className="btn btn-outline-danger btn-sm"
>
  🗑️ Delete
</button>

                  </div>
                </div>
              </motion.div>
            ))}

            {/* ✅ Create New Portfolio with web/design-1 default */}
            <div className="col-md-4">
              <Link
                to="/services"
                onClick={() => localStorage.setItem("pendingTemplate", "web/design-1")}
                className="card h-100 d-flex align-items-center justify-content-center text-center text-info text-decoration-none border border-info"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div>+ Create New Portfolio</div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="fw-semibold mb-3">🕒 Recent Activity</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent text-white-50">
              ✅ Published “Techfolio” - 2 days ago
            </li>
            <li className="list-group-item bg-transparent text-white-50">
              📝 Edited “Creative Hub” - 5 days ago
            </li>
            <li className="list-group-item bg-transparent text-white-50">
              📥 Viewed “Writer Portfolio” - 1 week ago
            </li>
          </ul>
        </div>

        <div className="row g-3">
          <div className="col-md-3">
            <Link to="/setting" className="btn btn-outline-warning w-100">
              ⚙️ Settings
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/services" className="btn btn-outline-primary w-100">
              🛠️ Services
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/contact" className="btn btn-outline-info text-white w-100">
              ✉️ Contact
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/login" className="btn btn-outline-danger w-100">
              🚪 Logout
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
