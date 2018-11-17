const Sequelize = require('sequelize')
const { DB_PASS, DB_USER, DB_HOST, DB_NAME } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  define: { charset: 'utf8mb4' },
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

// MODELS
const types = {
  UuidAsId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  Email: {
    type: Sequelize.STRING(191),
  },
}

const User = sequelize.define(
  'user',
  {
    id: types.UuidAsId,

    // Personal
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: types.Email,
  },
  { charset: 'utf8mb4' },
)

const Idea = sequelize.define(
  'idea',
  {
    id: types.UuidAsId,

    // Personal
    title: Sequelize.TEXT,
    description: Sequelize.TEXT,

    // Privacy
    isPublic: Sequelize.BOOLEAN,
    publicHash: Sequelize.TEXT,
  },
  { charset: 'utf8mb4' },
)

// Relations
User.hasMany(Idea)

module.exports = {
  sequelize,
  User,
  Idea,
}

sequelize.sync({})
