import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    orderType: {
      type: String,
      required: [true, 'Please select type of service'],
      maxlength: 50,
      enum: ['Writing', 'Rewriting', 'Editing'],
    },

    paperType: {
      type: String,
      required: [true, 'Please select type of paper'],
      maxlength: 50,
      enum: [
        'Essay',
        'Admission Essay',
        'Annotated Bibliography',
        'Article Review',
        'Article Writing',
        'Book/Movie Review',
        'Creative Writing',
        'Case Study',
        'Research paper',
        'Term Paper',
        'Thesis/Desertation',
        'Other',
      ],
    },

    educationLevel: {
      type: String,
      required: [true, 'Please select Education Level'],
      maxlength: 50,
      enum: ['School', 'College', 'University', "Master's", 'Doctorate'],
      default: 'College',
    },

    subject: {
      type: String,
      maxlength: 50,
      enum: [
        'Accounting',
        'Advertising',
        'Agriculture',
        'Algebra',
        'American History',
        'Literature',
        'Anatomy',
        'Programming',
        'Psychiatry',
        'Psychology',
        'Public Administration',
        'Public Relations',
        'Python',
        'Religion and Theology',
        'Scholarship Writing',
        'Sex Education',
        'Literature',
        'Social work',
        'Sociology',
        'Special Education',
        'Sports and Athletics',
        'SQL',
        'Statistics',
        'Technology',
        'Telecommunications',
        'Tourism',
        'Trigonometry',
        'Urban and Environmental Planning',
        'Veterinary Science',
        'Visual Arts',
        'Web design',
      ],
    },

    topic: {
      type: String,
      maxlength: 100,
      required: [true, 'Please provide a topic for your paper'],
    },

    pages: {
      type: Number,
      default: 3,
    },

    sources: {
      type: Number,
      default: 3,
    },

    citationStyle: {
      type: String,
      maxlength: 50,
      enum: [
        'APA 6th edition',
        'APA 7th edition',
        'Chicago',
        'Havard',
        'MLA',
        'Other',
      ],
      default: 'APA 6th edition',
    },

    language: {
      type: String,
      maxlength: 20,
      enum: ['English (US)', 'English (UK)', 'Spanish', 'French'],
      default: 'English (US)',
    },

    deadline: {
      type: Date,
      required: [true, 'Please provide deadline date'],
    },

    // Text input, instructions:{ }
    //upload files fileupUpload: { }
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
