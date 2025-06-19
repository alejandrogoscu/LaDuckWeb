const db = require("./models"); // O "./config/db" según dónde tengas sequelize

async function testConnection() {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Conexión establecida con éxito.");

    // Crea las tablas si no existen (¡usa solo en desarrollo!)
    await db.sequelize.sync({ force: false }); // ⚠️ force: true elimina todo y vuelve a crear

    console.log("📦 Tablas sincronizadas correctamente.");
  } catch (error) {
    console.error(
      "❌ Error al conectar o sincronizar la base de datos:",
      error
    );
  } finally {
    await db.sequelize.close();
  }
}

testConnection();
