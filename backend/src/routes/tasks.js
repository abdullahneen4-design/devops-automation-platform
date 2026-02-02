const express = require("express");
const router = express.Router();
const db = require("../db/database");

// GET /tasks
router.get("/", (req, res) => {
  db.all("SELECT * FROM tasks", [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});

// POST /tasks
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Task name is required" });
  }

  db.run(
    "INSERT INTO tasks (name) VALUES (?)",
    [name],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to create task" });
      }

      console.log(`Task created with ID ${this.lastID}`);

      res.status(201).json({
        id: this.lastID,
        name,
        status: "pending",
      });
    }
  );
});

// POST /tasks/:id/run
router.post("/:id/run", (req, res) => {
  const { id } = req.params;

  db.run(
    "UPDATE tasks SET status = 'running' WHERE id = ?",
    [id],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to start task" });
      }

      console.log(`Task ${id} is running`);

      // simulate execution
      if (process.env.NODE_ENV !== "test") {
  setTimeout(() => {
    db.run(
      "UPDATE tasks SET status = 'success' WHERE id = ?",
      [id],
      () => console.log(`Task ${id} completed`)
    );
  }, 3000);
}

      res.json({ message: "Task started", taskId: id });
    }
  );
});

// ⚠️ لازم يكون آخر شي
module.exports = router;
