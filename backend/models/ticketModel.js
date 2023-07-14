const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: [
        'ICT',
        'Human Resource',
        'Intenal Audit',
        'Registry',
        'Public Communication',
        'Geo Exploration',
        'Finance',
        'Library',
        'Renewable Energy',
        'Planning',
        'PS office',
        'CS office',
        'CAS office',
        'SA office',
        'Electrical',
        'KOSAP'
      ]
    },
    description: {
      type: String,
      required: [true, 'Please enter a decription of the issue']
    },
    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'close'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)
